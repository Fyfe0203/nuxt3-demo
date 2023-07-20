<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-25 13:01:02
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-05-25 13:01:05
 * @Description: 
 * @FilePath: /nuxt3-project/plugins/README.md
-->
# plugins 目录

Nuxt3 会自动读取 plugins 目录下的文件并加载它们。我们可以在文件名上使用.server 或者.client 前缀使他们仅作用域服务端或者客户端。

`plugins/vue-gtag.client.js`

```js
import VueGtag from 'vue-gtag-next';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGtag, {
        property: {
            id: 'GA_MEASUREMENT_ID',
        },
    });
});

import { defineNuxtPlugin } from "#app";
import { Button } from "vue-devui";
import 'vue-devui/button/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Button);
});

```

# 哪些文件会被自动注册

只有在 plugins/的根目录或者任意子目录下的 index.ts 会被自动注册
