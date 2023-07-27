/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-27 14:49:43
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-27 15:43:16
 * @Description:
 * @FilePath: /nuxt3-demo/plugins/i18n.ts
 */
export default defineNuxtPlugin((nuxtApp: any) => {
    nuxtApp.$i18n.onBeforeLanguageSwitch = (
        oldLocale: any,
        newLocale: any,
        isInitialSetup: any
    ) => {
        console.log(
            'onBeforeLanguageSwitch',
            oldLocale,
            'newLocale',
            newLocale,
            'isInitialSetup',
            isInitialSetup
        );
    };
});
