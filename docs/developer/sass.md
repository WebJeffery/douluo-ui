# 组件库 Sass(Dart) 知识

### 前言

Sass 有三个版本 `Dart Sass`、`libsass` 和 `Ruby Sass`：
- `Dart Sass`：用 `Dart` 语言写的 `sass` 实现，于2016年11月1日发布 alpha 版本，版本1.23.0之后完全支持模块化机制。
- `libSass` 也就是俗称的 `node-sass`，用 c/c++ 实现的 `sass` 版本，使用广泛，其中 `node-sass` 是绑定了 `libsass`的 `nodejs` 库，可以极快的将 `.scss` 文件编译为 `.css` 文件，安装过程很慢，官方也不推荐再使用了。
- `Ruby Sass` 是最初的 `Sass` 实现，但是2019年3月26日被停止了，以后也不会再支持，使用者需要迁移到别的实现上


[Sass](https://sass-lang.com/) 官方团队在2020年10月也正式宣布 `Libsass` 将弃用，以及基于它的 `Node Sass` 和 `SassC`，并且建议用户使用 `Dart Sass`，主要有以下几点说明：

- 不再建议将 `LibSass` 用于新的 `Sass` 项目， 改为使用 `Dart Sass`。
- 建议现有的 `LibSass` 用户制定计划，最终迁移到 `Dart Sass`，并且所有 `Sass` 库都制定计划，最终放弃对 `LibSass` 的支持。
- 不再计划向 `LibSass` 添加任何新功能，包括与新 `CSS` 功能的兼容性。
- `LibSass` 和 `Node Sass` 将在尽力而为的基础上无限期维护，包括修复主要的错误和安全问题以及与最新的 Node 版本兼容。

### 为什么使用 Dart Sass

目前 Dart Sass 已经作为 Sass 最新的版本了，当执行 `npm install sass -D` 默认使用的是 Dart Sass 包，[vue-cli](https://cli.vuejs.org/zh/)、[Vite](https://vitejs.dev/) 脚手架默认也是使用最新版本 Dart sass，而且不需要安装 `node-sass`【之前安装 node-sass 经常失败】

另外，[element-plus](https://element-plus.org/zh-CN/) 组件库也是使用 dart dass 模块的 [sass:map](https://sass-lang.com/documentation/values/maps) 和 [@use](https://sass-lang.com/documentation/at-rules/use) 重构了所有的 SCSS 变量，解决了由 `@import` 造成的重复输出问题。

所以，为了获得 `sass` 提供更多更强大的功能，强烈推荐使用 `dart sass`

### 安装使用

如果之前安装了 `node-sass`，可以先卸载

```shell
npm uninstall node-sass
```

安装 dart-sass

```shell
npm install sass sass-loader@^10.1.1 -D
```

> 注意：之前安装 `sass-loader` 版本是 `13.0+`，版本过高导致报错，提示 `TypeError: this.getOptions is not a function`，退回 `10.+` 可以运行成功


如果项目之前用到 `/deep/` 需要替换为 `::v-deep`，全局搜索 `/deep/` , 将项目里的 `/deep/` 替换为 `::v-deep`

### SCSS变量

**scss** 变量命名规则

- 以美元符号 `$` 开头，后面跟变量名；且必须先定义，后使用
- 变量名不能以**数字开头**，可包含字母、数字、下划线、横线（连接符）
- 通过连接符 `-` 与下划线 `_` 定义的同名变量为**同一变量**
- 写法同 `css`，即变量名和值之间用冒号 `:` 分隔

```scss
$color:#F00;
p {
    color: $color;
}
```

编译为

```css
p {
    color: #F00;
}
```

`SCSS` 变量有两种作用域：**全局变量域**和**局部变量域**
- 全局变量：声明在最外层的变量，可在任何地方使用；或在局部变量添加 `!global` 声明
- 局部变量：嵌套规则内定义的变量只能在嵌套规则内使用

```scss
$color: red;
.container {
    $height: 500px;
    $font-size: 16px !global; // 全局变量，外部可以使用
    font-size: $font-size;
    color: $color;
    height: $height;
}
.footer {
    /**$font-size使用!global 申明成全局变量了*/
    font-size: $font-size; 
    /**
    * Error: Undefined variable. 
    * $height是.container下的局部变量，无法在.footer下面编译
    */
    height:$height;
}
```

编译 css

```css
.container {
    font-size: 16px;
    color: red;
    height: 500px;
}

.footer {
     /**$font-size使用!global 申明成全局变量了*/
    font-size: 16px;
}
```

**CSS 变量**

Sass 默认支持[css变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，通过 scss 变量 和 css 变量管理可以很容易实现换肤，`element-plus` 是这样实现的

`css 变量` 声明一个自定义属性，属性名需要以两个减号（`--`）开始，定义变量 `--变量名:变量值` 例如： `--main-color: black;`，由 `var()` 函数来获取值，例如 `color: var(--main-color)`

```scss
:root {
    --main-color: #F00;
}
p {
    color: var(--main-color);
}
```

`:root` 是在 HTML 文档的任何地方都可以访问到它

**注意：** 自定义属性名是大小写敏感的，`--my-color` 和 `--My-color` 会被认为是两个不同的自定义属性

通过 `JavaScript` 获取或者修改 CSS 变量和操作普通 CSS 属性是一样

```js
// 获取一个 Dom 节点上的 CSS 变量
element.style.getPropertyValue("--my-var");

// 获取任意 Dom 节点上的 CSS 变量
getComputedStyle(element).getPropertyValue("--my-var");

// 修改一个 Dom 节点上的 CSS 变量
element.style.setProperty("--my-var", jsVar + 4);
```


### SCSS 数据类型

- 数字：`1rem`、`2vh`、`13`、 `10px`；
- 字符串：分有引号字符串与无引号字符串，`"foo"`、 `'bar'`、`baz`；
- 颜色：`blue`, `#04a3f9`, `rgba(255,0,0,0.5)`；
- 布尔型：`true` 和 `false`；
- 空值：`null` 是其类型的唯一值。表示缺少值，通常由函数返回以表示缺少结果；
- 数组 `(list)`：用空格或逗号作分隔符，`1.5em 1em 0`； `2em,Helvetica,Arial,sans-serif`；
- `maps`：相当于 `JavaScript` 的 `object` 对象，格式括号包裹键值对，逗号隔开 (key1: value1, key2: value2)

```scss
// 数字
$layer-index: 10;
$border-width: 3px;

// 字符串
$font-weight: bold;

// 数组
$font-base-family: "Open Sans", Helvetica, Sans-Serif;
$block-base-padding: 6px 10px 6px 10px;

// 颜色
$top-bg-color: rgba(255, 147, 29, 0.6);

// 布尔值
$blank-mode: true;

// null
$var: null;

// maps 值
$fonts: (
  serif: "Helvetica Neue",
  monospace: "Consolas",
);

.container {
  // 内部变量
  font-family: $font-base-family;
  font-size: $font-size;
  padding: $block-base-padding;

  @if $blank-mode {
    background-color: #000;
  } @else {
    background-color: #fff;
  }

  content: type-of($var);
  content: length($var);
  color: $top-bg-color;
}

// 如果列表中包含空值，则生成的CSS中将忽略该空值。
.wrap {
  font: 18px $font-weight map-get($fonts, "sans");
}
```

### !default

可以在变量的结尾添加 `!default` 来给变量设置默认值，有点类似 `Javascript` 的逻辑运算符 `let content=value || "default value"` 。注意，变量是 `null` 时将视为未被 `!default` 赋值

```scss
// 如果$content之前没使用 !default，没办法赋值覆盖
$content: "First content";
$content: "Second content" !default;
#main {
    content: $content;
}
```

编译成 css

```css
#main {
  content: "First content";
}
```

### 插值语句

通过 `#{}` 插值语句可以在选择器、属性名、注释中使用变量，使用 `#{}` 插值语句将变量包裹起来即可，和 `js` 中的 `模板字符串` 很像

```scss
$font-size: 12px;
$line-height: 30px;
$class-name: danger;
$attr: color;
$author: "福大命大";

p {
    font: #{$font-size}/#{$line-height} Arial Helvetica, sans-serif;
}

/* 
* 这是文件的说明部分
* @author: #{$author}
*/

a.#{$class-name} {
    border-#{$attr}: #f00;
}
```

编译为css

```css
p {
    font: 12px/30px Arial Helvetica, sans-serif;
}

/* 
* 这是文件的说明部分
* @author: 福大命大
*/
a.danger {
    border-color: #f00;
}
```

### 条件语句 @if

`@if` 语法和 `js` 类似，基本格式是 `@if...`、`@else if...`、`@else`

```scss
$theme:3;
.container {
    @if $theme >= 5 {
        background-color: red;
    }
    @else {
        background-color: blue;
    }
}
```

编译为 css

```css
.container {
    background-color: blue;
}
```

### @for 循环

`for` 在条件范围内重复操作，这个指令包含两种格式：

- @for $var from `start` through `end`
- @for $var from `start` to `end`

两者区别在于 `through` 与 `to` 的含义
- 使用 `through` 时，条件范围包含 `start` 与 `end` 的值；
- 使用 `to` 时条件范围只包含 `start` 的值不包含 `end` 的值；

`$var` 可以是任何变量，比如 `$i`，`start` 和 `end` 必须是整数值。

```scss
@for $i from 1 to 3 {
  #loading span:nth-child(#{$i}) {
      width: 20 * ($i - 1) + px;
  }
}
```

编译为 css

```css
#loading span:nth-child(1) {
    width: 0px;
}

#loading span:nth-child(2) {
    width: 20px;
}
```

如果把 `to` 换成 `through`

```css
#loading span:nth-child(1) {
    width: 0px;
}

#loading span:nth-child(2) {
    width: 20px;
}

#loading span:nth-child(3) {
    width: 40px;
}
```

### @each 循环

`@each` 指令的格式是 `@each $var in $list` , `$var` 可以是任何变量名，比如 `$length` 或者 `$name`，而 `$list` 是一连串的值，也就是值列表

```scss
$color-list:red green blue turquoise darkmagenta;
@each $color in $color-list {
    $index: index($color-list, $color);
    .p#{$index - 1} {
        background-color: $color;
    }
}
```

编译为 css

```css
.p0 {
    background-color: red;
}

.p1 {
    background-color: green;
}

.p2 {
    background-color: blue;
}

.p3 {
    background-color: turquoise;
}

.p4 {
    background-color: darkmagenta;
}
```

### @while 循环

`@while` 指令循环输出直到表达式返回结果为 `false`。这样可以实现比 `@for` 更复杂的循环。比如，可以借此生成栅格化布局

```scss
$column:12;
@while $column>0 {
   .col-sm-#{$column} {
      width: $column / 12 * 100%;
   }
    $column:$column - 1;
}
```

编译为 css

```css
.col-sm-12 {
    width: 100%;
}

.col-sm-11 {
    width: 91.6666666667%;
}

.col-sm-10 {
    width: 83.3333333333%;
}

.col-sm-9 {
    width: 75%;
}

.col-sm-8 {
    width: 66.6666666667%;
}

.col-sm-7 {
    width: 58.3333333333%;
}

.col-sm-6 {
    width: 50%;
}

.col-sm-5 {
    width: 41.6666666667%;
}

.col-sm-4 {
    width: 33.3333333333%;
}

.col-sm-3 {
    width: 25%;
}

.col-sm-2 {
    width: 16.6666666667%;
}

.col-sm-1 {
    width: 8.3333333333%;
}
```

### @import

scss 拓展了 `@import` 的功能，允许其导入 scss或 sass文件。被导入的文件将合并编译到同一个 css 文件中，被导入的文件中所包含的变量或者混合指令 (mixin) 都可以在导入的文件中使用。

common.scss
```scss
$color:red;
```

index.scss
```scss
@import "common.scss";
.container {
    border-color: $color;
}
```

编译为 css

```css
.container {
  border-color: red;
}
```

以下情况下，`@import` 仅作为普通的 `css` 语句，不会导入 `scss` 文件：

- 文件拓展名是 `.css` ；
- 文件名以 `http://` 开头；
- 文件名是 `url()` ；
- `@import` 包含媒体查询。

```scss
@import "common.css";
@import url(common);
@import "http://xxx.com/xxx";
@import 'landscape' screen and (orientation:landscape);
```

`scss` 允许同时导入多个文件，例如同时导入 `a.scss` 与 `b.scss` 两个文件，不用再单独写个 `import` 引入

```scss
@import "a", "b";
```

### @Partials

如果需要导入 `scss` 或者 `sass` 文件，但又不希望将其编译为 `css`，只需要在文件名前添加下划线，这样会告诉 `scss` 不要编译这些文件。
注意：
- 导入语句中不需要添加**下划线**；
- 不可以同时存在添加下划线与未添加下划线的同名文件，添加下划线的文件将会被忽略

_common.scss
```scss
$color:red;
```

index.scss
```scss
@import "common.scss";
.container {
    border-color: $color;
}
```

编译为
```css
.container {
  border-color: red;
}
```

`_common.scss` 文件不会编译成 `_common.css` 文件，`Partials` 主要是用来定义公共样式的，专门用于被其他的 `scss` 文件 `import` 进行使用的


### @mixin

混合指令（Mixin）用于定义**可重复使用**的样式。混合指令可以包含所有的css规则，绝大部分 scss 规则，甚至可以通过参数功能引入变量，输出多样化的样式；

`@mixin` 和 `@include` 配合使用

```scss
// 定义一个区块基本的样式
@mixin block {
    width: 96%;
    margin-left: 2%;
    border-radius: 8px;
    border: 1px #f6f6f6 solid;
}
// 使用混入 
.container {
    .block {
        @include block;
    }
}
```

编译为 css

```css
.container .block {
    width: 96%;
    margin-left: 2%;
    border-radius: 8px;
    border: 1px #f6f6f6 solid;
}
```

`@mixin` 可以定义多个参数和默认值

```scss
// 定义块元素内边距，参数指定默认值
@mixin block-padding($top:0, $right:0, $bottom:0, $left:0) {
    padding-top: $top;
    padding-right: $right;
    padding-bottom: $bottom;
    padding-left: $left;
}

// 可指定参数赋值
.container {
    /** 不带参数 */
    @include block-padding;
    /** 按顺序指定参数值 */
    @include block-padding(10px,20px);
    /** 给指定参数指定值 */
    @include block-padding($left: 10px, $top: 20px)
}
```

编译 CSS
```css
.container {
    /** 不带参数 */
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;
    /** 按顺序指定参数值 */
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 0;
    padding-left: 0;
    /** 给指定参数指定值 */
    padding-top: 20px;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 10px;
}
```

**可变参数**：使用 `...` 处理参数不固定的情况，类似于js中的函数的剩余参数

```scss
@mixin linear-gradient($direction, $gradients...) {
    background-color: nth($gradients, 1);
    background-image: linear-gradient($direction, $gradients);
}

.table-data {
    @include linear-gradient(to right, #F00, orange, yellow);
}
```

编译为
```css
.table-data {
    background-color: #F00;
    background-image: linear-gradient(to right, #F00, orange, yellow);
}
```

**总结**
- `mixin` 是可以重复使用的一组 `css` 声明，有助于减少重复代码，只需声明一次，就可在文件中引用；
- 使用参数时建议加上默认值；
- `@import` 导入局部模块化样式（类似功能、同一组件）；
- `@minix` 定义的是可重复使用的样式

### @function 函数

`@function` 用于封装复杂的操作，可以很容易地以一种可读的方式抽象出通用公式和行为，函数提供返回值，常用来做计算方面的工作


`@function` 参数默认值

```scss
//change-color和hue是内置方法
//hue 返回$color的颜色为0到360度之间的一个数字。
//change-color 用于设置颜色的属性
@function invert($color, $amount: 100%) {
    //@error hue($color); 调试 210deg
    $inverse: change-color($color, $hue: hue($color) + 180);
    @return mix($inverse, $color, $amount);
}

$primary-color: #036;
.header {
    background-color: invert($primary-color, 80%);
}
```

编译 CSS
```css
.header {
    background-color: #523314;
}
```

**可变参数** 看作 js function 的 `rest 参数`

```scss
@function sum($numbers...) {
    $sum: 0;
    @each $number in $numbers {
        $sum: $sum + $number;
    }
    @return $sum;
}

$widths: 50px, 30px, 100px;
.micro {
    width: sum($widths...);
}
```

编译为 CSS
```css
.micro {
    width: 180px;
}
```

`@return` 只允许在 `@function` 内使用，和 `js` 一样，遇到 `return` 就会返回

总结
- `@function` 和 `@mixin` 参数的使用方式没啥区别；
- `@function` 用来计算，`@mixin` 用来封装样式，`@import` 用来抽离他们为一个模块

### @extend继承

以 `elementUI` 的 `el-button` 组件为例，可以使用 `@extend` 继承已经存在的样式，使用逗号选择器。

```scss
// # id选择器一样的
.button {
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    user-select: none;
}

.btn-default {
    @extend .button;
    color: #333;
    background-color: #fff;
    border-color: #ccc;
}

.btn-danger {
    @extend .button;
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
}
```

编译成 css
```css
.button, .btn-danger, .btn-default {
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    user-select: none;
}

.btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
}

.btn-danger {
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
}
```

**占位符选择器**

占位符选择器 `%`，与常用的 `id` 与 `class` 选择器写法相似，只是 `#` 或 `.` 替换成了 `%`，占位符选择器必须通过 `@extend` 指令调用

```scss
.button %base {
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    user-select: none;
}
        
.btn-default {
    @extend %base;
    color: #333;
    background-color: #fff;
    border-color: #ccc;
}

.btn-danger {
    @extend %base;
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
}
```

效果和上面的类选择器一样，但是，他有个有优点，`占位符选择器%` 所属的样式未使用时，不会被编译到 `css` 文件中

```css
.button .btn-danger, .button .btn-default {
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    user-select: none;
}

.btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
}

.btn-danger {
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
}
```

### @use

存在兼容性问题，仅在 Dart Sass 1.23.0 以上有效，[官方文档有兼容性介绍](https://sass-lang.com/install)

`css` 真正意义上的模块化，可以从其它 `scss` 样式表中加载 `mixin`、`function` 和变量，并将来自多个样式表的 `css` 组合在一起。`scss` 还提供了很多内置模块，我们可以通过 `@use` 使用，官方也推荐使用 `@use` 替换 `@import`，后续会废弃 `@import`

**@import缺点**
- 多处导入，存在样式重复加载。
- 没有命名空间，为了避免撞名，不敢使用简写的 `classname`，因此起名总是需要注意。
- 没有私有函数的概念，样式完全暴露在使用 `import` 的地方，这对ui库不够友好

`@use` 使用默认带有命名空间，也可以重命名空间

src/_corners.scss
```scss
$radius: 3px;
@mixin rounded {
    border-radius: $radius;
}
```

index.scss
```scss
@use "src/corners"; // 默认命名空间 corners
// @use "src/corners" as c; // 重命名空间
.button {
    @include corners.rounded;
    padding: 5px + corners.$radius;
    // padding: 5px + c.$radius; // 重命名 c 引用
}
```

`as *`  让模块处于全局命名空间，不需要带上命名空间就可以直接使用

```scss
$radius: 3px;
@mixin rounded {
    border-radius: $radius;
}
```

使用
```scss
@use "src/corners" as *;

.button {
    @include rounded;
    padding: 5px + $radius;
}
```

**私有模块**

变量使用 `-` 开头，`@use` 不会引入这个变量

```scss
$-radius: 3px;

@mixin rounded {
    border-radius: $-radius;
}
```

index.scss
```scss
@use "src/corners";

.button {
    @include corners.rounded;
    // Error: Private members can't be accessed from outside their modules
    padding: 5px + corners.$-radius;
}
```

### @forward

`@forward` 可以看作是转发，在当前模块引入另一个模块的所有变量、`mixins` 和函数，直接向外暴露 API，不会在当前模块增加代码，不同于 `@use`， `@forward` 不能给变量添加命名空间

例如在 `bootstrap.css` 引入 `functions`、`variables`、`mixins` 文件，不能直接在 `bootstrap.scss` 文件中使用这些引入的模块。而是需要在另一个文件中引入 `@use bootstrap` 模块，再去使用这些方法

```scss
/* bootstrap.scss */
@forward"functions";
@forward"variables";
@forward"mixins";
```

`@forward` 通过控制 `show` 和 `hide` 显示或隐藏模块中的某些变量

a.scss
```scss
@mixin rounded {
    border-radius: 100px;
}
footer {
    height: 1px;
}
```

b.scss
```scss
$radius: 3px;

c.scss
```scss
@forward "a" show rounded;
@forward "b" hide $radius;
```

index.scss
```scss
@import "c.scss";

.button {
    @include rounded;
    padding: $radius;
}
// Error: Undefined variable. padding: $radius;
```

### @at-root

`@at-root` 用来跳出嵌套，在多级嵌套时比较常用，包含 `without` 和 `with`

```scss
//没有跳出
.parent-1 {
    color:#f00;
    .child {
        width:100px;
    }
}

//单个选择器跳出
.parent-2 {
    color:#f00;
    @at-root .child {
        width:200px;
    }
}

//多个选择器跳出
.parent-3 {
    background:#f00;
    @at-root {
        .child1 {
            width:300px;
        }
        .child2 {
            width:400px;
        }
    }
}
```

编译为
```css
.parent-1 {
    color: #f00;
}
.parent-1 .child {
    width: 100px;
}

.parent-2 {
    color: #f00;
}
.child {
    width: 200px;
}

.parent-3 {
    background: #f00;
}
.child1 {
    width: 300px;
}

.child2 {
    width: 400px;
}
```

**@without和with**

默认 `@at-root` 只会跳出选择器嵌套，而不能跳出 `@media` 或 `@support`，如果要跳出这两种，则需使用`@at-root (without: media)`或 `@at-root (without: support)`，`@at-root` 的关键词有四个

- `all` 表示所有；
- `rule` 表示常规 `css` 选择器；
- `media` 表示 `media`；
- `support` 表示 `support`（`@support`主要是用于检测浏览器是否支持css的某个属性）

默认的 `@at-root` 是 `@at-root (without:rule)`

```scss
/*跳出父级元素嵌套*/
@media print {
    .parent1{
        color:#f00;
        @at-root .child1 {
            width:200px;
        }
    }
}

/*跳出media嵌套，父级有效*/
@media print {
    .parent2{
        color:#f00;
        @at-root (without: media) {
            .child2 {
                width:200px;
            }
        }
    }
}

/*跳出media和父级*/
@media print {
    .parent3{
        color:#f00;
        @at-root (without: all) {
            .child3 {
                width:200px;
            }
        }
    }
}
```

编译成

```css
/*跳出父级元素嵌套*/
@media print {
    .parent1 {
        color: #f00;
    }
    .child1 {
        width: 200px;
    }
}
/*跳出media嵌套，父级有效*/
@media print {
    .parent2 {
        color: #f00;
    }
}
.parent2 .child2 {
    width: 200px;
}
/*跳出media和父级*/
@media print {
    .parent3 {
        color: #f00;
    }
}
.child3 {
    width: 200px;
}
```

**@at-root与 & 配合使用**

```scss
.child{
    @at-root .parent &{
        color:#f00;
    }
}
```

编译为
```css
.parent .child {
    color: #f00;
}
```

### SCSS 内置拓展

scss内置扩展分为 `color, list, map, math, meta, selector, string` 等，扩展也就是 `scss` 内置的一些 `function`，相当于 `JS` 内置方法

内置函数可以使用 `@use` 模块化引入，也可以直接使用他提供的全局函数名调用，以下两种方式是一样的。
```scss
@use 'sass:list';
p {
    color: nth($list: red blue green, $n: 2); // blue
    color: list.nth($list: red blue green, $n: 2); // blue
}
```

### String 字符串函数

`scss` 有许多处理字符串的函数
- `quote($string)`：向字符串添加引号
```scss
quote(hello) //"hello"
```

- `unquote($string)` 移除字符串的引号
```scss
unquote("hello") //hello
```

- `str-index($string, $substring)` 返回 substring 子字符串第一次在 string 中出现的位置。如果没有匹配到子字符串，则返回 null。区分大小写。
```scss
str-index(abcd, a) // 1 
str-index(abcd, ab) // 1 
str-index(abcd, X) // null
```

- `str-length($string)` 获取字符串长度
```scss
str-length("hello") //5
```

- `string-insert($string, $insert, $index)` 在字符串 string 中 index 位置插入 insert
```scss
str-insert("Hello world!", " xiaoming", 6) //"Hello xiaoming world!"
```


- `str-slice($string, $start-at, $end-at: -1)` 从 string 中截取子字符串，通过 start-at 和 end-at 设置始末位置，未指定结束索引值则默认截取到字符串末尾。和 js 感觉有点相似
```scss
str-slice("abcd", 2, 3)   => "bc" 
str-slice("abcd", 2)      => "bcd" 
str-slice("abcd", -3, -2) => "bc" 
str-slice("abcd", 2, -2)  => "bc"
```

其他
- `to-lower-case(*string*)` 将字符串转成小写
- `to-upper-case(*string*)` 将字符串转成大写
- `unique-id()` 返回一个无引号的随机字符串作为 id

事例代码
```scss
p {
    &:after {
        content: quote(这是里面的内容);
    }
    background-color: unquote($string: "#F00");
    z-index:str-length("scss学习");
}
```
编译结果
```css
p {
    background-color: #F00;
    z-index: 6;
}
p:after {
    content: "这是里面的内容";
}
```

### Math 数学函数

`Math` 数值函数处理数值计算

- `abs(number)` 返回一个数值的绝对值
```scss
abs(13) // 13 
abs(-13) // 13
```

- `comparable(num1, num2)` 返回一个布尔值，判断 *num1* 与 *num2* 是否可以进行比较 ，注意是否可以比较，不是比较的结果
```scss
comparable(15px, 10px) // true 
comparable(20mm, 1cm) // true 
comparable(35px, 2em) // false
```

- `ceil(*number*)` 向上取整
```scss
ceil(13.24) //14
```

- `floor(*number*)` 向下取整
```scss
floor(15.84) // 15
```

- `max(number...` 返回最大值
```scss
max(5, 7, 9, 0, -3, -7) // 9
```

- `min(number...` 返回最小值
```scss
min(7, 2, 0, -2, -7) // -7
```

- `percentage(number)`：将数字转化为百分比的表达形式
```scss
percentage(1.2) // 120
```

- `random()`：返回 0-1 区间内的小数，
```scss
random() // 0.2783
```

- `random(number)`如果传入 number 参数，返回 1 至 number 之间的整数，包括 1 和 limit
```scss
random(10) // 4
```

- `round(number)`：返回最接近该数的一个整数，四舍五入
```scss
round(15.20) // 15 round(15.80) // 16
```

- `div($number1, $number2)` //=> number 返回 `$number2` 除以 `$number1` 结果 

```scss
@debug math.div(1, 2); // 0.5
@debug math.div(100px, 5px); // 20
@debug math.div(100px, 5); // 20px
@debug math.div(100px, 5s); // 20px/s
@debug math.percentage(0.2); // 20%

```

事例代码

```scss
p {
    z-index: abs(-15); // 15
    z-index: ceil(5.8); //6
    z-index: max(5, 1, 6, 8, 3); //8
    opacity: random(); // 随机 0-1
}
```

编译为
```css
p {
    z-index: 15;
    z-index: 6;
    z-index: max(5, 1, 6, 8, 3);
    opacity: 0.8636254167;
}
```

### List 列表函数

`List` 特点
- `List` 函数可以访问列表中的值，向列表添加元素，合并列表等。
- `List` 列表是不可变的，因此在处理列表时，返回的是一个新的列表，而不是在原有的列表上进行修改。
- 列表的起始索引值为 `1`，记住不是 `0`

**List 方法**

- `append(*list*, *value*, [*separator*])` 将单个值 *value* 添加到列表尾部。*separator* 是分隔符，默认会自动侦测，或者指定为逗号或空格，分别用 `comma` 、`space` 表示
```scss
append((a b c), d) // a b c d 
append((a b c), (d), comma) // a, b, c, d
```

- `index(list, value)` 返回元素 *value* 在列表中的索引位置
```scss
index(a b c, b) // 2 
index(a b c, f) // null
```

- `is-bracketed(list)` 判断列表中是否有中括号
```scss
is-bracketed([a b c]) // true 
is-bracketed(a b c) // false
```

- `list-separator(list)` 返回一列表的分隔符类型。可以是空格或逗号
```scss
list-separator(a b c) // "space"
list-separator(a, b, c) // "comma"
```

- `join(list1, list2, [separator, bracketed])` 合并两列表，将列表 *list2* 添加到列表 *list1* 的末尾。*separator* 是分隔符，默认会自动侦测，或者指定为逗号或空格。*bracketed* 默认会自动侦测是否有中括号，可以设置为 true 或 false
```scss
join(a b c, d e f) // a b c d e f 
join((a b c), (d e f), comma) // a, b, c, d, e, f 
join(a b c, d e f, $bracketed: true) // [a b c d e f]
```

- `length($list)` 返回列表长度
```scss
length(a b c) // 3
```

- `set-nth(list, n, value)` 设置列表第 *n* 项的值为 *value*。
```scss
set-nth(a b c, 2, x) // a x c
```

- `nth($list, $n)` 获取第 *n* 项的值
```scss
nth(a b c, 3) // c
```

- `zip(lists)` 将多个列表按照以相同索引值为一组，重新组成一个新的多维度列表，非常好用
```scss
zip(1px 2px 3px, solid dashed dotted, red green blue) 
// 1px solid red, 2px dashed green, 3px dotted blue
```

事例代码
```scss
p {
    z-index: length(12px); //1
    z-index: length(12px 5px 8px); //3
    z-index: index(a b c d, c); //3
    padding: append(10px 20px, 30px); // 10px 20px 30px
    color: nth($list: red blue green, $n: 2); // blue
    @debug list.zip(10px 50px 100px, short mid long); // 10px short, 50px mid, 100px long
}
```

编译结果

```
p {
    z-index: 1;
    z-index: 3;
    z-index: 3;
    padding: 10px 20px 30px;
    color: blue;
}
```

### Map(映射) 函数

[Sass Map](https://sass-lang.com/documentation/modules/map)  是不可变的，因此在处理 Map 对象时，返回的是一个新的 Map 对象，而不是在原有的 Map 对象上进行修改。

Map(映射)对象是以一对或多对的 `key/value` 来表示

- `map-get(map, key)` 返回 Map 中 *key* 所对应的 value(值)。如没有对应的 key，则返回 null 值

```scss
$font-sizes: ("small": 12px, "normal": 18px, "large": 24px) 
map-get($font-sizes, "small") // 12px
```

- `map-has-key(map, key)` 判断 *map* 是否有对应的 *key*，存在返回 true，否则返回 false

```scss
$font-sizes: ("small": 12px, "normal": 18px, "large": 24px) 
map-has-key($font-sizes, "big") // false
```

- `map-keys(map)` 返回 *map* 中所有的 key 组成的队列
```scss
$font-sizes: ("small": 12px, "normal": 18px, "large": 24px) 
map-keys($font-sizes) // "small", "normal, "large"
```

- `map-values(map)` 返回 *map* 中所有的 value 并生成一个队列

```scss
$font-sizes: ("small": 12px, "normal": 18px, "large": 24px) 
map-values($font-sizes) // 12px, 18px, 24px
```

- `map-merge(map1, map2)` 合并两个 map 形成一个新的 map 类型，即将 *map2* 添加到 *map1*的尾部

```scss
$font-sizes: ("small": 12px, "normal": 18px, "large": 24px) 
$font-sizes2: ("x-large": 30px, "xx-large": 36px)

map-merge($font-sizes, $font-sizes2) 
//"small": 12px, "normal": 18px, "large": 24px, "x-large": 30px, "xx-large": 36px
```

- `map.deep-merge($map1, $map2)` 将两个嵌套 `map` 深度合并
```scss
$helvetica-light: (
  "weights": (
    "lightest": 100,
    "light": 300
  )
);
$helvetica-heavy: (
  "weights": (
    "medium": 500,
    "bold": 700
  )
);

@debug map.deep-merge($helvetica-light, $helvetica-heavy);
// (
//   "weights": (
//     "lightest": 100,
//     "light": 300,
//     "medium": 500,
//     "bold": 700
//   )
// )
@debug map.merge($helvetica-light, $helvetica-heavy);
// (
//   "weights": (
//     "medium: 500,
//     "bold": 700
//   )
// )
```

- `map-remove(map, keys... )`移除 *map* 中的 keys，多个 key 使用逗号隔开

```scss
$font-sizes: ("small": 12px, "normal": 18px, "large": 24px) 
map-remove($font-sizes, "small") // ("normal": 18px, "large": 24px) 
map-remove($font-sizes, "small", "large") // ("normal": 18px)
```

- `map.deep-remove($map, $key, $keys...)` 多层嵌套删除，删除层级根据参数个数
```scss
$fonts: (
  "Helvetica": (
    "weights": (
      "regular": 400,
      "medium": 500,
      "bold": 700
    )
  )
);

@debug map.deep-remove($fonts, "Helvetica", "weights", "regular");
// (
//   "Helvetica": (
//     "weights: (
//       "medium": 500,
//       "bold": 700
//     )
//   )
// )
```


- `map.set($map, $keys..., $value)`  添加 `key` 和 `value` 值，第一个是 `map`，最后一个是 `value`，中间是 `key`，嵌套传入多个 `key...`
```scss
$fonts: (
  "Helvetica": (
    "weights": (
      "regular": 400,
      "medium": 500,
      "bold": 700
    )
  )
);

@debug map.set($fonts, "Helvetica", "weights", "regular", 300);
// (
//   "Helvetica": (
//     "weights": (
//       "regular": 300,
//       "medium": 500,
//       "bold": 700
//     )
//   )
// )
```


事例代码
```SCSS
@use 'sass:map';

// 创建Map，类似于对象
$map: (
  key: value,
  nextkey: nextvalue
);

// 使用
.element:before {
  content: map-get($map, key);
}
```

上面编译输出后的结果如下：

```CSS
.element:before {
  content: value
}
```


`Map` 在 `@each` 应用

```SCSS
/* 定义一个sass map名称为$icons */
$icons: (
  checkmark: a,
  plus: b,
  minus: c
);

/* 遍历map的所有key，创建各自的类 */
@each $name, $value in $icons {
  .icon--#{$name} {
    content: $value;
  }
}

```

编译结果

```CSS

/* 遍历map的所有key，创建各自的类 */
.icon--checkmark {
  content: "a";
}

.icon--plus {
  content: "b";
}

.icon--minus {
  content: "c";
}
```

`@each` 遍历嵌套 map 多个值
 
- 给 `map` 一个 `key` 赋予多个 `value`（相当于数组），多个 `value` 之间通过逗号 `,` 来分割
- 定义一系列 `buttons` ，每一个 `key` 的第一个 `value` 是`background-color`，第二个 `value` 是 `font-color`。
- 遍历 `$buttons` 赋值给 `$colors` 对象。通过 `nth($colors,1)`（第一个参数是对象的名称，第二个参数是值得位置）拿到第一个`key`。如果需要拿第二个`value`，那将第二个参数改为 2。

```SCSS
// _m-buttons.scss
$buttons: (
  error: (#d82d2d, #666),
  success: (#52bf4a, #fff),
  warning: (#c23435, #fff)
);

.m-button {
  display: inling-block;
  padding: .5em;
  background: #ccc;
  color: #666;

  @each $name, $colors in $buttons {
    $bgcolor: nth($colors, 1);
    $fontcolor: nth($colors, 2);

    &--#{$name} {
      background-color: $bgcolor;
      color: $fontcolor;
    }
  }
}
```

编译结果

```CSS
.m-button {
  display: inline-block;
  padding: .5em;
  background: #ccc;
  color: #666;
}

.m-button--error {
  background-color: #d82d2d;
  color: #666;
}

.m-button--success {
  background-color: #52bf4a;
  color: #fff;
}

.m-button--warning {
  background-color: #c23435;
  color: #fff;
}
```

### selector 选择器函数

`selector` 相关函数可对选择 `css` 进行一些相应的操作

- `is-superselector(super, sub)` 比较两个选择器匹配的范围，即判断 *super* 选择器是否包含了 *sub* 选择器所匹配的范围，是的话返回 `true`，否则返回 `false`
```scss
is-superselector("div", "div.myInput") // true 
is-superselector("div.myInput", "div") // false 
is-superselector("div", "div") // true
```

- `selector-append(selectors)` 将第二个 (也可以有多个) 添加到第一个选择器的后面。 
```scss
selector-append("div", ".myInput") // div.myInput 
selector-append(".warning", "__a") 结果: .warning__a
```

- `selector-nest(selectors)` 回一个新的选择器，该选择器通过提供的列表选择器生成一个嵌套的列表
```scss
selector-nest("ul", "li") // ul li 
selector-nest(".warning", "alert", "div") // .warning div, alert div
```

- `selector-parse(selector)` 将字符串的选择符 *selector* 转换成选择器队列。

```scss
selector-parse("h1 .myInput .warning") // ('h1' '.myInput' '.warning')
```

- `selector-replace(selector, original, replacement)` 给定一个选择器，用 `replacement` 替换 `original` 后返回一个新的选择器队列
```scss
selector-replace("p.warning", "p", "div") // div.warning
```

- `selector-unify(selector1, selector2)` 将两组选择器合成一个复合选择器。如两个选择器无法合成，则返回 null 值。

```scss
selector-unify("myInput", ".disabled") // myInput.disabled 
selector-unify("p", "h1") // null
```

- `simple-selectors(selectors) 将合成选择器拆为单个选择器
```scss
simple-selectors("div.myInput") // div, .myInput 
simple-selectors("div.myInput:before") // div, .myInput, :before
```

事例代码
```scss
@use 'sass:selector';

@debug selector.is-superselector("a", "a"); // true

// 可以直接使用@forward下的前缀
@debug selector-append("a", ".disabled"); // a.disabled
@debug selector-extend("a.disabled", "a", ".link"); // a.disabled, .link.disabled

.header {
    content: selector-append(".a", ".b", ".c") + '';
    content: selector-unify("a", ".disabled") + '';
}
```

### meta

`meta` 提供一个 `mixin` 和一些原子级别的 `function`
- `meta.calc-args`获取方法的参数
- `meta.calc-name`获取方法名

**meta.load-css**

`meta.load-css($url，$with:())` 把`$url`中`css`样式全部包含进来。注意，`$url`引入的函数，变量和`mixin`在 `meta.load-css()`后的`scss`中并不能用，它只会返回编译后的`css`代码。它的第二个参数可以修改使用了`!default`的变量

src/corners
```scss
$border-contrast: false !default;

code {
    background-color: #6b717f;
    color: #d2e1dd;
    @if $border-contrast {
        border-color: #dadbdf;
    }
}
```

index.scss
```scss
@use "sass:meta";

body.dark {
    @include meta.load-css("src/corners", $with: ("border-contrast": true));
}
```

编译为
```css
body.dark code {
    background-color: #6b717f;
    color: #d2e1dd;
    border-color: #dadbdf;
}
```

相关 `function`

```scss
@use "sass:meta";

@debug meta.calc-args(calc(100px + 10%)); // unquote("100px + 10%")
@debug meta.calc-args(clamp(50px, var(--width), 1000px)); // 50px, unquote("var(--width)"), 1000px

@debug meta.calc-name(calc(100px + 10%)); // "calc"
@debug meta.calc-name(clamp(50px, var(--width), 1000px)); // "clamp"
```

### color 颜色函数

scss包含很多操作颜色的函数。

- `rgb(red, green, blue)` 创建一个 `Red-Green-Blue (RGB)` 色。其中 `R` 是 "red" 表示红色，`G` 是 "green" 绿色，`B` 是 "blue" 蓝色
```scss
rgb(0, 255, 255);
```

- `rgba(red, green, blue, alpha)` 根据红、绿、蓝和 **透明度值** 创建一个颜色
```scss
rgba(0, 255, 255, 0.3);
```

- `hsl(hue, saturation, lightness)` 通过色相（hue）、饱和度(saturation)和亮度（lightness）的值创建一个颜色
```scss
hsl(120, 100%, 50%); // 绿色 
hsl(120, 100%, 75%); // 浅绿色 
hsl(120, 100%, 25%); // dark green 
hsl(120, 60%, 70%); // 柔和的绿色 
```

- `hsla(hue, saturation, lightness, alpha)` 通过色相（hue）、饱和度(saturation)、亮度（lightness）和 **透明(alpha)** 的值创建一个颜色
```scss
hsl(120, 100%, 50%, 0.3); // 绿色带有透明度 
hsl(120, 100%, 75%, 0.3); // 浅绿色带有透明度
```

- `grayscale(color)` 将一个颜色变成灰色，相当于 `desaturate( color,100%)`
```scss
grayscale(#7fffd4); // #c6c6c6
```

- `complement(color)` 返回一个补充色，相当于 `adjust-hue($color,180deg)`
```scss
complement(#7fffd4); // #ff7faa
```

- `invert(*color*, weight)` 返回一个反相色，红、绿、蓝色值倒过来，而透明度不变
```scss
invert(white); // black
```

- `red(color)` 从一个颜色中获取其中红色值（0-255），可用于取出某个 `hex` 颜色中的红色值
```scss
red(#7fffd4); // 127 
red(red); // 255
```

- `green(color)` 从一个颜色中获取其中绿色值（0-255）
```scss
green(#7fffd4); // 255 
green(blue); // 0
```

- `blue(color)` 从一个颜色中获取其中蓝色值（0-255）
```scss
blue(#7fffd4); // 212 
blue(blue); // 255
```

- `hue(color)` 返回颜色在 `HSL` 色值中的角度值 (0deg - 255deg)
```scss
hue(#7fffd4); // 160deg
```

- `saturation(color)` 获取一个颜色的饱和度值(0% - 100%)
```scss
saturation(#7fffd4); // 100%
```

- `lightness(color)` 获取一个颜色的亮度值(0% - 100%)
```scss
lightness(#7fffd4); // 74.9%
```

- `alpha(color)` 返回颜色的 `alpha`，返回值为 `0` 或 `1`
```scss
alpha(#7fffd4); // 1
```

- `opacity(color)` 获取颜色透明度值(0-1)
```scss
opacity(rgba(127, 255, 212, 0.5); // 0.5
```

- `mix(color1, color2, weight)` 把两种颜色混合起来。

*weight* 参数必须是 0% 到 100%。默认 weight 为 50%，表明颜色各取 50% color1 和 color2 的色值相加。如果 weight 为 25%，那表明颜色为 25% color1 和 75% color2 的色值相加

- `adjust-hue(color, degrees)` 通过改变一个颜色的色相值（-360deg - 360deg），创建一个新的颜色
```scss
adjust-hue(#7fffd4, 80deg); // #8080ff
```

- `lighten(color, amount)` 通过改变颜色的亮度值（0% - 100%），让颜色变亮，创建一个新的颜色
- `darken(color, amount)` 通过改变颜色的亮度值（0% - 100%），让颜色变暗，创建一个新的颜色
- `saturate(color, amount)` 提高传入颜色的色彩饱和度。等同于 `adjust-color( color, saturation: amount)`

- `desaturate(color, amount)` 调低一个颜色的饱和度后产生一个新的色值。同样，饱和度的取值区间在 0% ~ 100%。等同于 `adjust-color(color, saturation: -amount)`
- `opacify(color, amount)` 降低颜色的透明度，取值在 0-1 之。等价于 `adjust-color(color, alpha: amount)`

- `fade-in(color, amount)`降低颜色的透明度，取值在 0-1 之。等价于 `adjust-color(color, alpha: amount)`
- `transparentize(color, amount)` 提升颜色的透明度，取值在 0-1 之间。等价于 `adjust-color(color, alpha: -amount)`

- `fade-out(color, amount)` 提升颜色的透明度，取值在 0-1 之间。等价于 `adjust-color(color, alpha: -amount)`


事例代码
```scss
.p1 {
    // 让颜色变亮
    color:scale-color(#5c7a29, $lightness: +30%);
}

.p2 {
    // 让颜色变暗
    color:scale-color(#5c7a29, $lightness: -15%);
}

.p3 {
    // 降低颜色透明度
    color:scale-color(#5c7a29, $alpha: -40%);
}

```

编译为

```css
.p1 {
    color: #95c249;
}

.p2 {
    color: #4e6823;
}

.p3 {
    color: rgba(92, 122, 41, 0.6);
}
```

### 调试相关

**@debug**

`@debug` 打印表达式的值，方便调试。
```
$font-sizes: 10px + 20px;
    $style: (
        color: #bdc3c7
    );
.container {
    @debug $style;
    @debug $font-sizes;
}
```

输出结果
```css
Debug：(color: #bdc3c7)
Debug：30px
```

**@error**

`@error` 显示错误信息

```scss
@mixin reflexive-position($property, $value) {
  @if $property != left and $property != right {
    @error "Property #{$property} must be either left or right.";
  }

  $left-value: if($property == right, initial, $value);
  $right-value: if($property == right, $value, initial);

  left: $left-value;
  right: $right-value;
  [dir=rtl] & {
    left: $right-value;
    right: $left-value;
  }
}

.sidebar {
  @include reflexive-position(top, 12px);
  //       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // Error: Property top must be either left or right.
}
```

输出结果
```scss
Error: "Property top must be either left or right."
  ╷
3 │     @error "Property #{$property} must be either left or right.";
  │     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ╵
  example.scss 3:5   reflexive-position()
  example.scss 19:3  root stylesheet

```

**@warn**

`@warn`显示警告性建议，会显示堆栈信息。

```scss
$known-prefixes: webkit, moz, ms, o;

@mixin prefix($property, $value, $prefixes) {
  @each $prefix in $prefixes {
    @if not index($known-prefixes, $prefix) {
      @warn "Unknown prefix #{$prefix}.";
    }

    -#{$prefix}-#{$property}: $value;
  }
  #{$property}: $value;
}

.tilt {
  // Oops, we typo'd "webkit" as "wekbit"!
  @include prefix(transform, rotate(15deg), wekbit ms);
}
```
显示警告信息
```scss
Warning: Unknown prefix wekbit.
    example.scss 6:7   prefix()
    example.scss 16:3  root stylesheet
```
