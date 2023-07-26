<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-21 16:13:44
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-26 18:29:36
 * @Description: 
 * @FilePath: /nuxt3-demo/components/Theme.vue
-->
<template>
    <div class="ping-component p-5">
        <select
            v-model="colorMode.preference"
            class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
        >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
        <div class="ant-slider mt-5 w-[180px]"></div>
    </div>
</template>
<script setup>
    const colorMode = useColorMode();
</script>
