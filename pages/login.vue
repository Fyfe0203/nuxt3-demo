<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-28 11:16:30
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-28 13:12:32
 * @Description: 
 * @FilePath: /nuxt3-demo/pages/login.vue
-->
<template>
    <div class="p-5 flex gap-5">
        登录页面
        <button class="bg-green-300" @click="login">登录</button>
    </div>
</template>

<script setup>
    import { useAppStore } from '@/stores/app';
    const store = useAppStore();
    function login() {
        store.login({ token: '123fjdsfqjkerjwqfksjdafjldsalkfkl' });
        navigateTo('/account');
    }
</script>
