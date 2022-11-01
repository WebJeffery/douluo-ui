---
title: Icon 图标
pageClass: demo-icon
icon: new
---

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `el-icon-iconName` 来使用即可。例如：

:::demo
```html
<dl-icon name="el-icon-edit" />
<dl-icon name="el-icon-share" />
<dl-icon name="el-icon-delete" />
<dl-button type="primary" icon="el-icon-delete">搜索</dl-button>

```
:::

### 组件库图标集合


<ul class="icon-list">
  <li v-for="name in $dlIcons" :key="name">
    <span>
      <dl-icon :name="'dl-icon-' + name"/>
      <span class="icon-name">{{'el-icon-' + name}}</span>
    </span>
  </li>
</ul>


### element-ui 图标集合



<ul class="icon-list">
  <li v-for="name in $elIcons" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      <span class="icon-name">{{'el-icon-' + name}}</span>
    </span>
  </li>
</ul>

