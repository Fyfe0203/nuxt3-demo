<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-27 16:11:01
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-07 10:38:35
 * @Description:
 * @FilePath: /nuxt3-demo/pages/i18n.vue
-->
<template>
    <form class="pt-10">
        <div>翻译</div>
        <a-table mb-1 :data="[]" />
        <a-pagination :total="100" />
        <p>{{ $t('welcome') }}</p>
    </form>
</template>
