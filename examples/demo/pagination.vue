```vue
<template>
  <div>
    <h2>NwPagination</h2>
    <h3 class="pb10">分页</h3>
    <!-- 支持sync -->
    <NwPagination
      :page.sync="page"
      :pageSize.sync="pageSize"
      :total="total"
      @pageChange="pageChange"
    />
    <ShowMark v-model="readmeTxt" />
  </div>
</template>
<script>
import readmeTxt from 'packages/element-ui/pagination/src/README.md'

export default {
  data() {
    return {
      readmeTxt,
      pageSize: 10,
      page: 1,
      total: 50
    }
  },
  methods: {
    pageChange() {
      console.log(this.page)
      console.log(this.pageSize)
    }
  }
}
</script>
