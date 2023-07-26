/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-26 14:47:11
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-26 14:47:17
 * @Description:
 * @FilePath: /nuxt3-demo/stores/counter.js
 */
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0);
    function increment() {
        count.value++;
    }

    return { count, increment };
});

// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions
