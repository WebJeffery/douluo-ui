<template>
  <div id="app">
    <el-card>
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button type="primary" size="mini">test-btn</el-button>
      </div>
      <div v-for="o in 4" :key="o">
        {{ '列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
