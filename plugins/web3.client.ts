/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-31 11:58:12
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-31 13:19:10
 * @Description:
 * @FilePath: /nuxt3-demo/plugins/web3.client.ts
 */
import Web3 from 'web3';

export default defineNuxtPlugin(() => {
    (window as any).Web3 = Web3;
});
