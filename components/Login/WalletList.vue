<!--
 * @Author: freeser freeser@126.com
 * @Date: 2022-11-21 18:55:41
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-02 18:27:16
 * @Description:
 * @FilePath: /nuxt3-demo/components/Login/WalletList.vue
-->
<template>
    <div class="grid gap-5">
        <div v-for="i in list" :key="i.key">
            <div
                class="p-5 flex items-center gap-5 wallet-item"
                :class="i.disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:opacity-80'"
                @click="i.login(i)"
            >
                <nuxt-icon
                    :name="i.loading ? 'loading' : 'wallet/' + i.icon"
                    class="text-[22px]"
                    :class="{ 'animate-spin': i.loading }"
                    filled
                />
                <div class="main-color MiSemi8 flex-1 text-left">{{ i.name }}</div>
                <nuxt-icon name="arr_down" class="transform -rotate-90 text-[10px]" />
            </div>
        </div>
    </div>
</template>

<script>
    import { useWalletList } from '@/utils/web3/wallet-list';
    export default {
        name: 'LoginWalletList',
        props: {
            params: {
                type: Object,
                default: () => ({}),
            },
            callback: {
                type: Function,
                default: () => null,
            },
        },
        setup(props) {
            const { params, callback } = toRefs(props);
            const { WalletList } = useWalletList(unref(params), unref(callback));
            return {
                list: reactive(WalletList),
            };
        },
    };
</script>

<style lang="postcss">
    .wallet-item {
        border-radius: 16px;
        background: linear-gradient(90deg, #f5faff 0%, #e9f3ff 100%, #e9f3ff 100%);
    }
</style>
