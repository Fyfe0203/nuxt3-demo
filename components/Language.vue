<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-27 14:17:10
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-01 14:20:40
 * @Description:
 * @FilePath: /nuxt3-demo/components/Language.vue
-->
<template>
    <select
        v-model="local"
        class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
        @change="setLocale(local)"
    >
        <option v-for="i in locales" :key="i.code" :value="i.code">
            {{ i.name }}
        </option>
    </select>
</template>
<script setup>
    const { locale, locales, setLocale } = useI18n();
    const local = ref(locale.value);
</script>
