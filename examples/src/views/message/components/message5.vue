<template>
  <div>
    <h2>使用 HTML 片段</h2>
    <h4>message属性支持传入 HTML 片段</h4>
    <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    openHTML() {
      this.$dlMessage({
        dangerouslyUseHTMLString: true,
        message: '<strong>这是 <i>HTML</i> 片段</strong>'
      })
    }
  }
}
</script>
