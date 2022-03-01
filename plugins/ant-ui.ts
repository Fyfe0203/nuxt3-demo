import Antd from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css';
import 'ant-design-vue/es/notification/style/css';
import 'ant-design-vue/es/modal/style/css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Antd);
});
