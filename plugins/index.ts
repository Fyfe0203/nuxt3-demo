import { useAppStore } from '@/stores/app';

/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-27 14:49:43
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-28 10:55:51
 * @Description:
 * @FilePath: /nuxt3-demo/plugins/index.ts
 */
export default defineNuxtPlugin((nuxtApp: any) => {
    // process.client

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

    // 应用于所有组件
    addRouteMiddleware(
        'global-middle',
        async () => {
            const app = useAppStore();
            await app.getChainList();
            console.log('this global middleware was added in a plugin');
        },
        { global: true }
    );

    addRouteMiddleware('named-test', () => {
        console.log('this named middleware was added in a plugin');
        // return false为阻止
        // return '/secret'为跳转到新页面
    });

    // definePageMeta({
    //     middleware: 'named-test'
    // })
});
