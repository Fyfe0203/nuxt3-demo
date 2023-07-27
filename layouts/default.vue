<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-25 13:09:57
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-27 16:12:33
 * @Description: 
 * @FilePath: /nuxt3-demo/layouts/default.vue
-->
<template>
    <div>
        <div>header</div>
        <slot />
        <div class="p-5 flex gap-5">
            <Theme />
            <Language />
        </div>
    </div>
</template>
