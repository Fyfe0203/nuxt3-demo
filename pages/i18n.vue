<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-27 16:11:01
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-07 16:16:58
 * @Description:
 * @FilePath: /nuxt3-demo/pages/i18n.vue
-->
<template>
    <form class="pt-10">
        <div>翻译</div>
        <n-data-table
            :columns="[
                {
                    title: 'Name',
                    key: 'name',
                },
                {
                    title: 'Age',
                    key: 'age',
                },
                {
                    title: 'Address',
                    key: 'address',
                },
                {
                    title: 'Tags',
                    key: 'tags',
                },
                {
                    title: 'Action',
                    key: 'actions',
                },
            ]"
            :data="[]"
        />
        <n-pagination
            :display-order="['quick-jumper', 'pages', 'size-picker']"
            :page-count="100"
            show-quick-jumper
            show-size-picker
        />
        <p>{{ $t('welcome') }}</p>
        <n-date-picker />
        <div class="h-5"></div>
        <n-space>
            <n-button>Default</n-button>
            <n-button type="tertiary">Tertiary</n-button>
            <n-button type="primary">Primary</n-button>
            <n-button type="info">Info</n-button>
            <n-button type="success">Success</n-button>
            <n-button type="warning">Warning</n-button>
            <n-button type="error">Error</n-button>
        </n-space>
    </form>
</template>
