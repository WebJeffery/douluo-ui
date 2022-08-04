module.exports = {
  // 根目录标识，ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    // myGlobal: false
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    // 继承 eslint-plugin-vue 插件的规则
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['import'],
  rules: {
    // 'vue/no-multiple-template-root': 'off', // plugin:vue/essential有开启  TODO(VUE3可以使用)
    'prettier/prettier': [
      // 两者混合使用时候，需要修改规则，以防止重复或冲突；eslint-config-prettier 即为解决此问题的存在，可以使用它关闭所有可能引起冲突的规则。
      'warn',
      {
        endOfLine: 'auto',
      }
    ],
    "quotes": 'off',
    // 缩进代码
    'vue/html-indent': 'error',
    // 强制每行的最大属性数，默认是 1
    'vue/max-attributes-per-line': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    // 在多行元素的内容之前和之后需要换行符
    'vue/multiline-html-element-content-newline': 'off',
    // 在单行元素的内容前后需要换行符
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    // 组件/实例的选项的顺序
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'meta',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'emits',
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    // eslint:recommended: 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 'error',
    // eslint:recommended: 禁止出现重复的 case 标签
    'no-duplicate-case': 'warn',
    // eslint:recommended: 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 'warn',
    // Best Practices: 禁止出现未使用过的表达式
    'no-unused-expressions': 'off',
    'no-unused-vars': [
      // eslint:recommended: 禁止出现未使用过的变量
      'error'
    ],
    'default-case': 'warn', // Best Practices: 要求 switch 语句中有 default 分支
    // Best Practices: 要求使用 === 和 !==
    eqeqeq: 'warn',
    // Best Practices: 禁用不必要的标签
    'no-extra-label': 'warn',
    'vue/no--unusedvars': 'off', // plugin:vue/essential有开启
    'vue/no-use-v-if-with-v-for': 'off', // plugin:vue/essential有开启
    'import/extensions': [
      // import忽略后缀名
      'error',
      'always',
      {
        // ts: 'never',
        // tsx: 'never',
        js: 'never'
        // vue: 'never' // vue文件加后缀名才能跳转至定义处
      }
    ],
    // 	Stylistic Issues: 强制一行的最大长度
    'max-len': 'off',
    // ECMAScript 6: 优先使用数组和对象解构
    'prefer-destructuring': ['warn', { object: true, array: false }],
    // Node.js and CommonJS: 要求 require() 出现在顶层模块作用域中
    'global-require': 'off',
    // Best Practices: 禁止对 function 的参数进行重新赋值
    'no-param-reassign': 'off',
    // 允许通过console调试，记得打包时将console相关的调试代码删掉
    'no-console': 'off',
    // Best Practices: 禁用 alert、confirm 和 prompt
    'no-alert': 'warn',
    // Best Practices: 禁用 arguments.caller 或 arguments.callee
    'no-caller': 'warn',
    // Best Practices: 禁止在没有类型检查操作符的情况下与 null 进行比较
    'no-eq-null': 'warn',
    // Best Practices: 禁用 eval()
    'no-eval': 'warn',
    // Best Practices: 禁止扩展原生类型
    'no-extend-native': 'warn',
    // ECMAScript 6: 要求使用 let 或 const 而不是 var
    'no-var': 'warn',
    // ECMAScript 6: 要求使用模板字面量而非字符串连接
    'prefer-template': 'warn',
    // 要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': 'off'
  }
}
