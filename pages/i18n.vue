<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-27 16:11:01
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-01 14:58:18
 * @Description:
 * @FilePath: /nuxt3-demo/pages/i18n.vue
-->
<template>
    <form class="pt-10">
        <div>翻译</div>
        <el-table mb-1 :data="[]" />
        <el-pagination :total="100" />
        <p>{{ $t('welcome') }}</p>
    </form>
</template>
