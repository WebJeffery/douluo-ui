|-- my-github
    |-- .cz-config.js           # cz-customizable commit message 规范
    |-- .editorconfig           # EditorConfig 配置
    |-- .eslintignore           # eslint 忽略检测目
    |-- .eslintrc.js            # eslint 配置文件
    |-- .gitignore              # git 忽略提交
    |-- .ls-lint.yml            # ls-lint 文件命名规范kebab-case 校验
    |-- .stylelintignore        # stylelint 忽略检测
    |-- .versionrc.js           # standard-version 自动生成 CHANGELOG 配置
    |-- CHANGELOG.md            # standard-version 根据 commit 信息自动生成
    |-- README.md               # readme 项目介绍
    |-- babel.config.js         # babel 配置文件
    |-- commitlint.config.js    # commitlint 校验 comit message 配置
    |-- compoments.json         # 项目组件路径
    |-- components.d.ts         # vite ts 文件类型声明
    |-- gulpfile.js             # gulp 打包 css
    |-- index.html              # vite 入口文件 /examples/main.js
    |-- jsconfig.json           # js 配置文件
    |-- package.json
    |-- prettier.config.js      # prettier 格式配置
    |-- stylelint.config.js     # style 格式配置
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
    |   |   |-- sidebarRoutes   # 抽离的侧边栏路有文件
    |   |   |   |-- business.js # 业务组件文档路径
    |   |   |   |-- developer.js # 开发指南文档路径
    |   |   |   |-- element.js   # element 组件文档路径
    |   |   |   |-- guide.js     # 开发规范文档路径
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
    |       |-- App.vue
    |       |-- layout
    |       |-- router
    |       |-- utils
    |       |-- views
    |-- lib
    |   |-- xxx.common.js        # rollup 打包 common 规范
    |   |-- xxx.common.min.js    
    |   |-- xxx.es.js            # es 打包规范
    |   |-- xxx.es.min.js        
    |   |-- theme                # css 和 字体图标打包
    |-- packages
    |   |-- element-ui
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
