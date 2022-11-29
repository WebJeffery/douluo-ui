---
title: Tag 标签
pageClass: demo-tag
icon: new
---

# Tag 标签
### 基础用法

基础的标签用法。

:::demo 使用`success`、`warning`、`error`属性来定义标签的状态。

```html
<el-row>
  <dl-tag>我是标签</dl-tag>
</el-row>

<el-row>
  <dl-tag type="success">成功标签</dl-tag>
  <dl-tag type="warning">等待中标签</dl-tag>
  <dl-tag type="error">失败标签</dl-tag>
</el-row>
```
:::

### 禁用状态

标签不可用状态。

:::demo 你可以使用`disabled`属性来定义标签是否可用，它接受一个`Boolean`值。

```html
<el-row>
  <dl-tag disabled>禁用标签</dl-tag>
</el-row>

<el-row>
  <dl-tag type="success" disabled>成功标签</dl-tag>
  <dl-tag type="warning" disabled>等待中标签</dl-tag>
  <dl-tag type="error" disabled>失败标签</dl-tag>
</el-row>
```
:::

### 可移除标签

:::demo 你可以使用`closable`属性来定义按钮是否可移除，它接受一个`Boolean`值。

```html
<el-row>
  <dl-tag closable>可移除标签</dl-tag>
</el-row>

<el-row>
  <dl-tag type="success" closable>成功标签</dl-tag>
  <dl-tag type="warning" closable>等待中标签</dl-tag>
  <dl-tag type="error" closable>失败标签</dl-tag>
</el-row>
```
:::

### 可移除标签禁用状态

:::demo 你可以使用`closable`属性来定义按钮是否可移除，它接受一个`Boolean`值。<br/>你可以使用`disabled`属性来定义标签是否可用，它接受一个`Boolean`值。

```html
<el-row>
  <dl-tag closable disabled>可移除标签</dl-tag>
</el-row>

<el-row>
  <dl-tag type="success" closable disabled>成功标签</dl-tag>
  <dl-tag type="warning" closable disabled>等待中标签</dl-tag>
  <dl-tag type="error" closable disabled>失败标签</dl-tag>
</el-row>
```
:::

### 可编辑标签

:::demo 提供插槽，可以自定义业务类型，默认为添加标签。

```html
<el-row>
  <dl-tag-group title="添加标签" :tagList="tagList" @close='close' @click='addClick'/>
</el-row>
<el-row>
  <dl-tag-group  :tagList="['黄金糕', '双皮奶', '蚵仔煎']" >
    <dl-select v-model="value" placeholder="请选择"  :options="options"></dl-select>
  </dl-tag-group>
</el-row>

<script>
  export default {
    data() {
      return {
        tagList:['标签1', '标签2', '标签3'],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    methods: {
      // 添加标签
      addClick(){
        console.log('click')
      },
      // 删除标签
      close(index){
        console.log(index)
      }
    }
  }
</script>
```
:::

### 可编辑标签禁用状态

:::demo 你可以使用`disabled`属性来定义按钮是否可禁用，它接受一个`Boolean`值。

```html
<el-row>
  <dl-tag-group title="添加标签" disabled :tagList="tagList" />
</el-row>


<script>
  export default {
    data() {
      return {
        tagList:['标签1', '标签2', '标签3']
      }
    }
  }
</script>
```
:::

### Tag Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 类型 | string  | primary / success / warning / error | primary |
| disabled | 是否禁用 | boolean | — | false |
| closable | 是否可以移除 | boolean | — | false |
| title | 添加属性按钮文本 | string | — | — |
| tagList | 标签数据数组 | array | — | [] |

### Tag-Group Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| click | 点击添加标签按钮触发 | - |
| close | 点击删除标签触发 | (index: number,event: Event) |

### Tag-Group Slots
|   name  | 说明     |
|---------|---------|
|    —    | 添加标签按钮 |
