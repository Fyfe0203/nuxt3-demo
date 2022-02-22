module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'prettier'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        "vue/component-definition-name-casing": ["error", "PascalCase"],
        "unicorn/escape-case": "off"
    }
}
