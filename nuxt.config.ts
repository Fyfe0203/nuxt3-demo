/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-22 13:50:00
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-02 13:57:02
 * @Description:
 * @FilePath: /nuxt3-demo/nuxt.config.ts
 */
// https://nuxt.com/docs/api/configuration/nuxt-config

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';
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
            ],
        },
    },
    css: ['element-plus/theme-chalk/dark/css-vars.css', '@/assets/css/main.pcss'],
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
        ['@element-plus/nuxt', {}],
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
    build: {
        transpile: process.env.npm_lifecycle_event === 'build' ? ['element-plus'] : [],
    },
    vite: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver(), IconsResolver()],
            }),
            Components({
                dts: true,
                resolvers: [
                    ElementPlusResolver({
                        importStyle: true,
                    }),
                ],
            }),
        ],
    },
    // typescript: {
    //     tsConfig: {
    //         compilerOptions: {
    //             types: ['element-plus/global'],
    //         },
    //     },
    // },
});
