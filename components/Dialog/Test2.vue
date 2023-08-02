<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-08-02 09:50:36
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-02 11:17:16
 * @Description: 
 * @FilePath: /nuxt3-demo/components/Dialog/Test2.vue
-->
<!-- child.vue -->
<template>
    <div class="p-5">
        子弹窗
        <el-button type="primary" @click="closeDialog">关闭弹窗</el-button>
    </div>
</template>

<script setup lang="ts">
    const emit = defineEmits(['close']);
    const closeDialog = () => {
        emit('close', 1, 2, 34);
    };
</script>
