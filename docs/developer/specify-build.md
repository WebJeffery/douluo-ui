# 开发规范搭建

## Git 版本规范

组件库是一个多人协作的项目，Git 的提交说明精准，在后期协作以及 Bug 处理时会变得有据可查，项目的开发可以根据规范的提交说明快速生成开发日志，从而方便开发者或用户追踪项目的开发信息和功能特性，这也是一个优秀开源项目必备的规范，提交规范使用的是 [约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/#)

### husky

`husky` 拦截 git hooks 钩子，校验提交的文件和填写信息，项目的 husky 版本是 `^7.0.4`

husky 安装到开发依赖中

```shell
yarn add husky -D
```

安装完后，我们需要在当前项目中创建一个.husky 目录并指定该目录为 git hooks 所在的目录。

使用以下命令快速创建 👇

```shell
#--no-install 参数表示强制npx使用项目中node_modules目录下的husky依赖包
npx --no-install husky install
```

使用以下命令快速创建 `pre-commit` 👇

```shell
npx --no-instal husky add .husky/pre-commit "npm run lint"
```

`pre-commit` 在 commit 之前会执行 `npm run lint` 校验代码，校验不通过不允许 commit 提交

### commitizen

[commitizen](https://github.com/commitizen/cz-cli) 是一个撰写符合 Commit Message 标准的一款工具。通过它可以实现交互式撰写规范的 Commit Message。

项目安装 commitizen

```shell
yarn add commitizen -D
```

安装完成后，一般我们都采用符合 Angular 的 Commit message 格式的提交规范，运行以下命令生成符合 Angular 提交规范格式的 Commit message

```shell
npx --no-install commitizen init cz-conventional-changelog --save-dev --save-exact
```

运行了上述命令后，它将为你项目安装 cz-conventional-changelog 适配器模块，把 config.commitizen 的密钥添加到文件的根目录添加到 package.json 中

可以在 package.json 中看到，自动的新增了以下内容 👇

```json
{
  ...
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
  ...
}
```

在 `package.json` scrips 添加 `"commit": "git-cz"` 命令，运行 `yarn commit` 可以通过以下交互式的撰写 commit messag 然后提交

![](https://image-static.segmentfault.com/147/449/1474499695-5aedd2c566fe1)

### 限制 commitlint

由于 commitizen 并不是强制使用的，仍然可以通过 git commit 来提交，所以不管是 cz 还是 git commit 提交前，都要对 commit messag 进行一次校验，不符合规范的情况下是不允许进行 commit

首先我们需要安装 `commitlint`, `commitlint/config-conventional`

```js
yarn add @commitlint/cli @commitlint/config-conventional -D
```

使用以下命令快速创建 git hooks 的 commit-msg 钩子 👇
这样每次 commit 的时候都会由 commitlint 对 commit message 进行一次检验

```shell
npx --no-instal husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

然后在项目根目录创建一个 commitlint 配置文件 `commitlint.config.js`，可以对这个文件进行配置

```js
module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional', 'cz'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'style',
        'docs',
        'test',
        'refactor',
        'build',
        'ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
        'release'
      ]
    ]
  }
}
```

上面的提示都是英文的，如果想自定义翻译成中文，需要安装 cz-customizable 来实现自定义 commit message 规则，以及安装对应的 commitlint-config-cz 来配套校验

在项目根目录，创建一个 `.cz-config.js` 文件，并复制 [cz-config-EXAMPLE.js](https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js) 中的内容到其中。然后改成你自己想要的规则即可。

```js
module.exports = {
  types: [
    { value: 'feat', name: 'feat: 一个新的特性' },
    { value: 'fix', name: 'fix: 修复一个Bug' },
    { value: 'docs', name: 'docs: 变更的只有文档' },
    { value: 'style', name: 'style: 代码风格,格式修复' },
    { value: 'refactor', name: 'refactor: 代码重构，注意和feat、fix区分开' },
    { value: 'perf', name: 'perf: 码优化,改善性能' },
    { value: 'test', name: 'test: 测试' },
    { alue: 'chore', name: 'chore: 变更构建流程或辅助工具' },
    { value: 'revert', name: 'revert: 代码回退' },
    { value: 'init', name: 'init: 项目初始化' },
    { value: 'build', name: 'build: 变更项目构建或外部依赖' },
    { value: 'WIP', name: 'WIP: 进行中的工作' }
  ],
  scopes: [],
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',
  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '简短说明(最多40个字):',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#12, #34(可选):\n',
    confirmCommit: '确定提交?'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['scope', 'body', 'breaking'],
  // limit subject length
  subjectLimit: 100
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
}
```

创建完 `.cz-config.js` 文件后，我们需要回到 `package.json` 文件中，将 `config.commitizen.path` 更改为 `node_modules/cz-customizable`，如果你的 `.cz-config.js` 文件在项目根目录下，那么可以不配置下面这条，`commitlint-config-cz` 会自动在项目根目录下寻找: `.cz-config.js` 或 `.config/cz-config.js`

```js
...
{
  "config": {
    "commitizen": {
      "path": "node_modules/cz-customizable"
    },
    // 如果你的.cz-config.js文件在项目根目录下，那么可以不配置下面这条，commitlint-config-cz会自动在项目根目录下寻找: .cz-config.js 或 .config/cz-config.js
    "cz-customizable": {
      "config": "你的文件路径/xxxconfig.js"
    }
  }
}
...
```

关于 commitlint-config-cz 更高级的用法可以查看 👉 [commitlint-config-cz](https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js)

自定义的 commit message 的校验 ok 了 ✅

![](https://image-static.segmentfault.com/370/349/370349285-34d0afb93a1cde6e)

### comitmit 规范介绍

- 内容规范

```html
<type
  >(<scope
    >):
    <subject>
      <BLANK LINE>
        <body>
          <BLANK LINE> <footer></footer></BLANK></body></BLANK></subject></scope
></type>
```

大致分为三个部分(使用空行分割):

1. 标题行: 必填, 描述主要修改类型和内容
2. 主题内容: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等
3. 页脚注释: 可以写注释，BUG 号链接

- type: commit 的类型
  - feat: 新功能、新特性
  - fix: 修改 bug
  - perf: 更改代码，以提高性能
  - efactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
  - docs: 文档修改
  - style: 代码格式修改, 注意不是 css 修改（例如分号修改）
  - test: 测试用例新增、修改
  - build: 影响项目构建或依赖项修改
  - revert: 恢复上一次提交
  - ci: 持续集成相关文件修改
  - chore: 其他修改（不在上述类型中的修改）
  - release: 发布新版本
  - workflow: 工作流相关文件修改
  - scope: commit 影响的范围, 比如: route, component, utils, build…
  - subject: commit 的概述
  - body: commit 具体修改内容, 可以分为多行.
  - footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.
- scope: commit 影响的范围, 比如: route, component, utils, build…
- subject: commit 的概述
- body: commit 具体修改内容, 可以分为多行.
- footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.

例如

1. fix（修复 BUG）

如果修复的这个 BUG 只影响当前修改的文件，可不加范围。如果影响的范围比较大，要加上范围描述。

例如这次 BUG 修复影响到全局，可以加个 global。如果影响的是某个目录或某个功能，可以加上该目录的路径，或者对应的功能名称。

```
// 示例1
fix(global):修复checkbox不能复选的问题
// 示例2 下面圆括号里的 common 为通用管理的名称
fix(common): 修复字体过小的BUG，将通用管理下所有页面的默认字体大小修改为 14px
// 示例3
fix: value.length -> values.length
```

2. feat（添加新功能或新页面）

```
feat: 添加button组件

这是一个示例，假设对组件功能进行了一些描述。

这里是备注，可以是放BUG链接或者一些重要性的东西。
```

3. chore（其他修改）

chore 的中文翻译为日常事务、例行工作，顾名思义，即不在其他 commit 类型中的修改，都可以用 chore 表示。

其他类型的 commit 和上面三个示例差不多，就不说了。

### lint-staged

`lint-staged` 相当于一个文件过滤器，每次提交时只检查本次提交的暂存区的文件，它不能格式化代码和校验文件，需要自己配置一下，如：`.eslintrc`、`.stylelintrc` 等，然后在 `package.json` 中引入。

```json
 "lint-staged": {
    "*.js": ["eslint --fix", "git add"]
  }
```

当文件变化，我们 `git commit` 它们，`pre-commit` 钩子会启动，执行 `lint-staged` 命令，我们对于 `lint-staged` 如上文配置，对本次被 commited 中的所有 `.js` 文件，执行 `eslint --fix` 命令和 `git add` ,命令，前者的的目的是格式化，后者是对格式化之后的代码重新提交。

**使用步骤**

1. 安装使用

```shell
yarn add -D lint-staged
```

2. 添加脚本命令

```json
// package.json
"scripts": {
  "lint:lint-staged": "lint-staged -c ./.husky/lint-staged.config.js"
}
```

3. 在 pre-commit 的钩子上添加 lint-staged 命令

```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
. "$(dirname "$0")/common.sh"
[ -n "$CI" ] && exit 0
npm run lint:lint-staged
```

4. 添加 `lint-staged` 配置文件

```js
// .husky/lint-staged.config.js
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.vue': ['eslint --fix', 'prettier --write', 'stylelint --fix'],
  '*.{scss,less,styl,html}': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write']
}
```

## Lint 规范校验

### ls-lint 校验文件命名

[ls-lint](https://github.com/loeffel-io/ls-lint) 可以校验文件命名规范，例如 `kebab-case`、`PascalCase`

安装使用

```shell
yarn add @ls-lint/ls-lint -D
```

在根项目创建 `.ls-lint.yml` 文件

```yml
ls:
  packages/**:
    .js: kebab-case
    .ts: kebab-case
    .d.ts: kebab-case

ignore:
  - .git
  - node_modules
```

配置 `package.json` 脚本命令 `"lint:ls-lint": "ls-lint"`，然后加入 `.husky/pre-commit`

```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
. "$(dirname "$0")/common.sh"

[ -n "$CI" ] && exit 0

npm run lint:ls-lint

# Format and submit code according to lintstagedrc.js configuration
npm run lint:lint-staged
```

### Prettier

[Prettier](https://prettier.io/docs/en/install.html) 对 `js` 或者 `css` 等代码进行格式化，可以保证团队的代码风格保持一致。

安装

```shell
yarn add -D prettier
```

根目录新建 `prettier.config.js` 文件

```js
module.exports = {
  // 单行代码的最大宽度
  printWidth: 120,
  // 指定每个缩进级别的空格数
  tabWidth: 2,
  // 使用制表符 (tab) 缩进
  useTabs: false,
  // 在语句末尾打印分号
  semi: true,
  // 多行时尽可能打印尾随逗号
  trailingComma: 'none',
  // 使用单引号而不是双引号
  singleQuote: true,
  // 在对象文字中打印括号之间的空格
  bracketSpacing: true,
  // 将 > 多行 JSX 元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）。
  jsxBracketSameLine: false,
  // auto | lf | crlf | cr
  endOfLine: 'lf'
}
```

在 `.husky/lint-staged.config.js` 配置命令格式化 `prettier --write`

`.prettierignore` 忽略格式化

```
# 以下文件夹不会被格式化
/dist/*
.local
.output.js
/node_modules/**
**/*.svg
**/*.sh
/public/*
```

### ESLint 校验

[Eslint](https://eslint.org/docs/latest/user-guide/getting-started) 是用于约束 `js` 等代码中的一些语法,让编写者能够及时发现编写上的语法错误

安装

```js
yarn add -D eslint
```

根目录创建配置文件 `.eslintrc.js`

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential'
    // 'airbnb-base',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  plugins: ['vue'],
  rules: {}
}
```

`.eslintignore` 配置不想被 `eslint` 校验的文件

```
*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
/docs
.husky
.local
/bin
Dockerfile
```

`.husky/lint-staged.config.js` 添加脚本命令 `eslint --fix`

::: tip
添加 `--fix` 可以开启 `eslint` 的自动修复功能。
如果您使用的编辑起是 `vscode` ，请安装 `eslint` 的插件进行使用喔
有时候编辑器的问题，配置不会立马生效，需要关闭编辑器重新开启项目，让编辑器重新加载配置。
:::

### 与 Prettier 配合

1. 安装

```shell
yarn add -D eslint-config-prettier eslint-plugin-prettier
```

- `eslint-config-prettier`：关闭所有与 eslint 冲突的规则，请注意，该插件只有关闭冲突的规则的作用
- `eslint-plugin-prettier`: 如果您禁用与代码格式相关的所有其他 ESLint 规则，并且仅启用检测潜在错误的规则，则此插件效果最佳。换句话说，就是你想单独配置某一项时，使用这个插件。值得一提的是，这个插件附带了一个 plugin:prettier/recommended 配置，可以 eslint-config-prettier 一次性设置插件。该配置最主要的就是解决回调函数的格式化问题

2. 修改 `.eslintrc.js`

```json
{
  "extends": ["prettier", "plugin:prettier/recommended"]
}
```

### Stylelint

`Stylelint` 是一款强大的现代 `linter`，可帮助您避免错误并强制执行样式中的约定，帮助统一团队中书写样式代码的规则。

安装

```shell
yarn add -D stylelint stylelint-config-standard stylelint-order
```

- `stylelint stylelint-config-standard`: 官方需要下载的 `stylelint` 安装包
- `stylelint-order`: 可以自定义样式代码编写顺序的 styllint 插件

`stylelint.config.js` 配置文件

```
module.exports = {
  root: true,
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin'],
      },
    ],
    'no-empty-source': null,
    'named-grid-areas-no-invalid': null,
    'unicode-bom': 'never',
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'warning' },
    ],
    // Specify the alphabetical order of the attributes in the declaration block
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'float',
      'width',
      'height',
      'max-width',
      'max-height',
      'min-width',
      'min-height',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'margin-collapse',
      'margin-top-collapse',
      'margin-right-collapse',
      'margin-bottom-collapse',
      'margin-left-collapse',
      'overflow',
      'overflow-x',
      'overflow-y',
      'clip',
      'clear',
      'font',
      'font-family',
      'font-size',
      'font-smoothing',
      'osx-font-smoothing',
      'font-style',
      'font-weight',
      'hyphens',
      'src',
      'line-height',
      'letter-spacing',
      'word-spacing',
      'color',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-size-adjust',
      'text-shadow',
      'text-transform',
      'word-break',
      'word-wrap',
      'white-space',
      'vertical-align',
      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',
      'pointer-events',
      'cursor',
      'background',
      'background-attachment',
      'background-color',
      'background-image',
      'background-position',
      'background-repeat',
      'background-size',
      'border',
      'border-collapse',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-color',
      'border-image',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'border-spacing',
      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-top-left-radius',
      'border-radius-topright',
      'border-radius-bottomright',
      'border-radius-bottomleft',
      'border-radius-topleft',
      'content',
      'quotes',
      'outline',
      'outline-offset',
      'opacity',
      'filter',
      'visibility',
      'size',
      'zoom',
      'transform',
      'box-align',
      'box-flex',
      'box-orient',
      'box-pack',
      'box-shadow',
      'box-sizing',
      'table-layout',
      'animation',
      'animation-delay',
      'animation-duration',
      'animation-iteration-count',
      'animation-name',
      'animation-play-state',
      'animation-timing-function',
      'animation-fill-mode',
      'transition',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',
      'background-clip',
      'backface-visibility',
      'resize',
      'appearance',
      'user-select',
      'interpolation-mode',
      'direction',
      'marks',
      'page',
      'set-link-source',
      'unicode-bidi',
      'speak',
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
```

`.stylelintignore` 忽略校验目录文件

```
/dist/*
/public/*
public/*
```

在 `.husky/lint-staged.config.js` 增加命令 `stylelint --fix`

**与 Prettier 配合**

::: tip
stylelint 会与 prettier 产生冲突，要做兼容
:::

安装

```shell
yarn add stylelint-config-prettier stylelint-config-standard
stylelint-scss stylelint-config-standard-scss postcss postcss-html postcss-scss -D
```

- stylelint-config-prettier ---- 基于 prettier 代码风格的 stylelint 规则
- stylelint-config-standard ---- stylelint 的标准可共享配置
- stylelint-config-standard-scss ---- 针对 scss 的标准可共享配置。
- postcss ---- 用于 postcss-html 和 postcss-scss 的支持
- postcss-html ---- 解析 `<style>` 类 `vue、html` 文件标签中的样式
- postcss-scss ---- 解析 `<style lang=“scss”>` 下的 `scss` 样式

修改 `stylelint.config.js`

```js
module.exports = {
  plugins: ['stylelint-order'],
  customSyntax: 'postcss-html',
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss']
}
```

### Vue 与 Eslint 结合

安装

```shell
yarn add -D eslint-plugin-vue vue-eslint-parser
```

- `eslint-plugin-vue`: vue 官方推荐的 eslint 插件
- `vue-eslint-parser`：将 `.vue` 文件 `parse` 成 `eslint` 能够识别的文件,对 `template` 和 `<script>` 进行解析生成特定的增强的 AST

修改 `.eslintrc.js`

```js
module.exports = {
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/vue-recommended'],
  rules: {
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
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
    ]
  }
}
```

::: tip
由于 prettier 和 stylelint 官方已经对 vue 和 react 进行内置支持了，这里可以不用再进行其他的操作
:::
