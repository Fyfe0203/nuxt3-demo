/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-22 13:50:00
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-25 14:47:58
 * @Description:
 * @FilePath: /nuxt3-demo/nuxt.config.ts
 */
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
    },
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
