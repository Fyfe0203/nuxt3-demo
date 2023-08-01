<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-07-20 16:21:30
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-01 09:54:34
 * @Description:
 * @FilePath: /nuxt3-demo/composables/README.md
-->

```js
// composables/states.ts
export const useCounter = () => useState < number > ('counter', () => 0);
export const useColor = () => useState < string > ('color', () => 'pink');
```

```html
<script setup lang="ts">
    const color = useColor(); // Same as useState('color')
</script>

<template>
    <p>Current color: {{ color }}</p>
</template>
```

```js
// Method 1: Using named export
// composables/useFoo.ts
export const useFoo = () => {
    return useState('foo', () => 'bar');
};
// Method 2: Using default export
// composables/use-foo.ts or composables/useFoo.ts
export default function () {
    return useState('foo', () => 'bar');
}
```

```js
// composables/test.ts
// You can use a composable within another composable using auto imports:
export const useFoo = () => {
    const nuxtApp = useNuxtApp();
    const bar = useBar();
};

// You can access plugin injections from composables:
export const useHello = () => {
    const nuxtApp = useNuxtApp();
    return nuxtApp.$hello;
};
```

# 什么样的文件能被导出

`Nuxt` 仅扫描 `composables/` 目录顶层的文件，例如：

```
composables
 | - index.ts // scanned
 | - useFoo.ts // scanned
 | - nested
 | --- utils.ts // not scanned

```

仅在 composables/index.ts 和 composables/useFoo.ts 中搜索导入。

要使自动导入适用于嵌套模块，您可以重新导出它们（推荐）或配置扫描仪以包含嵌套目录：

示例：从 composables/index.ts 文件中重新导出您需要的可组合项：

```js
// composables/index.ts
// Enables auto import for this export
export { utils } from './nested/utils.ts';
```

示例：扫描 composables/ 文件夹内的嵌套目录：

```js
// nuxt.config.ts
export default defineNuxtConfig({
    imports: {
        dirs: [
            // Scan top-level modules
            'composables',
            // ... or scan modules nested one level deep with a specific name and file extension
            'composables/*/index.{ts,js,mjs,mts}',
            // ... or scan all modules within given directory
            'composables/**',
        ],
    },
});
```

fetch请求方式

```js
// 另外一种方式
useApi().login.getUserInfo();
// 直接请求
const { data } = await useHttp.postForm('/banner/list', { type: 1 });
```

https://vueuse.org/core/useElementSize/

很多方便的函数方法如：`const { width, height } = useElementSize(el)`

```vue
<template>
    <div ref="el">
        {{ text }}
    </div>
</template>

<script>
    import { ref } from 'vue';
    import { useResizeObserver } from '@vueuse/core';

    export default {
        setup() {
            const el = ref(null);
            const text = ref('');

            useResizeObserver(el, (entries) => {
                const entry = entries[0];
                const { width, height } = entry.contentRect;
                text.value = `width: ${width}, height: ${height}`;
            });

            return {
                el,
                text,
            };
        },
    };
</script>
```

```js
import { useEventListener } from '@vueuse/core';

useEventListener(document, 'visibilitychange', (evt) => {
    console.log(evt);
});
```
