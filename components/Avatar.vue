<!--
 * @Author: freeser freeser@126.com
 * @Date: 2023-08-11 16:33:38
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-17 15:12:54
 * @Description: 
 * @FilePath: /nuxt3-demo/components/Avatar.vue
-->
<template>
    <cus-upload
        v-model:preview="previewUrl"
        v-model:loading="loading"
        v-model:url="fetchUrl"
        v-loading="loading"
        accept="image/*"
        class="avatar-uploader"
    >
        <img v-if="url" :src="url" class="h-20 w-20 rounded-full object-cover" />
        <div v-else class="text-gray flex-center h-20 w-20 text-2xl"><nuxt-icon name="plus" /></div>
    </cus-upload>
</template>

<script lang="ts" setup>
    interface Props {
        modelValue?: string;
    }
    const props = withDefaults(defineProps<Props>(), {
        modelValue: '',
    });

    const emit = defineEmits(['update:modelValue']);

    const previewUrl = ref();
    const fetchUrl = ref();
    const url = computed(() => previewUrl.value || props.modelValue);
    const loading = ref(false);

    watch(fetchUrl, () => {
        emit('update:modelValue', fetchUrl.value);
    });
</script>

<style lang="postcss">
    .avatar-uploader {
        width: 80px;
        .el-upload {
            position: relative;
            width: 80px;
            height: 80px;
            border: 1px dashed var(--el-border-color);
            border-radius: 100%;
            overflow: hidden;
            transition: var(--el-transition-duration-fast);
            cursor: pointer;

            &:hover {
                border-color: var(--el-color-primary);
            }
        }
    }
</style>
