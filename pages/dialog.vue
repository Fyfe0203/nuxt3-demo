<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-31 17:19:19
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-02 13:58:43
 * @Description:
 * @FilePath: /nuxt3-demo/pages/dialog.vue
-->
<template>
    <div class="px-5">
        <ElButton type="primary" @click="openDialog">click to open the Dialog</ElButton>
    </div>
</template>

<script lang="ts" setup>
    const handleClose = (done: () => void) => {
        ElMessageBox.confirm('Are you sure to close this dialog?')
            .then(() => {
                done();
                console.log('handle close');
            })
            .catch(() => {
                // catch error
            });
    };

    const openDialog = function () {
        console.log('open dialog');
        useDialog.add({
            title: '测试弹窗',
            component: 'DialogTest',
            props: {
                id: 123456,
            },
            beforeClose: handleClose,
            callback: () => {
                console.log('close callback');
            },
        });
    };
</script>
<style scoped>
    .dialog-footer button:first-child {
        margin-right: 10px;
    }
</style>
