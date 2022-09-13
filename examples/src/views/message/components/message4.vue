<template>
  <div>
    <h2>文字居中</h2>
    <h4>使用 center 属性让文字水平居中。</h4>
    <el-button :plain="true" @click="openCenter">文字居中</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    openCenter() {
      this.$dlMessage({
        message: '居中的文字',
        center: true
      })
    }
  }
}
</script>
