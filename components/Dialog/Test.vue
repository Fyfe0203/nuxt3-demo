<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-08-02 09:46:44
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-02 18:31:29
 * @Description: 
 * @FilePath: /nuxt3-demo/components/Dialog/Test.vue
-->
<!-- test.vue -->
<template>
    <div class="p-5">
        父弹窗{{ props.id }}
        <a-button type="primary" @click="openChildDialog">打开子dialog</a-button>
        <a-button type="primary" @click="closeDialog">关闭弹窗</a-button>
    </div>
</template>

<script setup>
    const props = defineProps({
        id: {
            type: Number,
            default: 0,
        },
    });
    const emit = defineEmits(['close']);
    const closeDialog = () => {
        emit('close', 1, 23);
    };

    const openChildDialog = () => {
        useDialog.add({
            title: '我是子dialog',
            width: '500px',
            component: 'DialogTest2',
        });
    };
</script>
