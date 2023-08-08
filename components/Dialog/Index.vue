<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-08-01 17:51:58
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-08 10:17:56
 * @Description: 
 * @FilePath: /nuxt3-demo/components/Dialog/Index.vue
-->
<template>
    <Teleport to="body">
        <n-modal
            v-for="(i, idx) in usePop.list"
            :key="i.key"
            v-model:show="i.visible"
            preset="card"
            :style="{ width: i.width || '600px' }"
            :closable="i.closable ?? true"
            :title="i.title"
            :class="i.class"
            :on-esc="() => cancel(i, idx)"
            :on-close="() => cancel(i, idx)"
            :on-mask-click="() => cancel(i, idx)"
        >
            <component :is="i.component" v-bind="i.props" @close="(...args) => close(i, idx, args)" />
        </n-modal>
    </Teleport>
</template>

<script setup>
    async function close(i, idx, args) {
        try {
            if (i.beforeClose) {
                await i.beforeClose();
            }
            cancel(i, idx, args);
        } catch (error) {}
    }
    function cancel(i, idx, args) {
        i.visible = i.open = false;
        setTimeout(() => usePop.close(i, idx, args), 300);
    }
    watchEffect(() => {
        usePop.list.forEach((item) => {
            if (item.visible !== item.open) {
                setTimeout(() => (item.visible = item.open), 50);
            }
        });
    });
</script>
