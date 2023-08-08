<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-25 13:17:57
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-08 15:46:28
 * @Description:
 * @FilePath: /nuxt3-demo/app.vue
-->
<template>
    <NuxtLayout>
        <el-config-provider :locale="theme" size="small">
            <NuxtPage />
            <Dialog />
        </el-config-provider>
    </NuxtLayout>
</template>

<script setup>
    import zhCN from 'element-plus/dist/locale/zh-cn.mjs';
    import en from 'element-plus/dist/locale/en.mjs';

    const { locale } = useI18n();
    const db = {
        zh_CN: zhCN,
        en,
    };
    const theme = computed(() => db[locale.value]);
</script>
