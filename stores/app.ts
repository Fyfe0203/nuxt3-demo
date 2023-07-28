/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-26 14:44:47
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-28 18:32:45
 * @Description:
 * @FilePath: /nuxt3-demo/stores/app.ts
 */
// const delay = (t: number) => new Promise((r) => setTimeout(r, t));

import { useHttp } from '~/composables/useHttp';

interface State {
    count: number;
    authorization: string;
    address: string;
    chainId: number | undefined;
    chainType: string;
    chainList: ChainModel[];
    walletKey: string;
    user?: any;
}

export const useAppStore = defineStore('app', {
    state: (): State => ({
        count: 0,
        authorization: useCookie('authorization').value || '',
        address: '',
        chainId: undefined,
        chainType: '',
        chainList: [],
        walletKey: useCookie('wallet-key').value || '',
        user: undefined,
    }),
    getters: {
        double: (state) => state.count * 2,
        library(state) {
            return () => window[state.walletKey as any];
        },
        chain(state) {
            return state.chainList.find((i: ChainModel) => i.chainId === state.chainId);
        },
        selectChain(state) {
            return state.chainList.find((i: ChainModel) => i.chainType === state.chainType);
        },
        homeUrl: () => '/',
        loginUrl: () => '/login',
    },
    actions: {
        logout() {
            this.$patch({
                authorization: (useCookie('authorization').value = ''),
                walletKey: (useCookie('wallet-key').value = ''),
                address: '',
                chainId: undefined,
                chainType: '',
                user: undefined,
            });
            navigateTo(this.loginUrl);
        },
        login(user: any) {
            this.$patch({
                user,
                authorization: (useCookie('authorization').value = user?.token || ''),
            });
        },
        loginWallet() {},
        logoutWallet() {},
        async getUserInfo() {
            const { data } = await useHttp.get('/customer/info');
            const user: any = data.value?.data;
            this.$patch({
                user,
                authorization: useCookie('authorization').value || '',
            });
            return user;
        },
        async getChainList() {
            if (this.chainList?.length) {
                return this.chainList;
            }
            const { data } = await useHttp.get<ChainModel[]>('/chain/list');
            const result: ChainModel[] | undefined = data.value?.data;
            this.$patch({
                chainType: result?.[0].chainType ?? '',
                chainList: result ?? [],
            });
            return result;
        },
        increment() {
            this.count++;
        },
    },
});
