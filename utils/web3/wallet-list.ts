import { switchToNetwork } from './switchChain';
import { useWalletMetaMask } from './metamask';
import { personalSignAsync } from './erc20';
import { sleep } from '@/utils';
import { useAppStore } from '@/stores/app';

const WalletKeys = {
    METAMASK: 'METAMASK',
    WALLETCONNECT: 'WALLETCONNECT',
    FORTMATIC: 'FORTMATIC',
    WALLETLINK: 'WALLETLINK',
};

async function switchChain(chainItem?: ChainModel) {
    const { chainList, library, chain } = useAppStore();
    const defautChain = chainItem || chainList[0];
    if ((chainItem || !chain) && defautChain?.chainId) {
        await switchToNetwork({
            library: library(),
            chainId: defautChain.chainId,
            info: {
                label: defautChain.chainName,
                rpcUrls: defautChain.rpcUrls.split(','),
                nativeCurrency: {
                    name: defautChain.coinName,
                    symbol: defautChain.coinCode,
                    decimals: defautChain.decimals,
                },
                explorer: defautChain.scanUrl,
            },
        });
    }
}

async function signAddress() {
    const store = useAppStore();
    const { address, walletKey } = store;
    if (!walletKey) {
        throw new Error('no login wallet');
    }
    const random = String(new Date());
    const sign = await personalSignAsync(random);
    const { data } = await useHttp.postForm('/address-login', {
        address,
        random,
        sign,
    });
    await store.login(data.value?.data);
}

function useWalletList(params: any, dialogCallback: Function) {
    // const walletConnect = useWalletConnect();
    const metamask = useWalletMetaMask();
    const store = useAppStore();

    async function loginCallback(needSign: boolean) {
        const { address, walletKey } = store;
        if (!address || !walletKey) {
            return console.log('no login wallet');
        }

        await switchChain();
        if (needSign || !store.authorization) {
            await signAddress();
        }
        await store.loginWallet();
        await store.getUserInfo();
        typeof dialogCallback === 'function' && dialogCallback(address);
    }

    async function loginFun(i: any, callback: Function) {
        if (i.disabled) return;
        try {
            i.loading = true;
            await callback();
            await sleep(1000);
            await loginCallback(!!params?._sign);
        } catch (e: any) {
            console.error('connect wallet: ', e);
            store.logoutWallet();
        } finally {
            i.loading = false;
        }
    }

    const WalletList = [
        {
            key: WalletKeys.METAMASK,
            name: 'MetaMask',
            icon: 'MetaMask',
            desc: 'Connect to your MetaMask Walley',
            login: (i: any) => loginFun(i, metamask.init),
            logout: metamask.kill,
            loading: false,
        },
        // {
        //     key: WalletKeys.WALLETCONNECT,
        //     name: 'WalletConnect',
        //     icon: 'WalletConnect',
        //     desc: 'Scan with WalletConnect to connect',
        //     login: (i) => loginFun(i, walletConnect.init),
        //     logout: walletConnect.kill,
        //     loading: false,
        // },
    ];

    return { WalletList };
}

export { WalletKeys, useWalletList, switchChain, signAddress };
