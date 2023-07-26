/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-20 16:57:43
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-26 16:17:53
 * @Description:
 * @FilePath: /nuxt3-demo/.eslintrc.js
 */
module.exports = {
    root: true,
    // parser: '@babel/eslint-parser',
    // parserOptions: {
    //     sourceType: 'module',
    // },
    // If you're using TypeScript, follow Usage section by replacing @nuxtjs/eslint-config by @nuxtjs/eslint-config-typescript.
    extends: ['@nuxt/eslint-config'],
    plugins: [],
    // add your custom rules here
    rules: {
        'no-console': 'off',
        'no-new': 'off',
        'new-cap': 'off',
        'unicorn/escape-case': 'off',
        'vue/no-v-html': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-self-closing': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/max-attributes-per-line': 'off',
        'no-control-regex': 0,
        'vue/html-indent': ['error', 4, {}],
    },
};
