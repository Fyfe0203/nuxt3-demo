<!--
 * @Author: freeser freeser@126.com
 * @Date: 2023-08-11 16:33:38
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-17 15:16:19
 * @Description: 
 * @FilePath: /nuxt3-demo/components/Cus/Upload.vue
-->
<template>
    <el-upload
        v-bind="$attrs"
        :show-file-list="false"
        :on-success="handleSuccess"
        :on-error="handleError"
        :before-upload="beforeAvatarUpload"
        :before-remove="null"
        :headers="headers"
        :accept="accept"
    >
        <slot></slot>
    </el-upload>
</template>

<script lang="ts" setup>
    import { findMineType } from '~/utils';
    import { useAppStore } from '~/stores/app';
    interface Props {
        limit?: number;
        accept?: string;
    }
    const props = defineProps<Props>();
    const limit = computed(() => props.limit ?? 2);
    const accept = computed(() => props.accept ?? '*');

    const emit = defineEmits(['update:url', 'update:preview', 'update:loading']);
    const store = useAppStore();
    const headers = computed(() => ({
        Authorization: store.authorization,
    }));

    const handleSuccess: any = (response: any) => {
        console.log('handleSuccess', response);
        setTimeout(() => {
            emit('update:url', '/static/img/chatgpt.png');
            emit('update:loading', false);
        }, 500);
    };

    const handleError: any = () => {
        emit('update:preview', '');
        emit('update:loading', false);
    };

    const beforeAvatarUpload: any = (file: File) => {
        const isInAccept = findMineType(file.type || file.name.split('.').slice(-1)[0], accept.value);

        if (!isInAccept) {
            ElMessage.error('只能上传 ' + accept.value + ' 类型的文件');
            return false;
        } else if (file.size / 1024 / 1024 > limit.value) {
            ElMessage.error('上传文件大小不能超过 ' + limit.value + 'MB!');
            return false;
        }
        const preview = URL.createObjectURL(file);
        emit('update:preview', preview);
        emit('update:loading', true);

        const form = new FormData();
        form.append('file', file);

        useHttp.post('/file/upload', form).then(handleSuccess).catch(handleError);
        return false;
    };
</script>

<style lang="postcss">
    .el-upload {
        width: 100%;
    }
</style>
