// .eslintrc.js
module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    rules: {
        // Add your rules here
    },
    root: true,
    ignorePatterns: ['tests/'], // Add the path you want to exclude
}
