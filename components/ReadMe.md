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
