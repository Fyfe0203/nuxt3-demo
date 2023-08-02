/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-27 11:15:03
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-01 15:05:58
 * @Description:
 * @FilePath: /nuxt3-demo/types/module.d.ts
 */
declare module '#app' {
    interface PageMeta {
        title: string;
    }
}

declare global {
    declare interface ChainModel {
        chainType: string;
        chainName: string;
        chainId: number;
        coinCode: string;
        coinName: string;
        decimals: number;
        imgUrl: string;
        protocol: string;
        rpcUrls: string;
        scanUrl: string;
        baseCoinCode: string;
    }
}
// It is always important to ensure you import/export something when augmenting a type
export {};
