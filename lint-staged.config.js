/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-08-02 18:47:38
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-08 10:59:55
 * @Description:
 * @FilePath: /nuxt3-demo/lint-staged.config.js
 */
module.exports = {
    '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
    '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
    'package.json': ['prettier --write'],
    '*.vue': ['eslint --fix', 'prettier --write', 'stylelint --fix'],
    '*.{css,postcss,pcss,scss,less,style,html}': ['stylelint --fix', 'stylelint --risd'],
    '*.md': ['prettier --write'],
};
