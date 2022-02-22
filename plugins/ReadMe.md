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
