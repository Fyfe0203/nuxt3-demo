/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-08-01 17:48:12
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-08 10:09:38
 * @Description:
 * @FilePath: /nuxt3-demo/composables/useDialog.ts
 */
// index.ts
type DialogOptions = {
    key?: string;
    title?: string;
    component: any;
    props?: Object;
    width?: string;
    class?: string;
    visible?: Boolean;
    open?: Boolean;
    callback?: Function;
    beforeClose?: Function;
    footer?: any;
    centered?: Boolean;
    closable?: Boolean;
    unique?: Boolean;
};

const list: DialogOptions[] = reactive([]);

const usePop = {
    list,
    add: addDialog,
    close: closeDialog,
};

function addDialog(options: DialogOptions) {
    const { unique, ...config } = options;
    if (unique) {
        usePop.list = reactive(usePop.list.filter((i: DialogOptions) => i.component !== options.component));
    }
    const item = Object.assign(config, { visible: false, open: true, key: [config.component, +new Date()].join(',') });
    usePop.list.push(item);
}

function closeDialog(item?: DialogOptions, i: number = 0, args?: any) {
    if (!item) {
        usePop.list = reactive([]);
        return;
    }
    i >= 0 && usePop.list.splice(i, 1);
    if (args && args.length && item.callback) item.callback(...args);
}

export { usePop };
