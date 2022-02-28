import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: process.env?.BASE_URL ?? 'https://test.elfinkingdom.com',
    // 超时
    timeout: 60_000,
});
// request拦截器
service.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = ''; // 让每个请求携带自定义token 请根据实际情况自行修改
        config.headers['Language'] = '';
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (res) => {
        if (!res || !res.data) {
            return Promise.reject(res);
        }
        return res.data;
    },
    (error) => {
        console.log('err', error);
        return Promise.reject(error);
    }
);

function get(url, params) {
    return service.get(url, { params: params });
}

export default defineNuxtPlugin(() => {
    return {
        provide: {
            axios: {
                ...service,
                $get: get,
            },
        },
    };
});
