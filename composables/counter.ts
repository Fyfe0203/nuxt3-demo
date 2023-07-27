/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-26 15:02:06
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-26 16:23:21
 * @Description:
 * @FilePath: /nuxt3-demo/composables/counter.js
 */
import { useState } from '#imports';

export const useCounter = () => useState('counter', () => Math.round(Math.random() * 1000));
