<!--
 * @Author: freeser freeser@126.com
 * @Date: 2023-08-09 16:44:09
 * @LastEditors: freeser freeser@126.com
 * @LastEditTime: 2023-08-10 11:21:53
 * @Description: 
 * @FilePath: /nuxt3-ai-aide/components/Dialog/Test.vue
-->
<template>
    <div class="bg-blue-200 h-[200px] p-6">
        弹窗 {{ new Date() }}
        <br />
        <el-button type="primary" @click="draw">打开子弹窗</el-button>
    </div>
</template>

<script setup>
    const handleClose = (done) => {
        ElMessageBox.confirm('You still have unsaved data, proceed?')
            .then(() => {
                done();
            })
            .catch(() => {
                // catch error
            });
    };
    function draw() {
        useDialog.add({
            title: '测试弹窗',
            width: Math.max(parseInt(Math.random() * 800), 500),
            beforeClose: handleClose,
            component: 'DialogTest',
        });
    }
</script>
