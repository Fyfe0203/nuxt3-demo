<template>
    <a-config-provider :locale="locale">
        <div class="default-layout">
            <NuxtPage />
        </div>
    </a-config-provider>
</template>
<script setup>
    import { languages, i18n } from '~~/plugins/i18n';
    const language = useLanguage();
    const locale = computed(() => languages[language.value]);
    watch(language, () => {
        i18n.setLocale(language.value);
    });
</script>
