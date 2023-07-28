<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-07-20 15:30:29
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-28 14:55:32
 * @Description:
 * @FilePath: /nuxt3-demo/assets/README.md
-->

```html
<template>
    <img src="~/assets/img/nuxt.png" alt="Discover Nuxt 3" />
</template>
```

postcss使用

```html
<div class="test">
    PostCSS
    <span class="test_gray">Color Gray</span>
    is
    <span class="test_working">working</span>
    !
</div>
```

可以引用 tailwindcss的内容

```css
.test {
    color: rgb(40, 176, 218);
    @apply p-4;

    &_gray {
        color: gray(50);
    }
}
```
