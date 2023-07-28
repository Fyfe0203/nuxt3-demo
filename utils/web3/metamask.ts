import detectEthereumProvider from '@metamask/detect-provider';
import { isMobile } from '../index';
import { WalletKeys } from './wallet-list';
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

    const bindEvent = async (provider: any) => {
        const account = await provider.request({ method: 'eth_accounts' });
        await handleNewAccounts(account);
        await handlenNewChainId(+provider.chainId);

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
        const provider =
            detectedProvider?.providers?.find((provider: any) => provider.isMetaMask) ??
            detectedProvider;

        if (provider) {
            window[WalletKey] = provider;
            await bindEvent(provider);
            await connectWallet();
        } else {
            if (isMobile()) {
                // https://metamask.app.link/dapp/www.baidu.com
                return window.open(
                    'https://metamask.app.link/dapp/' + location.href.split('://')[1]
                );
            }
            window.open('https://metamask.io/');

            // 没安装
            store.$patch({
                walletKey: undefined,
            });
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
        store.$patch({
            walletKey: WalletKey,
        });
        try {
            const provider: any = window[WalletKey];
            if (provider) {
                const newAccounts = await provider.request({ method: 'eth_requestAccounts' });
                await handleNewAccounts(newAccounts);
                await handlenNewChainId(provider.chainId);
            } else {
                await initWallet();
            }
        } catch (error) {
            console.error('connectWallet', error);
        }
    };

    return { init: connectWallet, kill: disConnect };
}
