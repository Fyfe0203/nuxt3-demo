<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-08-02 18:10:00
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-02 18:27:53
 * @Description: 
 * @FilePath: /nuxt3-demo/components/Dialog/Login.vue
-->
<template>
    <div>
        <LoginWalletList :callback="closeDialog" />
    </div>
</template>
<script setup lang="ts">
    const emit = defineEmits(['close']);
    const closeDialog = (...args: any[]) => {
        emit('close', ...args);
    };
</script>
