/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-27 11:13:14
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-27 11:16:16
 * @Description:
 * @FilePath: /nuxt3-demo/build/env.ts
 */
import { loadEnv } from 'vite';
import { wrapperEnv } from './utils';

interface EnvConfig {
    viteEnv: ViteEnv;
    mode: 'production' | 'development';
}

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd());
const viteEnv = wrapperEnv(env);

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';
export function useEnv(): EnvConfig {
    return {
        viteEnv,
        mode,
    };
}
