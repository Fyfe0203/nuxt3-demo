<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-28 10:43:47
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-28 10:43:50
 * @Description: 
 * @FilePath: /nuxt3-demo/pages/secret.vue
-->
<template>
    <div>You've landed on a page that wasn't in the menu!</div>
</template>

<script setup>
    definePageMeta({
        middleware: 'named-test',
    });
</script>
