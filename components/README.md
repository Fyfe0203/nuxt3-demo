<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-25 12:59:21
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-28 14:53:41
 * @Description:
 * @FilePath: /nuxt3-demo/components/README.md
-->

# 组件懒加载

如果在组件名前面加上 Lazy 前缀，则可以按需懒加载该组件，可用于优化打包尺寸。

```vue
<template>
    <div>
        <h1>Mountains</h1>
        <LazyMountainsList v-if="show" />
        <button v-if="!show" @click="show = true">显示列表</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const show = ref(false);
</script>
```

# svg组件的使用

```html
<nuxt-icon name="m1" filled />
<nuxt-icon name="arr-circle-right" />
```
