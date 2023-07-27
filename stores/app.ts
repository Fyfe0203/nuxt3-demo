/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-26 14:44:47
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-27 11:48:42
 * @Description:
 * @FilePath: /nuxt3-demo/stores/app.ts
 */
// const delay = (t: number) => new Promise((r) => setTimeout(r, t));

import { useHttp } from '~/composables/useHttp';

export const useAppStore = defineStore('app', {
    state: () => ({
        count: 0,
        authorization: '',
        address: '',
        chainId: '',
        chainList: [],
        walletKey: '',
        user: null,
    }),
    getters: {
        double: (state) => state.count * 2,
    },
    actions: {
        logout() {
            this.$patch((state) => {
                state.authorization = '';
                state.address = '';
                state.chainId = '';
                state.walletKey = '';
                state.user = null;
            });
        },
        async getChainList() {
            if (this.chainList.length) {
                return this.chainList;
            }
            const result: any = await useHttp.get('/chain/list');
            console.log('result', result);
            this.$patch((state) => {
                state.chainList = result;
            });
            return result;
        },
        increment() {
            this.count++;
        },
    },
});
