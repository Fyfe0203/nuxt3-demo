<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-28 11:16:30
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-07 15:32:15
 * @Description:
 * @FilePath: /nuxt3-demo/pages/login.vue
-->
<template>
    <div class="p-5 flex gap-5">
        登录页面

        <br />

        <n-button type="primary" @click="login">登录</n-button>
    </div>
</template>
<script setup>
    function login() {
        usePop.add({
            title: '登录',
            component: 'DialogLogin',
        });
    }
</script>
