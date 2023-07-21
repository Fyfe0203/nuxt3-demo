/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-25 13:03:15
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-21 16:12:55
 * @Description:
 * @FilePath: /nuxt3-demo/tailwind.config.ts
 */
import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#0AA679',
            },
            screens: {
                xs: '420px',
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                '2xl': '1600px',
            },
        },
    },
    plugins: [],
    content: [],
};
