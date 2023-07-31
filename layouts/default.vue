<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-25 13:09:57
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-31 15:34:13
 * @Description: 
 * @FilePath: /nuxt3-demo/layouts/default.vue
-->
<template>
    <div class="h-screen flex flex-col">
        <div class="p-5 flex gap-5">
            <nuxt-link to="/">首页</nuxt-link>
            <nuxt-link to="/i18n">翻译</nuxt-link>
            <nuxt-link to="/theme">主题</nuxt-link>
            <nuxt-link to="/account">个人中心</nuxt-link>
            <HeaderAccount />
        </div>
        <div class="flex-1 overflow-y-auto">
            <slot />
        </div>
        <div class="p-5 flex gap-5">
            <Theme />
            <Language />
        </div>
    </div>
</template>
