/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-25 13:27:31
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-28 13:19:31
 * @Description:
 * @FilePath: /nuxt3-demo/middleware/auth.ts
 */
import { useAppStore } from '@/stores/app';

export default defineNuxtRouteMiddleware(() => {
    const store = useAppStore();
    const isAuthenticated = store.authorization;
    if (!isAuthenticated) {
        return navigateTo(store.loginUrl);
    }
});
