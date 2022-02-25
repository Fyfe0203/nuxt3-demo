import { defineNuxtConfig } from 'nuxt3';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'NFT Shop',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, user-scalable=0',
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content: 'keywords',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'description',
            },
        ],
        link: [],
        script: [],
    },
    css: ['~/assets/css/tailwind.css'],
    alias: {
        '@': resolve(__dirname, './assets'),
    },
    buildModules: [],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                less: {
                    modifyVars: {
                        'primary-color': '#0AA679',
                    },
                    javascriptEnabled: true,
                },
            },
        },
        plugins: [
            Components({
                resolvers: [AntDesignVueResolver()],
            }),
        ],
        // @ts-expect-error: Missing ssr key
        ssr: {
            noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue'],
        },
    },
});
