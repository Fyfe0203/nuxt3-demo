/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-22 13:50:00
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-08 11:49:54
 * @Description:
 * @FilePath: /nuxt3-demo/nuxt.config.ts
 */
// https://nuxt.com/docs/api/configuration/nuxt-config

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { createRuntimeConfig } from './build';

export default defineNuxtConfig({
    devtools: true,
    ssr: true,
    devServer: {
        port: 3333,
    },
    app: {
        head: {
            title: 'Nuxt 3 测试项目',
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
                { rel: 'stylesheet', type: 'text/css', href: '/reset.css' },
            ],
            script: [{ src: '/fix-reset.js' }],
        },
    },
    css: ['@/assets/css/main.pcss'],
    runtimeConfig: createRuntimeConfig(),
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
        [
            '@nuxtjs/eslint-module',
            {
                // cache: false,
            },
        ],
        [
            '@nuxtjs/stylelint-module',
            {
                /* module options */
            },
        ],
    ],
    colorMode: {
        classSuffix: '',
        // fallback: 'light',
        // storageKey: 'color-mode',
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        // https://tailwindcss.nuxtjs.org/getting-started/options#injectposition,
        viewer: true,
        exposeConfig: true,
    },
    postcss: {
        plugins: {
            'postcss-color-gray': {},
        },
    },
    build: {
        transpile:
            process.env.NODE_ENV === 'production'
                ? ['naive-ui', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer']
                : ['@juggle/resize-observer'],
    },
    vite: {
        optimizeDeps: {
            include:
                process.env.NODE_ENV === 'development' ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone'] : [],
        },
        plugins: [
            AutoImport({
                imports: [
                    'vue',
                    {
                        'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
                    },
                ],
            }),
            Components({
                resolvers: [NaiveUiResolver()],
            }),
        ],
    },
    typescript: {
        tsConfig: {
            compilerOptions: {
                types: ['naive-ui/volar'],
            },
        },
    },
});
