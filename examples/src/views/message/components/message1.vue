<template>
  <div>
    <h2>基础用法</h2>
    <h4>从顶部出现，3 秒后自动消失。</h4>
    <el-button :plain="true" @click="open">打开消息提示</el-button>
    <el-button :plain="true" @click="openVn">VNode</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$dlMessage('这是一条消息提示')
    },

    openVn() {
      const h = this.$createElement
      this.$dlMessage({
        message: h('p', null, [h('span', null, '内容可以是 '), h('i', { style: 'color: teal' }, 'VNode')])
      })
    }
  }
}
</script>
