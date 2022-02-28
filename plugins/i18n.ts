import { createI18n } from 'vue3-i18n';

// 准备翻译的语言环境信息
const messages = {
    en: {
        message: {
            hello: 'hello world',
        },
    },
    ja: {
        message: {
            hello: 'こんにちは、世界',
        },
    },
};

// 通过选项创建 VueI18n 实例
const i18n = createI18n({
    locale: 'ja', // 设置地区
    messages, // 设置地区信息
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(i18n);
});
