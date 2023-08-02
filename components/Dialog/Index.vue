<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-08-01 17:51:58
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-02 13:58:05
 * @Description: 
 * @FilePath: /nuxt3-demo/components/Dialog/index.vue
-->
<template>
    <client-only>
        <Teleport to="body">
            <el-dialog
                v-for="(i, idx) in useDialog.list"
                :key="i.key"
                v-model="i.visible"
                :title="i.title"
                :width="i.width"
                :class="i.class"
                :before-close="i.beforeClose"
                @close="() => useDialog.close(i, idx)"
            >
                <component :is="i.component" v-bind="i.props" @close="(...args) => useDialog.close(i, idx, args)" />
            </el-dialog>
        </Teleport>
    </client-only>
</template>

<script setup></script>
