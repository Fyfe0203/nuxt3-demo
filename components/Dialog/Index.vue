<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-08-01 17:51:58
 * @LastEditors: freeser freeser@126.com
 * @LastEditTime: 2023-08-16 16:02:09
 * @Description: 
 * @FilePath: /nuxt3-ai-aide/components/Dialog/Index.vue
-->
<template>
    <DialogContent
        v-if="item"
        v-model="item.visible"
        :type="item.type"
        :title="item.title"
        :width="item.width"
        :size="item.width"
        :class="item.class"
        :before-close="item.beforeClose"
        :show-close="item.showClose"
        append-to-body
        @close="() => close(item, index)"
    >
        <component
            :is="item.component"
            v-bind="item.props"
            @before-close="(fn) => (item.beforeClose = fn)"
            @close="(...args) => close(item, index, args)"
        />
        <Dialog v-if="hasNext" :index="nextIdx" />
    </DialogContent>
</template>

<script setup>
    const props = defineProps({
        index: {
            type: Number,
            default: 0,
        },
    });
    const index = computed(() => props.index);
    const item = computed(() => useDialog.list?.[index.value]);
    const nextIdx = computed(() => index.value + 1);
    const hasNext = computed(() => !!useDialog.list[nextIdx.value]);

    function close(i, idx, args) {
        i.visible = false;
        // 执行回调操作
        if (args && args.length && i.afterClose) i.afterClose(...args);
        setTimeout(() => useDialog.close(i, idx), 300);
    }
</script>
