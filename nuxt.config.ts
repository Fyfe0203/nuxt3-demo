/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-22 13:50:00
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-26 18:36:04
 * @Description:
 * @FilePath: /nuxt3-demo/nuxt.config.ts
 */
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'stylesheet', type: 'text/css', href: '/theme.css' },
            ],
        },
    },
    css: ['@/assets/css/main.pcss'],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        [
            '@nuxtjs/i18n',
            {
                vueI18n: './i18n.config.ts',
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
        [
            '@nuxtjs/eslint-module',
            {
                /* module options */
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
});
