<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-25 13:08:39
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-21 18:04:29
 * @Description: 
 * @FilePath: /nuxt3-demo/pages/index.vue
-->
<template>
    <div class="h-[30vh] bg-[#ccddee]">
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
    </div>
</template>
<script>
    // This will work in both `<script setup>` and `<script>`
    definePageMeta({
        layout: 'default',
    });
</script>
<script setup>
    const { locale } = useI18n();
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
