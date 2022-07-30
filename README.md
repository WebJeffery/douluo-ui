# douluo-ui 组件库

## 开发规范
### 安装依赖
```
yarn install
```

### 开发调试，开启本地服务，打开示例文档
```
yarn serve
```

### 打包生成npm包
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### 规范提交代码git cz 替代 git commit

```
Select the type of change that you're committing: (Use arrow keys)
❯ feat:     A new feature # 实现新功能
  fix:      A bug fix # bug修复
  docs:     Documentation only changes # md文件修改
  style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)  # 样式修改
  refactor: A code change that neither fixes a bug nor adds a feature # 功能重构
  perf:     A code change that improves performance # 性能提升
  test:     Adding missing tests or correcting existing tests # 与测试有关的更改
  build:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm) # 影响到项目构建的相关修改
  ci:       Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) # 对CI配置文件和脚本的修改
  chore:    Other changes that don't modify src or test files # 不会修改src或测试文件的更改
  revert:   Reverts a previous commit # 恢复上一次提交

## 本次提交更改的范围
What is the scope of this change (e.g. component or file name): (press enter to skip) # 输入更改的内容后按回车，此处我的内容是：xx component

## 本次提交修改内容的简短概括，最多89个字
 Write a short, imperative tense description of the change (max 89 chars):
 (0)   # 输入本次更改的内容后按回车，此处我的内容是：设计模块添加设计图

## 本次提交修改内容的详细描述，用1，2，3..数字来描述，每一点之间用空格隔开 
Provide a longer description of the change: (press enter to skip)
# 此处我的内容是：1.添加反馈设计图 2.添加文件列表设计图 3.添加账户信息设计图

## 是否有重大变化
Are there any breaking changes? (y/N) # 此处我输入的是N

## 此更改是否会影响到未解决的问题
Does this change affect any open issues? (y/N) # 此处我输入的是N
```




