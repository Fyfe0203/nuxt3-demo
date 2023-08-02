/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-20 16:57:43
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-02 10:17:40
 * @Description:
 * @FilePath: /nuxt3-demo/.eslintrc.js
 */
module.exports = {
    root: true,
    // env: {
    //     browser: true,
    //     es2021: true,
    // },
    // parserOptions: {
    //     ecmaVersion: 13,
    //     parser: '@typescript-eslint/parser',
    //     sourceType: 'module',
    // },
    // If you're using TypeScript, follow Usage section by replacing @nuxtjs/eslint-config by @nuxtjs/eslint-config-typescript.
    extends: ['@nuxtjs/eslint-config-typescript'], // 'prettier' // 'plugin:vue/vue3-recommended'

    // plugins: ['prettier'],
    // add your custom rules here
    // "off" or 0 - turn the rule off
    // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
    // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
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
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1, // 设置为1，表示整体移动一个缩进（表示上面设置的4个空格）
            },
        ],
        indent: [
            'error',
            4,
            {
                VariableDeclarator: 'first',
                SwitchCase: 1,
                outerIIFEBody: 0,
                StaticBlock: { body: 1 },
                ArrayExpression: 1,
                ObjectExpression: 1,
            },
        ],
        semi: ['error', 'always'],
        // 单引号
        quotes: 2,
        // 不使用 var 声明变量
        'no-var': 2,
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'never',
                exports: 'never',
                functions: 'never',
            },
        ],
        curly: 0,
        'space-before-function-paren': 0,
        'no-trailing-spaces': 0,
        '@typescript-eslint/no-inferrable-types': 0,
        'arrow-parens': ['error', 'always'],
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
};
