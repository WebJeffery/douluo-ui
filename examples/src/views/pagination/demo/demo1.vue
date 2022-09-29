<template>
  <div class="demo-pagination">
    <h2>基础用法</h2>

    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <dl-pagination layout="prev, pager, next" :total="50" />
    </div>
    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <dl-pagination layout="prev, pager, next" :total="1000" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">

</style>
