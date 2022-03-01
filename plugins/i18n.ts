import { createI18n } from 'vue3-i18n';
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

import en from '~/locales/en.json';
import cn from '~/locales/zh-cn.json';

export const languages = {
    [enUS.locale]: enUS,
    [zhCN.locale]: zhCN,
};

export const defaultLanguage = enUS.locale;

// 准备翻译的语言环境信息
const messages = {
    [enUS.locale]: en,
    [zhCN.locale]: cn,
};

// 通过选项创建 VueI18n 实例
export const i18n = createI18n({
    locale: defaultLanguage, // 设置地区 localStorage?.getItem('Language') ||
    messages, // 设置地区信息
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(i18n);
});
