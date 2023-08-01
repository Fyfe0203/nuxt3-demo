<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-31 17:19:19
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-01 10:06:54
 * @Description:
 * @FilePath: /nuxt3-demo/pages/dialog.vue
-->
<template>
    <div>
        <ElButton size="" icon="" text @click="dialogVisible = true">click to open the Dialog</ElButton>

        <client-only>
            <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
                <span>This is a message</span>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="dialogVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
                    </span>
                </template>
            </el-dialog>
        </client-only>
    </div>
</template>

<script lang="ts" setup>
    const dialogVisible = ref(false);

    const handleClose = (done: () => void) => {
        ElMessageBox.confirm('Are you sure to close this dialog?')
            .then(() => {
                done();
            })
            .catch(() => {
                // catch error
            });
    };
</script>
<style scoped>
    .dialog-footer button:first-child {
        margin-right: 10px;
    }
</style>
