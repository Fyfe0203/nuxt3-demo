<!--
 * @Author: freeser freeser@126.com
 * @Date: 2023-08-09 16:44:09
 * @LastEditors: freeser freeser@126.com
 * @LastEditTime: 2023-08-10 11:22:00
 * @Description: 
 * @FilePath: /nuxt3-ai-aide/components/Dialog/Test2.vue
-->
<template>
    <div class="bg-red-200 h-[200px]">
        抽屉 {{ new Date() }}
        <br />
        <el-button type="primary" @click="draw">打开子抽屉</el-button>
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
            title: '测试抽屉',
            type: 'drawer',
            width: Math.max(parseInt(Math.random() * 800), 500),
            beforeClose: handleClose,
            component: 'DialogTest2',
        });
    }
</script>
