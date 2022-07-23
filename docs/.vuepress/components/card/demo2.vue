<template slot="comp">
  <el-card class="box-card">
    <div v-for="o in 4" :key="o" class="text item">{{ '列表内容 ' + o }}</div>
  </el-card>
</template>
<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>
