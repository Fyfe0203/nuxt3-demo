/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-28 17:33:32
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-17 15:15:43
 * @Description:
 * @FilePath: /nuxt3-demo/utils/web3/metamask.ts
 */
import detectEthereumProvider from '@metamask/detect-provider';
import { WalletKeys } from './wallet-list';
import { isMobile } from '~/utils';
import { useAppStore } from '@/stores/app';

export function useWalletMetaMask() {
    const WalletKey: any = WalletKeys.METAMASK;
    const store = useAppStore();

    const handleNewAccounts = (newAccounts: string[]) => {
        store.$patch({
            address: newAccounts[0],
        });
    };

    const handlenNewChainId = (chainId: number) => {
        store.$patch({
            chainId,
        });
    };

    const bindEvent = (provider: any) => {
        provider.on('accountsChanged', handleNewAccounts);
        provider.on('chainChanged', async (chainId: any) => {
            await provider.request({ method: 'eth_chainId' });
            await handlenNewChainId(+chainId);
        });
        provider.on('connect', () => {
            console.log('connect');
        });
        provider.on('disconnect', () => {
            console.log('wallet disconnect');
        });

        // provider.on('message', (message) => {
        //     console.log('wallet message', message);
        // });

        if (timer) clearInterval(timer);

        timer = setInterval(() => {
            provider.request({ method: 'eth_requestAccounts' });
        }, 60000);
    };

    let timer: any;
    // init wallet
    const initWallet = async () => {
        const detectedProvider: any = await detectEthereumProvider();
        const provider = detectedProvider?.providers?.find((provider: any) => provider.isMetaMask) ?? detectedProvider;

        if (provider) {
            return (window[WalletKey] = provider);
        } else {
            if (isMobile()) {
                // https://metamask.app.link/dapp/www.baidu.com
                window.open('https://metamask.app.link/dapp/' + location.href.split('://')[1]);
                return;
            }
            window.open('https://metamask.io/');
        }
    };

    // network chainchange
    const disConnect = () => {
        const provider = window[WalletKey];
        if (timer) clearInterval(timer);
        if (provider) {
            delete window[WalletKey];
            store.logout();
        }
    };

    // connect wallet
    const connectWallet = async () => {
        try {
            let provider: any = window[WalletKey];
            if (!provider) {
                provider = await initWallet();
                await bindEvent(provider);
            }

            const account = await provider.request({ method: 'eth_accounts' });
            await handleNewAccounts(account);
            await handlenNewChainId(+provider.chainId);
            store.$patch({
                walletKey: WalletKey,
            });
        } catch (error) {
            console.error('connectWallet', error);
        }
    };

    return { init: connectWallet, kill: disConnect, bindEvent, initWallet };
}
