<template>
  <div :class="ns.b()">
    <el-pagination
      v-bind="$attrs"
      :total="total"
      :current-page="page"
      :page-size="pageSize"
      :background="background"
      :layout="layout"
      v-on="$listeners"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { useNamespace } from 'src/utils/use-namespace.js'
export default {
  name: 'Pagination',
  inheritAttrs: false,

  props: {
    page: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    background: {
      type: Boolean,
      default: true
    },
    layout: {
      type: String,
      default: 'total, prev, pager, next'
    }
  },

  data() {
    this.ns = useNamespace('pagination')
    return {}
  },

  methods: {
    handleCurrentChange(val) {
      this.$emit('update:page', val)
      this.$emit('current-change', val)
      this.$emit('pageChange', {
        page: val,
        pageSize: this.pageSize
      })
    },
    handleSizeChange(val) {
      this.$emit('update:pageSize', val)
      this.$emit('size-change', val)
      this.$emit('pageChange', {
        page: this.page,
        pageSize: val
      })
    }
  }
}
</script>
