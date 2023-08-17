<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-25 13:08:39
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-17 15:22:46
 * @Description:
 * @FilePath: /nuxt3-demo/pages/index.vue
-->
<template>
    <div class="min-h-[30vh] p-10">
        <div class="test">
            PostCSS
            <span class="test_gray">Color Gray</span>
            is
            <span class="test_working">working</span>
            !
        </div>

        <form class="pt-10">
            <div>翻译</div>
            <p>{{ $t('welcome') }}</p>
        </form>

        <div class="pt-10">
            svg使用：
            <nuxt-icon name="m1" filled />
            <nuxt-icon name="arr-circle-right" />
        </div>

        <div v-loading="pending" class="pt-10">
            composables使用
            <br />
            <div>
                Counter: {{ counter }}
                <button class="bg-green-300 w-16" @click="counter++">+</button>
                <button class="bg-red-300 w-16" @click="counter--">-</button>
            </div>
        </div>

        <div class="pt-10">
            element-plus使用：
            <br />
            <el-button @click="ElMessage('hello')">button</el-button>
            <ElButton type="success">button</ElButton>
            <LazyElButton type="warning">lazy button</LazyElButton>
        </div>

        <div class="pt-10">
            查询数据：
            <br />
            <!-- {{ data || '' }} -->
        </div>
        <Avatar></Avatar>
    </div>
</template>
<script>
    // This will work in both `<script setup>` and `<script>`
    // definePageMeta({
    //     layout: 'default',
    // });
</script>
<script setup>
    const counter = useCounter();
    // 另外一种方式
    // useApi().login.getUserInfo()

    // const { data, pending } = await useFetch(() => '/banner/list?type=' + counter.value, {
    //     method: 'post',
    //     baseURL: '/front-api',
    // });
    // const { data, pending } = await useHttp.post(() => '/banner/list?type=' + counter.value);
</script>
<style lang="postcss">
    .test {
        color: rgb(40, 176, 218);

        &_gray {
            color: gray(50);
        }
        @apply p-4;
    }
</style>
