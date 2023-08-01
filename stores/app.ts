/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-26 14:44:47
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-31 16:09:19
 * @Description:
 * @FilePath: /nuxt3-demo/stores/app.ts
 */
// const delay = (t: number) => new Promise((r) => setTimeout(r, t));

import { useHttp } from '~/composables/useHttp';

interface State {
    authorization: string;
    address: string;
    chainId: number | undefined;
    chainType: string;
    chainList: ChainModel[];
    walletKey: string;
    walletToken: string;
    user?: any;
}

export const useAppStore = defineStore('app', {
    state: (): State => ({
        authorization: useCookie('authorization').value || '',
        address: '',
        chainId: undefined,
        chainType: '',
        chainList: [],
        walletKey: '',
        walletToken: useCookie('wallet-token').value || '',
        user: undefined,
    }),
    getters: {
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
        async logout() {
            this.$patch({
                authorization: (useCookie('authorization').value = ''),
                user: undefined,
            });
            await this.logoutWallet();
            navigateTo(this.loginUrl);
        },
        login(user: any) {
            this.$patch({
                user,
                authorization: (useCookie('authorization').value = user?.token || ''),
            });
            navigateTo(this.homeUrl);
        },
        loginWallet() {
            if (this.address && this.walletKey) {
                this.$patch({
                    walletToken: (useCookie('wallet-token').value = [this.address, this.walletKey].join('_')),
                });
            }
        },
        logoutWallet() {
            this.$patch({
                walletToken: (useCookie('wallet-token').value = ''),
                walletKey: '',
                address: '',
                chainId: undefined,
                chainType: '',
            });
        },
        async getUserInfo() {
            const { data } = await useHttp.get('/customer/info');
            const user: any = data.value?.data;
            this.$patch({
                user,
            });
            return user;
        },
        async getChainList() {
            if (this.chainList?.length) {
                return this.chainList;
            }
            const { data } = await useHttp.get<ChainModel[]>('/chain/list');
            const result: ChainModel[] | undefined = data.value.data;
            this.$patch({
                chainType: result?.[0].chainType ?? '',
                chainList: result ?? [],
            });
            return result;
        },
    },
});

// if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
