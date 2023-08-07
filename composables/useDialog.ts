/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-08-01 17:48:12
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-02 14:01:50
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
    visible?: any;
    callback?: Function;
    beforeClose?: Function;
    footer?: any;
    centered?: Boolean;
    closable?: Boolean;
    unique?: Boolean;
};

const list: DialogOptions[] = reactive([]);

const useDialog = {
    list,
    add: addDialog,
    close: closeDialog,
};

function addDialog(options: DialogOptions) {
    const { unique, ...config } = options;
    if (unique) {
        useDialog.list = reactive(useDialog.list.filter((i: DialogOptions) => i.component !== options.component));
    }
    useDialog.list.push(Object.assign(config, { visible: true, key: [config.component, +new Date()].join(',') }));
}

function closeDialog(item?: DialogOptions, i: number = 0, args?: any) {
    if (!item) {
        useDialog.list = reactive([]);
        return;
    }
    i >= 0 && useDialog.list.splice(i, 1);
    if (args && args.length && item.callback) item.callback(...args);
}

export { useDialog };
