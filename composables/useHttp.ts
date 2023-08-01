import type { FetchResponse } from 'ofetch';
import type { Ref } from 'vue';
import type { UseFetchOptions, AsyncData } from '#app';
import { ElMessage } from 'element-plus';
import { stringify } from 'qs';
import { useAppStore } from '~/stores/app';

export interface ResOptions<T> {
    data: T;
    code: number;
    message: string;
    success: boolean;
}

type UrlType = string | Request | Ref<string | Request> | (() => string | Request);

export type HttpOption<T> = UseFetchOptions<ResOptions<T>>;

function handleError<T>(response: FetchResponse<ResOptions<T>> & FetchResponse<ResponseType>) {
    const res = response?._data;
    const err = (text: string) => {
        ElMessage({
            message: res?.message ?? text,
            type: 'error',
        });
    };
    if (!res) {
        err('请求超时，服务器无响应！');
        return;
    }
    const appStore = useAppStore();
    const handleMap: { [key: number]: () => void } = {
        200: () => handleMap[res.code]?.(),
        404: () => err('服务器资源不存在'),
        500: () => err('服务器内部错误'),
        403: () => err('没有权限访问该资源'),
        '-1': () => err('内部错误'),
        401: () => {
            err('登录状态已过期，需要重新登录');
            appStore.logout();
        },
    };
    handleMap[response.status] ? handleMap[response.status]() : err('未知错误！');
}

function fetch<T>(url: UrlType, option: any): Promise<AsyncData<ResOptions<T>, Error>> {
    return new Promise((resolve, reject) => {
        useFetch<ResOptions<T>>(url, {
            // 请求拦截器
            onRequest({ options }) {
                // get方法传递数组形式参数
                // 添加baseURL,nuxt3环境变量要从useRuntimeConfig里面取
                const {
                    public: { apiBase },
                } = useRuntimeConfig();

                options.baseURL = String(url).includes('://') ? '' : apiBase;
                // 添加请求头,没登录不携带token
                const store = useAppStore();
                options.headers = new Headers(options.headers || {});
                if (store.address) {
                    options.headers.set('Address', store.address);
                }
                if (store.authorization) {
                    options.headers.set('Authorization', store.authorization);
                }
            },
            // 响应拦截
            onResponse({ response }) {
                const res = response._data || {};
                // 在这里判断错误
                if (response.status !== 200 || res.code !== 0) {
                    handleError<T>(response);
                }
            },
            // 错误处理
            onResponseError({ response }) {
                handleError<T>(response);
            },
            // 合并参数
            ...option,
        })
            .then((res) => {
                const { data } = res;
                if (data.value?.code === 0) {
                    // res => { data:T, pending, refresh, error ... } => AsyncData
                    resolve(res as AsyncData<ResOptions<T>, Error>);
                } else {
                    reject(data.value);
                }
            })
            .catch(reject);
    });
}

function fixFormHeader(headers: any) {
    headers = headers || {};
    headers['Content-type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    return headers;
}

// 自动导出
export const useHttp = {
    get: <T>(url: UrlType, params?: any, option?: HttpOption<T>) => {
        return fetch<T>(url, { method: 'get', params, ...option });
    },

    post: <T>(url: UrlType, body?: any, option?: HttpOption<T>) => {
        return fetch<T>(url, { method: 'post', body, ...option });
    },

    postForm: <T>(url: UrlType, body?: any, option?: HttpOption<T>) => {
        return fetch<T>(url, {
            method: 'post',
            body: stringify(body),
            ...option,
            headers: fixFormHeader(option?.headers),
        });
    },

    put: <T>(url: UrlType, body?: any, option?: HttpOption<T>) => {
        return fetch<T>(url, { method: 'put', body, ...option });
    },

    delete: <T>(url: UrlType, body?: any, option?: HttpOption<T>) => {
        return fetch<T>(url, { method: 'delete', body, ...option });
    },
};
