<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-20 16:57:43
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-08 14:25:19
 * @Description:
 * @FilePath: /nuxt3-demo/README.md
-->

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# 提交规则

如果全局安装了`czg`, 可以利用 `czg` 或 `git czg` 命令启动命令行工具，生成标准化 `commit message`

`npm install -g czg`

如果没有全局安装，则使用 `yarn cz`进行git提交

# Prittier配置

```js
module.exports = {
    // 超过80就换行
    printWidth: 80,
    // tab缩进大小，默认为2
    tabWidth: 4,
    // 使用tab缩进，默认false
    useTabs: false,
    // 使用分号，默认true
    semi: true,
    // 使用单引号, 默认false，(在jsx中配置无效, 默认都是双引号)
    singleQuote: true,
    // 行尾逗号，默认none，可选（none|es5|all），es5 包括es5中的数组、对象，all 包括函数对象等所有可选
    trailingComma: 'es5',
    // 对象中的空格 默认true，true: { foo: bar }，false: {foo: bar}
    bracketSpacing: true,
    // JSX标签闭合位置 默认false
    jsxBracketSameLine: false,
    // 箭头函数参数括号 默认avoid 可选（avoid|always），avoid 能省略括号的时候就省略 例如x => x ，always 总是有括号
    arrowParens: 'avoid',
    // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
    ignorePath: '.prettierignore',
};
```

# naive ui

https://www.naiveui.com/zh-CN/light/components/avatar
