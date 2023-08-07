<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-25 13:17:57
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-07 15:01:05
 * @Description:
 * @FilePath: /nuxt3-demo/app.vue
-->
<template>
    <NuxtLayout>
        <a-style-provider hash-priority="high">
            <!-- a-style-provider hash-priority="high" 
            通过修改算法可以快速生成风格迥异的主题，4.0 版本中默认提供三套预设算法，分别是
            默认算法 theme.defaultAlgorithm
            暗色算法 theme.darkAlgorithm 
            和紧凑算法 theme.compactAlgorithm 。
            你可以通过修改 ConfigProvider 中 theme 属性的 algorithm 属性来切换算法。 -->
            <a-config-provider
                :locale="theme"
                :theme="{
                    algorithm: theme.darkAlgorithm,
                }"
            >
                <NuxtPage />
                <Dialog />
            </a-config-provider>
        </a-style-provider>
    </NuxtLayout>
</template>

<script setup>
    import zhCN from 'ant-design-vue/es/locale/zh_CN';
    import en from 'ant-design-vue/es/locale/en_US';

    const { locale } = useI18n();
    const db = {
        zh_CN: zhCN,
        en,
    };
    const theme = computed(() => db[locale.value]);
</script>
``
