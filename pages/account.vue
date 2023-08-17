<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-28 11:10:48
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-17 15:13:22
 * @Description:
 * @FilePath: /nuxt3-demo/pages/account.vue
-->
<template>
    <div>
        登录成功后的页面
        <br />
        <Avatar></Avatar>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth',
    });
</script>
