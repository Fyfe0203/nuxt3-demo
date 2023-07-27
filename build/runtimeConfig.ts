/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-27 11:12:44
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-27 11:17:35
 * @Description:
 * @FilePath: /nuxt3-demo/build/runtimeConfig.ts
 */
import type { NuxtConfig } from '@nuxt/schema';
import { useEnv } from './env';

export function createRuntimeConfig(): NuxtConfig['runtimeConfig'] {
    const { viteEnv } = useEnv();
    return {
        public: {
            apiBase: viteEnv.VITE_APP_BASE_URL,
            appTitle: viteEnv.VITE_APP_TITLE,
        },
    };
}
