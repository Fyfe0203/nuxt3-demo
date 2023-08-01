import ABI_TOKEN from './TOKEN_ABI.json';
import { useAppStore } from '@/stores/app';

export const getWeb3 = (provider: any) => {
    return new window.Web3(getProvider(provider));
};

export const getProvider = (provider: any) => {
    let p = typeof provider === 'string' ? window[provider as any] : provider;
    if (!p) {
        const store = useAppStore();
        const u = store.selectChain?.rpcUrls;
        u && (p = new window.Web3.providers.HttpProvider(u));
    }
    return p || (window.ethereum?.providers?.find((i: any) => i.isMetaMask) ?? window.ethereum);
};

interface ItemModel {
    provider?: any;
    address: string;
    abi?: any;
}

export const getContract = ({ provider, address, abi }: ItemModel) => {
    const web3 = getWeb3(provider);
    if (!address || !web3.utils.isAddress(address)) {
        return null;
    }
    return new web3.eth.Contract(abi || ABI_TOKEN, address);
};

// 查询主币余额
export const getBalanceEth = async (provider: any, userAddress: string) => {
    if (!userAddress) return '0';
    try {
        return await getWeb3(provider).eth.getBalance(userAddress.toLowerCase());
    } catch (e: any) {
        console.error('getBalance: ' + (e?.message || e));
        return '0';
    }
};

// 代币余额查询
export const getBalance = async (provider: any, tokenAddress: string, userAddress: string) => {
    if (!tokenAddress || !userAddress) return '0';

    const contract: any = getContract({ provider, address: tokenAddress });
    try {
        return await contract?.methods.balanceOf(userAddress.toLowerCase()).call();
    } catch (e: any) {
        console.error('balanceOf: ' + (e?.message || e));
        return '0';
    }
};

interface SiganTure {
    error: any;
    result: string;
}

/**
 * Sign messages using web3 personal signatures
 * @param message message to sign
 * @returns A signature if provider can sign, otherwise null
 */
export async function personalSignAsync(message: string) {
    const store = useAppStore();
    const { address: signerAddress, walletKey } = store;
    const web3: any = getWeb3(walletKey);
    const msg = message; // web3.utils.stringToHex(message);
    const signature: SiganTure = (await promisify((c: any) =>
        web3.currentProvider.sendAsync(
            {
                method: 'personal_sign',
                params: [msg, signerAddress],
                from: signerAddress,
                id: new Date().getTime(),
            },
            c
        )
    )) as SiganTure;

    const error = signature.error;
    if (error) {
        throw new Error(error);
    }

    return signature?.result;
}

/**
 * Sign messages using web3 signTypedData signatures
 * @param walletKey walletKey
 * @param message message to sign
 * @param signerAddress web3 address signing the message
 * @returns A signature if provider can sign, otherwise null
 */
export async function signTypedDataAsync(message: string) {
    const store = useAppStore();
    const { address: signerAddress, walletKey } = store;
    const web3: any = getWeb3(walletKey);
    let signature: SiganTure;
    try {
        signature = (await promisify((c: any) =>
            web3.currentProvider.sendAsync(
                {
                    method: 'eth_signTypedData_v4',
                    params: [signerAddress, JSON.stringify(message)],
                    from: signerAddress,
                    id: new Date().getTime(),
                },
                c
            )
        )) as SiganTure;
    } catch (error: any) {
        throw new Error(error?.message || error);
    }

    const error = signature.error;
    if (error) {
        throw new Error(error);
    }

    return signature?.result;
}

/**
 * Promisify a callback-syntax web3 function
 * @param inner callback function that accepts a Web3 callback function and passes
 * it to the Web3 function
 */
function promisify(inner: Function) {
    return new Promise((resolve, reject) =>
        inner((err: any, res: any) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        })
    );
}
