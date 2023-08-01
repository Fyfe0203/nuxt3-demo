<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-31 15:33:21
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-01 14:20:21
 * @Description:
 * @FilePath: /nuxt3-demo/components/Header/Account.vue
-->
<template>
    <nuxt-link v-if="!isAuthor" to="/login">登录</nuxt-link>
    <div v-else class="gap-5">
        <button v-if="!isWalletLogin" @click="openlinkWallet">链接钱包</button>
        <span v-else>已登录 {{ store.address }}</span>
        <button class="bg-red-400" @click="store.logout">退出</button>
    </div>
</template>

<script setup>
    import { useAppStore } from '@/stores/app';
    import { useWalletList } from '@/utils/web3/wallet-list';

    const store = useAppStore();
    const isAuthor = computed(() => store.authorization);

    const isWalletLogin = computed(() => store.walletToken);
    watchEffect(() => {
        if (isWalletLogin.value && !store.address && process.client) {
            const { WalletList } = useWalletList();
            const [, walletKey] = store.walletToken.split('_');
            const wallet = WalletList.find((i) => i.key === walletKey);
            if (wallet) {
                console.log('自动登录钱包');
                wallet.login(wallet);
            }
        }
    });

    function openlinkWallet() {
        console.log('openlinkWallet');
    }
</script>
