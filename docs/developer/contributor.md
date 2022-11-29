# 代码贡献指南

### 目录结构介绍

目录结构使用 [mddir](https://www.npmjs.com/package/mddir) 插件生成

```html 
|-- douluo-ui
    |-- .cz-config.js           # cz-customizable commit message 规范
    |-- .editorconfig           # EditorConfig 配置
    |-- .eslintignore           # eslint 忽略检测文件
    |-- .eslintrc.js            # eslint 配置文件
    |-- .gitignore              # git 忽略提交
    |-- .ls-lint.yml            # ls-lint 文件命名规范 kebab-case 校验
    |-- .stylelintignore        # stylelint 忽略检测
    |-- .versionrc.js           # standard-version 自动生成 CHANGELOG 配置
    |-- CHANGELOG.md            # standard-version 根据 commit 信息自动生成
    |-- README.md               # readme 项目介绍
    |-- babel.config.js         # babel 配置文件
    |-- commitlint.config.js    # commitlint 校验 comit message 配置
    |-- components.json         # 项目组件路径
    |-- components.d.ts         # vite ts 文件类型声明
    |-- gulpfile.js             # gulp 打包 css
    |-- index.html              # vite 入口文件 /examples/main.js
    |-- jsconfig.json           # js 配置文件
    |-- package.json
    |-- prettier.config.js      # prettier 格式配置
    |-- stylelint.config.js     # stylelint 格式配置
    |-- vite.config.js          # vite 配置
    |-- .husky                  # husky 配置
    |   |-- commit-msg          # commit 提交钩子
    |   |-- common.sh
    |   |-- lint-staged.config.js   # lint-staged 配置
    |   |-- pre-commit          # commit 之前钩子函数
    |-- .vscode                 # 配置 vscode 编辑器
    |   |-- extensions.json
    |   |-- setting.json
    |-- build                   # rollup 打包配置
    |   |-- rollup-build.js
    |   |-- rollup-creat-Config.js
    |   |-- utils.js
    |-- config                  # 项目构建配置
    |   |-- alias.js
    |   |-- rollup-config.js
    |-- docs                    # 文档目录
    |   |-- README.md
    |   |-- .vuepress
    |   |   |-- config.js       # vuepress 配置文件
    |   |   |-- enhanceApp.js   # vuepress 安装组件库
    |   |   |-- components      # vuepress 公共组件
    |   |   |-- dist            # vuepress 打包静态资源
    |   |   |-- sidebarRoutes   # 抽离的侧边栏路由文件
    |   |   |   |-- business.js # 业务组件路由路径
    |   |   |   |-- developer.js # 开发指南路由路径
    |   |   |   |-- element.js   # element 组件路由路径
    |   |   |   |-- guide.js     # 开发规范路由路径
    |   |   |-- styles           # vuepress 公共样式
    |   |       |-- index.styl
    |   |       |-- element-ui   # element-ui 文档样式
    |   |       |-- theme        # vuepress-theme-hope 主题样式
    |   |-- developer            # 开发指南文档
    |   |-- guide                # 开发规范文档
    |   |-- packages
    |       |-- business         # 业务组件文档
    |       |-- element          # element 文档
    |-- examples                 # 组件库开发项目
    |   |-- main.js              # vite 启动入口文件
    |   |-- assets
    |   |-- src
    |-- lib                      # rollup 打包组件库静态资源
    |   |-- xxx.common.js        # rollup 打包 common 规范
    |   |-- xxx.common.min.js    
    |   |-- xxx.es.js            # es 打包规范
    |   |-- xxx.es.min.js        
    |   |-- theme                # css 和 字体图标打包
    |-- packages                 # 组件库包
    |   |-- element-ui          # 基础组件包
    |   |-- business            # 业务组件包
    |-- play                    # vite 快速演示项目
    |-- scripts                 
    |   |-- docs.sh             # 文档发布脚步
    |-- src                     # 组件库项目
    |   |-- index.js            # 组件库入口文件
    |   |-- images
    |   |-- ui                  # 定义引入组件库文件
    |   |-- utils
    |       |-- themePicker.js  # 修改 element-ui 主题方法
    |       |-- use-namespace.js # 组件生成 bem 规范和前缀
    |-- styles                   # 统一存放组件库样式
        |-- src
        |   |-- iconfont.scss    # 字体样式
        |   |-- index.scss       # scss 入口文件
        |   |-- var.scss         # css 变量
        |   |-- common
        |   |   |-- var.scss     # scss 变量定义
        |   |-- element-ui      # element 组件 scss 目录
        |   |   |-- button.scss
        |   |-- fonts           # 字体图标
        |   |-- mixins
        |       |-- _var.scss   # 定义生成 css 变量方法
        |       |-- config.scss   # bem 规范符号
        |       |-- function.scss # 定义公用函数
        |       |-- mixins.scss     # bem 复用方法
        |       |-- utils.scss      # at-root 等复用mixin
        |-- theme               # gulp 打包 scss 目录，复制到 lib 
```

### yarn 命令

开发和维护组件库，需要了解一些 yarn 基本操作

初始化一个项目

```bash
yarn init
```

添加依赖包

```bash
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

此种添加方式默认添加到 `dependencies` 中，`dependencies` 是项目运行时所需要的依赖。由于添加到该目录中的依赖会让使用组件库的项目安装这些依赖，所以一定要分清楚依赖是否需要用户安装

**将依赖项添加到不同依赖项类别中**

分别添加到 `devDependencies`、`peerDependencies` 和 `optionalDependencies` 类别中：

```bash
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

- `devDependencies`是开发时依赖，在构建运行之后不需要的依赖，默认情况下组件开发过程中均添加到该类别

- `peerDependencies`是同伴依赖，是一种特殊的依赖，在发布包的时候需要。有这种依赖意味着安装包的用户也需要和包同样的依赖

- `optionalDependencies`是可选依赖，意味依赖是可选的。这种依赖即便安装失败，Yarn 也会认为整个依赖安装过程是成功的。这种类型适用于那些即便没有成功安装可选依赖，也有后备方案的情况（比如 Watchman）。

**升级依赖包**

```bash
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

**移除依赖包**

```bash
yarn remove [package]
```

**安装项目的全部依赖**

```bash
yarn
```

或

```bash
yarn install
```

### 贡献代码流程

#### 下载启动项目


fork 项目到自己的本地仓库，克隆项目到本地


```shell
git clone git@github.com:【账号】/douluo-ui.git
```

添加源关联源仓库，暂且命名源为 `upstream`

```shell
git remote add upstream git@github.com:JefferyXZF/douluo-ui.git
```

安装依赖，启动项目

```shell
yarn
yarn dev
```

查看或编写文档，执行下面命令

```shell
yarn docs:dev
```

**命令脚步介绍**

```json
  "scripts": {
    "bootstrap": "yarn || npm install", // 安装依赖（首推 yarn，yarn.lock会锁定依赖版本库）
    "dev": "vite", // vite 启动，默认 vite.config.js，index.html 入口文件是 examples/main.js
    "docs:dev": "vuepress dev docs", // vuepress 启动项目
    "docs:build": "vuepress build docs", // vuepress 打包文档
    "docs:deploy": "bash ./scripts/docs.sh", // 打包推送 gh-pages 文档
    "gulp-build:css": "gulp build", // gulp 打包 scss 和 字体图标
    "build:lib": "cross-env NODE_ENV=production rimraf ./lib && 
    node ./build/ rollup-build && npm run gulp-build:css", // rollup 打包组件库
    "commit": "git-cz", // commit message 提交规范
    "standard-version": "standard-version", // 生成 changelog 文件（带图标）
    "changelog": "npx conventional-changelog -p angular -i CHANGELOG.md -s -r 0", // 也是生成 changelog 文件
  }
```

#### 开发组件

组件按照功能划分为基于 element-ui 基础组件和业务组件

在开发前，首先要对开发的组件进行设计，要实现什么功能，考虑功能拓展性，事先定义 `props`、`event 事件`、`slot 插槽`，为了组件样式灵活，可能要对外暴露样式接口，例如自定义 `class`、`style`。同时，为了兼容 `elemnt-ui` API，需要考虑用 `$attrs`、`$listeners` 、组件内定义插槽，条件允许，可以先参考 [element-ui](https://github.com/ElemeFE/element) 和 [element-plus](https://github.com/element-plus/element-plus) 源码实现


开发基础组件，在 `packages/element-ui` 目录下创建，参考 `button` 组件，然后在 `src/ui/element-ui.js` 和 根目录下 `components.json` 添加文件路径

开发业务组件，参考 `element-ui` 目录，在 `packages/business` 创建文件组件，然后引入路径和上面一样

注意：如果组件需要使用到 **图片或第三方插件** 考虑到包的大小，需要先出实现方案，讨论合适后再编码实现

**以 button 组件为例**

入口文件 `index.js`

```js
import Button from "./src/button.vue";
import { createNamespace } from "/src/utils/use-namespace.js";

Button.install = (Vue, options = {}) => {
  Vue.component(createNamespace("button", { prefix: options.prefix }), Button);
};

export default Button;
```

此处将 `Button` 注册成一个 Vue 组件，外部引入时可以通过 `Vue.use()` 来安装该插件，该插件的功能就是全局注册 `Button` 组件

**button src 下的单文件组件**

为了兼容 `element-ui` buton 组件的功能，使用 `$attrs` 和 `$listeners` 继承它的属性和事件

`useNamespace` 方法是参考 `element-plus` 实现，创建一个 `bem` 对象，调用封装的方法，可以生成符合 `bem` 规范的 `class`，避免命名容易冲突

```js
<template>
  <el-button
    v-bind="$attrs"
    v-on="$listeners"
    :class="[
      ns.b()
    ]">
    <slot></slot>
  </el-button>
</template>
<script>
import { useNamespace } from 'src/utils/use-namespace.js'

export default {
  name: 'Button',

  data () {
    this.ns = useNamespace('button')
    return {}
  }
}
</script>
```

#### 组件样式主题


阅读 `button` 单文件组件，你可能会发现没有样式代码。为了考虑样式的统一性和打包优化，放在了 `styles` 目录下

组件库的样式管理由 sass 来完成，因此你需要对 sass 的一些语法要特别熟悉，如变量声明、 `@mixins` 、 `@function` 、还有一些常用的内建函数`maps`、`color`、`sting`等知识，详细学习请阅读 [SCSS 开发指南](../sass)

样式编写使用了 `Bem` 命名规范，`Bem` 是块（block）、元素（element）、修饰符（modifier）的简写，由 Yandex 团队提出的一种前端 CSS 命名方法论，可以让前端代码更容易阅读和理解，方便协作和维护

BEM 命名约定的模式是：
```css
.block {}

.block__element {}

.block--modifier {}
```

每一个块(block)名应该有一个命名空间（前缀），例如 `el-block`

- `block` 代表了更高级别的抽象或组件。
- `block__element` 代表 `.block` 的后代，用于形成一个完整的 `.block` 的整体。
- `block--modifier` 代表 `.block` 的不同状态或不同版本。

使用两个连字符和下划线而不是一个，是为了让你自己的块可以用单个连字符来界定。如：

```css
.sub-block__element {}

.sub-block--modifier {}
```


下面介绍一些 `dou-ui` 中主要用到的 `mixin` 模块及 `bem` 用法


1、`b` 是 `bem` 中 `block` 的简称， 用来匹配 `block` 声明类，比如

```scss
// mixin.scss
@mixin b($block) {
  $B: $namespace + '-' + $block !global;

  .#{$B} {
    @content;
  }
}

// 使用
@include b(button) {
}
// 将会编译为
.dl-button {
}
```

2、`e` 是 `bem` 中 `element` 的简称，用来匹配 `element` 声明类，比如

```scss
@include b(button) {
  @include e(header) {
  }
}
// 将会编译为
.qw-button__header {
}
```

3、`m` 是 `bem` 中 `modifier` 的检查， 用来匹配 `modifier` 声明类，比如

```scss
@include b(button) {
  @include m(primary) {
  }
}
// 将会编译为
.dl-button--primary {
}
```

`when` 是额外增加的状态修饰符，用来表示当前块或子元素或子元素特定类型下的状态，，比如

```scss
@include b(button) {
  @include when(plain) {
  }
}
// 将会编译为
.dl-button.is-plain {
}
```

`&` 代表父级，`&` 会编译为父级，这个类也会被置于根目录，而不是放置在父级下。

### Git Commit 提交

本地提交代码，使用 `yarn commit` 替代 `git commit` 

如果不是，每次提交 commit message 都必须按照以下格式提交，且不得超过 72 个字符（避免自动换行影响美观）

```html 
<type>(<scope>): <subject>
```

`type` 用来说明 commit 的类别，例如

- **feat**：新功能（feature）
- **fix**：修补bug
- **docs**：文档（documentation）
- **style**： 代码风格，格式修复
- **refactor**：重构（即不是新增功能，也不是修改bug的代码变动）
- **perf**：代码优化,改善性能
- **test**：增加测试
- **chore**：构建过程或辅助工具的变动
- **revert**：代码回退
- **ci**：对CI配置文件和脚本的更改
- **build**：变更项目构建或外部依赖

如果 `type` 是 `feat` 或 `fix`，则该 commit 必须要在记录 changelog（更新日志）中

`scope` 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，一般情况下可以不写，如需要可以注明

`subject` 是 commit 目的的简短描述，不得超过 50 个字符

- 尽量使用英文书写，不会的单词先翻译
- 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
- 第一个字母小写
- 结尾不加句号（.）

### 分支检出

组件库的开发主分支为 `develop` 分支，组件库开发者需要贡献代码时，请按照 Git Commit 提交规范的 type 类型来命名新分支，并进行开发。

例如，需要进行 Button 组件的开发时，拉取 `develop` 分支最新代码，并生成名为 `feat-button` 的新分支进行开发。同理，进行 bug 修补时新建分支名应为 `fix-button`。

请严格按照以上命名规范进行，不合格的命名分支将会被移除。

在新建分支开发完成之后，需要进行代码审核，审核完成之后才可以合并到 `develop` 分支，同时，该新建分支名必须删除。

### 发起 PR 合并

在 `push` 之前，避免合并冲突，先合并远程的 `develop` 分支在推送，然后再发起合并，审查完代码后会合并你的代码到 `develop` 分支

```bash
git fetch upstream

git merge upstream/develop

git push origin xxx-button
```

### 版本发布

在 `develop` 分支开发一定功能时，判断是否需要发布新版本的依据为：

- 是否有新功能上线
- 是否有重大bug修复
- 是否有样式规范的变更

通过小组评审之后，商定进行发布的版本号。


