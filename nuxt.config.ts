import { defineNuxtConfig } from 'nuxt3';
import { resolve } from 'pathe';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    alias: {
        images: resolve(__dirname, './assets/images'),
    },
});
