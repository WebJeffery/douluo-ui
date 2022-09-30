<template>
  <div>
    <h1> Pagination 分页组件</h1>
    <demo1 />
  </div>
</template>

<script>
import demo1 from './demo/demo1.vue'
export default {
  name: 'pagination',

  components: {
    demo1
  }
}
</script>

<style lang="scss">
  .demo-pagination {
    .block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
  }
</style>
