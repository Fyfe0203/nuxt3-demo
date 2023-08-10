<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-27 16:13:35
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-09 10:31:02
 * @Description:
 * @FilePath: /nuxt3-demo/pages/theme.vue
-->
<template>
    <div class="ping-component p-5">
        <div class="ant-slider mt-5 w-[180px]"></div>

        <div class="pt-5">
            {{ store.chainList }}
        </div>
    </div>
</template>
<script setup lang="ts">
    import { useAppStore } from '@/stores/app';
    const store = useAppStore();
</script>
