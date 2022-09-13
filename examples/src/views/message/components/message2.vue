<template>
  <div>
    <h2>不同状态</h2>
    <h4>用来显示「成功、警告、消息、错误」类的操作反馈。</h4>
    <el-button :plain="true" @click="open2">成功</el-button>
    <el-button :plain="true" @click="open3">警告</el-button>
    <el-button :plain="true" @click="open1">消息</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$dlMessage('这是一条消息提示')
    },
    open2() {
      this.$dlMessage({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },

    open3() {
      this.$dlMessage({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      })
    },

    open4() {
      this.$dlMessage.error('错了哦，这是一条错误消息')
    }
  }
}
</script>
