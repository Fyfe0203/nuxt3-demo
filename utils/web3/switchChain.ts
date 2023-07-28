/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-28 16:33:52
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-28 16:43:28
 * @Description:
 * @FilePath: /nuxt3-demo/utils/web3/switchChain.ts
 */
import { BigNumber } from '@ethersproject/bignumber';
import { hexStripZeros } from '@ethersproject/bytes';

interface ChainInfo {
    readonly explorer: string;
    readonly label: string;
    readonly logoUrl?: string;
    readonly rpcUrls?: string[];
    readonly centerToken?: { [key: string]: string };
    readonly nativeCurrency: {
        name: string; // 'Goerli ETH',
        symbol: string; // 'gorETH',
        decimals: number; //18,
    };
}

interface SwitchNetworkArguments {
    library: any;
    chainId: number;
    info: ChainInfo;
}

export async function switchToNetwork({ library, chainId, info }: SwitchNetworkArguments) {
    if (!library?.request) {
        return;
    }
    if (!chainId && library?.chainId) {
        chainId = +library.chainId;
    }
    const formattedChainId = hexStripZeros(BigNumber.from(chainId).toHexString());
    try {
        await library?.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: formattedChainId }],
        });
    } catch (error: any) {
        // 4902 is the error code for attempting to switch to an unrecognized chainId
        if (error.code === 4902 && chainId !== undefined) {
            // metamask (only known implementer) automatically switches after a network is added
            // the second call is done here because that behavior is not a part of the spec and cannot be relied upon in the future
            // metamask's behavior when switching to the current network is just to return null (a no-op)
            await addNetwork({ library, chainId, info });
        } else {
            throw error;
        }
    }
}

// provider.request returns Promise<any>, but wallet_switchEthereumChain must return null or throw
// see https://github.com/rekmarks/EIPs/blob/3326-create/EIPS/eip-3326.md for more info on wallet_switchEthereumChain
export async function addNetwork({ library, chainId, info }: SwitchNetworkArguments) {
    if (!library?.request) {
        return;
    }
    const formattedChainId = hexStripZeros(BigNumber.from(chainId).toHexString());
    try {
        await library?.request({
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: formattedChainId,
                    chainName: info.label,
                    rpcUrls: info.rpcUrls,
                    nativeCurrency: info.nativeCurrency,
                    blockExplorerUrls: [info.explorer],
                },
            ],
        });
        await switchToNetwork({ library, chainId, info });
    } catch (error) {
        console.error('error adding eth network: ', chainId, info, error);
        throw error;
    }
}
