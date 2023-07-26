<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-25 13:08:39
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-26 15:06:03
 * @Description: 
 * @FilePath: /nuxt3-demo/pages/index.vue
-->
<template>
    <div class="min-h-[30vh] p-10 bg-[#ccddee]">
        <div class="test">
            PostCSS
            <span class="test_gray">Color Gray</span>
            is
            <span class="test_working">working</span>
            !
        </div>

        <form>
            <select v-model="locale">
                <option value="en">en</option>
                <option value="zh_CN">zh_CN</option>
            </select>
            <p>{{ $t('welcome') }}</p>
        </form>

        svg使用：
        <nuxt-icon name="m1" filled />
        <nuxt-icon name="arr-circle-right" />

        <div>
            store的使用
            <br />

            store.state.count: {{ store.count }}
            <br />
            store.getters.double: {{ store.double }}
            <br />
            <button @click="store.increment" class="bg-red-300 w-16">增加</button>
        </div>

        <div>
            composables使用
            <br />
            <div>
                Counter: {{ counter }}
                <button class="bg-green-300 w-16" @click="counter++">+</button>
                <button class="bg-red-300 w-16" @click="counter--">-</button>
            </div>
        </div>
    </div>
</template>
<script>
    // This will work in both `<script setup>` and `<script>`
    definePageMeta({
        layout: 'default',
    });
</script>
<script setup>
    import { useAppStore } from '@/stores/app';
    const { locale } = useI18n();
    const store = useAppStore();
    const counter = useCounter();
</script>
<style lang="postcss">
    .test {
        color: rgb(40, 176, 218);
        @apply p-4;

        &_working {
            @apply text-green-500;
        }

        &_gray {
            color: gray(50);
        }
    }
</style>
