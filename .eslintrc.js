module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    // 'airbnb-base',
  ],
  // parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  plugins: [
    'vue',
  ],
  rules: {
  },
};
