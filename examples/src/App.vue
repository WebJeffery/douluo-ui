<template>
  <div>
    <router-view />
  </div>
</template>


<script>
export default {
  mounted () {
    // document.documentElement 是全局变量时
    // const el = document.documentElement
    // const el = document.getElementById('xxx')

    // 获取 css 变量
    // getComputedStyle(el).getPropertyValue(`--dl-color-primary`)

    // 设置 css 变量
    // el.style.setProperty('--color-primary', 'red')
  }
}
</script>

<style lagn="scss">
.el-row {
  margin-bottom: 20px;
}
.el-button-group {
  margin-right: 20px;
}
</style>
