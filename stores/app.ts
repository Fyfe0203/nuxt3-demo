/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-26 14:44:47
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-26 15:14:01
 * @Description:
 * @FilePath: /nuxt3-demo/stores/app.ts
 */
const delay = (t: number) => new Promise((r) => setTimeout(r, t));

export const useAppStore = defineStore('app', {
    state: () => ({ count: 0 }),
    getters: {
        double: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++;
        },
        async decrementToZero(interval: number = 300) {
            if (this.count <= 0) return;

            while (this.count > 0) {
                this.$patch((state) => {
                    state.count--;
                });
                await delay(interval);
            }
        },
    },
});
