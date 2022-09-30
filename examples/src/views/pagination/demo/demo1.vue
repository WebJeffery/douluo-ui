<template>
  <div class="demo-pagination">
    <h2>基础用法</h2>

    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <dl-pagination :background="false" layout="prev, pager, next" :total="50" />
    </div>
    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <dl-pagination :background="false" layout="prev, pager, next" :total="1000" />
    </div>

    <h2>设置最大页码按钮数</h2>
    <dl-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000" />

    <h2>带有背景色的分页</h2>
    <dl-pagination background layout="prev, pager, next" :total="1000" />

    <h2>小型分页</h2>
    <dl-pagination small layout="prev, pager, next" :total="50" />

    <h2>附加功能</h2>
    <div class="block">
      <span class="demonstration">显示总数</span>
      <dl-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
      />
    </div>
    <div class="block">
      <span class="demonstration">调整每页显示条数</span>
      <dl-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage2"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="sizes, prev, pager, next"
        :total="1000"
      />
    </div>
    <div class="block">
      <span class="demonstration">直接前往</span>
      <dl-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
      />
    </div>
    <div class="block">
      <span class="demonstration">完整功能</span>
      <dl-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      />
    </div>
    <h2>当只有一页时隐藏分页</h2>
    <el-switch v-model="value" />
    <dl-pagination :hide-on-single-page="value" :total="5" layout="prev, pager, next" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      currentPage4: 1,
      value: false
    }
  },

  methods: {
    handleSizeChange(...args) {
      console.log('handleSizeChange', args)
    },
    handleCurrentChange(...args) {
      console.log('handleCurrentChange', args)
    }
  }
}
</script>

<style lang="scss"></style>
