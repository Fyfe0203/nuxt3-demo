<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-25 13:01:02
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-01 14:44:03
 * @Description:
 * @FilePath: /nuxt3-demo/plugins/README.md
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
