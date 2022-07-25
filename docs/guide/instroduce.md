### 基础用法

包含标题，内容和操作。

<source-block>
  <template slot="comp">
    <card-demo1/>
  </template>

  <template slot="code"> 
  
Card 组件包括`header`和`body`部分，`header`部分需要有显式具名 slot 分发，同时也是可选的。

<<< @/docs/.vuepress/components/card/demo1.vue

  </template>
</source-block>

### 简单卡片

卡片可以只有内容区域。

<source-block>
  <template slot="comp">
    <card-demo2/>
  </template>

  <template slot="code">

<<< @/docs/.vuepress/components/card/demo2.vue

  </template>
</source-block>

### 带图片

可配置定义更丰富的内容展示。

<source-block>
  <template slot="comp">
    <card-demo3 />
  </template>

  <template slot="code">

配置`body-style`属性来自定义`body`部分的`style`，我们还使用了布局组件。

<<< @/docs/.vuepress/components/card/demo3.vue

  </template>
</source-block>

### 卡片阴影

可对阴影的显示进行配置。

<source-block>
  <template slot="comp">
    <card-demo4 />
  </template>

  <template slot="code">

通过`shadow`属性设置卡片阴影出现的时机：`always`、`hover`或`never`。

<<< @/docs/.vuepress/components/card/demo4.vue

  </template>
</source-block>

### Attributes

| 参数       | 说明                                           | 类型   | 可选值                 | 默认值              |
| ---------- | ---------------------------------------------- | ------ | ---------------------- | ------------------- |
| header     | 设置 header，也可以通过 `slot#header` 传入 DOM | string | —                      | —                   |
| body-style | 设置 body 的样式                               | object | —                      | { padding: '20px' } |
| shadow     | 设置阴影显示时机                               | string | always / hover / never | always              |
