<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-08-01 17:51:58
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-07 13:47:26
 * @Description: 
 * @FilePath: /nuxt3-demo/components/Dialog/Index.vue
-->
<template>
    <Teleport to="body">
        <a-modal
            v-for="(i, idx) in useDialog.list"
            :key="i.key"
            v-model:open="i.visible"
            :title="i.title"
            :width="i.width"
            :class="i.class"
            :footer="i.footer || null"
            :centered="i.centered ?? false"
            :closable="i.closable ?? true"
            @cancel="() => cancel(i, idx)"
        >
            <component :is="i.component" v-bind="i.props" @close="(...args) => close(i, idx, args)" />
        </a-modal>
    </Teleport>
</template>

<script setup>
    async function close(i, idx, args) {
        if (i.beforeClose) {
            await i.beforeClose();
        }
        cancel(i, idx, args);
    }
    function cancel(i, idx, args) {
        i.visible = false;
        setTimeout(() => useDialog.close(i, idx, args), 300);
    }
</script>
