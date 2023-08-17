<!--
 * @Author: freeser freeser@126.com
 * @Date: 2023-08-09 17:34:44
 * @LastEditors: freeser freeser@126.com
 * @LastEditTime: 2023-08-10 11:25:05
 * @Description: 
 * @FilePath: /nuxt3-ai-aide/components/Dialog/Content.vue
-->
<template>
    <el-drawer v-if="props.type === 'drawer'" v-bind="$attrs" :show-close="false">
        <template #header="{ close, titleId, titleClass }">
            <div class="flex-center-x p-5 md:p-10">
                <div :id="titleId" :class="titleClass" class="flex-1">
                    {{ props.title }}
                </div>
                <button
                    v-if="props.showClose"
                    class="text-[30px] flex-center text-[#7E92A2] hover:text-[#4a565f]"
                    @click="close"
                >
                    <nuxt-icon name="close" />
                </button>
            </div>
        </template>
        <slot></slot>
    </el-drawer>
    <el-dialog v-else v-bind="$attrs" :show-close="false">
        <template #header="{ close, titleId, titleClass }">
            <div class="flex-center-x px-5">
                <div v-if="props.title" :id="titleId" :class="titleClass" class="py-4 flex-1">
                    {{ props.title }}
                </div>
                <button
                    v-if="props.showClose"
                    class="text-[36px] flex-center text-[#7E92A2] hover:text-[#4a565f]"
                    :class="props.title ? '' : 'absolute right-[30px] top-[30px]'"
                    @click="close"
                >
                    <nuxt-icon name="close" />
                </button>
            </div>
        </template>
        <slot></slot>
    </el-dialog>
</template>
<script setup>
    const props = defineProps({
        type: {
            type: String,
            default: 'dialog',
        },
        title: {
            type: String,
            default: '',
        },
        showClose: {
            type: Boolean,
            default: true,
        },
    });
</script>
