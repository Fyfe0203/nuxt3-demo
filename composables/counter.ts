/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-26 15:02:06
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-17 10:02:03
 * @Description:
 * @FilePath: /nuxt3-demo/composables/counter.ts
 */
import { useState } from '#imports';

export const useCounter = () => useState('counter', () => 2);
