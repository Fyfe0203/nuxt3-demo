<!--
 * @Author: freeser freeser@126.com
 * @Date: 2023-08-09 17:34:44
 * @LastEditors: freeser freeser@126.com
 * @LastEditTime: 2023-08-09 17:39:11
 * @Description: 
 * @FilePath: /nuxt3-ai-aide/components/Dialog/Content.vue
-->
<template>
    <el-drawer v-if="props.type === 'drawer'" v-bind="$attrs"><slot></slot></el-drawer>
    <el-dialog v-else v-bind="$attrs"><slot></slot></el-dialog>
</template>
<script setup>
    const props = defineProps({
        type: {
            type: String,
            default: 'dialog',
        },
    });
</script>
