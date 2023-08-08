<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-25 13:17:57
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-08 12:07:06
 * @Description:
 * @FilePath: /nuxt3-demo/app.vue
-->
<template>
    <NuxtLayout>
        <n-config-provider :theme="theme" :locale="lan" :date-locale="lanDate" inline-theme-disabled>
            <n-message-provider>
                <n-dialog-provider>
                    <NuxtPage />
                    <Dialog />
                </n-dialog-provider>
            </n-message-provider>
            <!-- inline-theme-disabled -->
        </n-config-provider>
    </NuxtLayout>
</template>

<script lang="ts" setup>
    import { zhCN, enUS, dateZhCN, dateEnUS, darkTheme, lightTheme } from 'naive-ui';

    const { locale } = useI18n();
    const db: any = {
        zh_CN: zhCN,
        en: enUS,
    };
    const dateDb: any = {
        zh_CN: dateZhCN,
        en: dateEnUS,
    };
    const lan = computed(() => db[locale.value]);
    const lanDate = computed(() => dateDb[locale.value]);

    const theme = ref();
    watchEffect(() => {
        const mode = useCookie('nuxt-color-mode').value;
        if (mode !== 'system') {
            theme.value = mode === 'dark' ? darkTheme : lightTheme;
        }
    });
</script>
