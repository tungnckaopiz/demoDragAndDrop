module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', '@nuxtjs'],
  rules: {
    'no-console': 'off',
    'space-before-function-paren': [2, 'never'],
    'handle-callback-err': [2, '^(err|error)$']
  },
  globals: {
    $: false,
    _: false
  }
}
