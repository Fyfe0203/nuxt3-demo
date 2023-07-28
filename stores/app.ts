/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-26 14:44:47
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-28 13:19:56
 * @Description:
 * @FilePath: /nuxt3-demo/stores/app.ts
 */
// const delay = (t: number) => new Promise((r) => setTimeout(r, t));

import { useHttp } from '~/composables/useHttp';

export const useAppStore = defineStore('app', {
    state: () => ({
        count: 0,
        authorization: useCookie('authorization').value || '',
        address: '',
        chainId: '',
        chainList: [],
        walletKey: useCookie('wallet-key').value || '',
        user: null,
    }),
    getters: {
        double: (state) => state.count * 2,
        homeUrl: () => '/',
        loginUrl: () => '/login',
    },
    actions: {
        logout() {
            this.$patch((state) => {
                useCookie('authorization').value = state.authorization = '';
                useCookie('wallet-key').value = state.walletKey = '';
                state.address = '';
                state.chainId = '';
                state.user = null;
            });
            navigateTo(this.loginUrl);
        },
        login(userinfo: any) {
            this.$patch((state) => {
                state.user = userinfo;
                state.authorization = useCookie('authorization').value = userinfo?.token || '';
            });
        },
        async getUserInfo() {
            const { data } = await useHttp.get('/customer/info');
            const result = data.value?.data;
            this.$patch((state) => {
                state.user = result as any;
                !state.authorization &&
                    (state.authorization = useCookie('authorization').value || '');
            });
            return result;
        },
        async getChainList() {
            if (this.chainList?.length) {
                return this.chainList;
            }
            const { data } = await useHttp.get('/chain/list');
            const result = data.value?.data;
            console.log('result', result);
            this.$patch((state) => {
                state.chainList = (result as any) ?? [];
            });
            return result;
        },
        increment() {
            this.count++;
        },
    },
});
