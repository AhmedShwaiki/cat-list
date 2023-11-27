// .eslintrc.js
module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    rules: {
        // Add your rules here
    },
    ignorePatterns: ['tests/'], // Add the path you want to exclude
}
