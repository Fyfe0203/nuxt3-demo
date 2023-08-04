<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-31 17:19:19
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-04 11:31:56
 * @Description:
 * @FilePath: /nuxt3-demo/pages/dialog.vue
-->
<template>
    <div class="px-5">
        <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="small justify-center" text="2xl">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <el-tooltip content="Bottom center" trigger="click">
            <el-button>Customized theme</el-button>
        </el-tooltip>
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

    .el-carousel__item h3 {
        margin: 0;
        line-height: 150px;
        text-align: center;
        color: #475669;
        opacity: 0.75;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }
</style>
