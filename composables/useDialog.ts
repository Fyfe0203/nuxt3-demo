/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-08-01 17:48:12
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-10 09:52:41
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
    type?: 'drawer' | 'dialog';
    class?: string;
    visible?: any;
    callback?: Function;
    beforeClose?: Function;
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
        const isExit = useDialog.list.find((i: DialogOptions) => i.component === options.component);
        if (isExit) {
            return console.log('已打开相同id的组件');
        }
    }
    useDialog.list.push(Object.assign(config, { visible: true, key: [config.component, +new Date()].join(',') }));
}

function closeDialog(item?: DialogOptions, i: number = 0, args?: any) {
    if (!item) {
        useDialog.list.splice(0, useDialog.list.length);
        return;
    }
    i >= 0 && useDialog.list.splice(i, 1);
    if (args && args.length && item.callback) item.callback(...args);
}

export { useDialog };
