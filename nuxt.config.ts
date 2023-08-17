/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-22 13:50:00
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-16 18:43:37
 * @Description:
 * @FilePath: /nuxt3-demo/nuxt.config.ts
 */
// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from 'url';

export default defineNuxtConfig({
    devtools: true,
    ssr: false,
    devServer: {
        port: 3333, // 会被"dev": "nuxt dev --dotenv .env.development -p 3333",里的覆盖
    },
    app: {
        head: {
            title: 'AI助手',
            charset: 'utf-8',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'ElementPlus + Nuxt3',
                },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'stylesheet', type: 'text/css', href: '/theme.css' },
            ],
            script: [{ src: '/google-client.js' }],
        },
        // This can be set at runtime by setting the NUXT_APP_BASE_URL environment variable.
        baseURL: '/', // The base path of your Nuxt application.
    },
    css: ['@/assets/css/element.css', '@/assets/css/main.pcss'], // 'element-plus/theme-chalk/dark/css-vars.css',
    runtimeConfig: {
        public: {
            baseURL: process.env.NUXT_PUBLIC_BASE_URL,
        },
    },
    alias: {
        stores: fileURLToPath(new URL('./stores', import.meta.url)),
    },
    components: {
        global: true,
        dirs: ['~/components'],
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        [
            '@nuxtjs/i18n',
            {
                lazy: true,
                langDir: 'locales',
                defaultLocale: 'en',
                strategy: 'no_prefix',
                locales: [
                    {
                        code: 'en',
                        name: 'English',
                        file: 'en.json',
                    },
                    { code: 'zh_CN', name: '简体中文', file: 'zh_CN.json' },
                ],
                detectBrowserLanguage: {
                    cookieKey: 'Language',
                },
            },
        ],
        'nuxt-icons',
        // https://pinia.vuejs.org/ssr/nuxt.html
        // yarn add pinia @pinia/nuxt
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore'],
            },
        ],
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module',
        '@element-plus/nuxt',
    ],
    colorMode: {
        classSuffix: '',
        // fallback: 'light',
        // storageKey: 'color-mode',
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        injectPosition: 'last',
        viewer: true,
        exposeConfig: true,
    },
    postcss: {
        plugins: {
            'postcss-color-gray': {},
        },
    },
    typescript: {
        strict: true,
        shim: false,
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/css/var.scss" as element;',
                },
            },
        },
    },
    elementPlus: {
        importStyle: 'scss',
    },
    routeRules: {
        '/front-api/**': {
            proxy: {
                to: 'http://124.70.79.129:7098/front-api/**',
            },
        },
    },
});
