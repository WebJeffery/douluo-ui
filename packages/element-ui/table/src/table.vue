<template>
  <div :class="[bemNS.b(), bemNS.is('border', border)]">
    <el-table
      ref="elTable"
      v-bind="$attrs"
      v-on="$listeners"
      :data="data"
      :span-method="this.merge ? this.mergeMethod : this.spanMethod"
    >
      <slot v-if="$slots.default"></slot>
      <template v-if="column.length">
        <dl-column v-bind="$attrs" v-for="(item, index) in column" :key="index" :align="align" :column="item" />
      </template>
      <!--操作按钮-->
      <el-table-column
        v-if="$scopedSlots.options || $slots.options"
        :fixed="data.length ? 'right' : ''"
        :label="optionsLabel"
        :align="align"
        min-width="100">
          <template slot-scope="scope">
              <slot name="options" v-bind="scope"></slot>
          </template>
      </el-table-column>
      <template #empty>
        <slot name="empty">
          <dl-empty />
        </slot>
      </template>
    </el-table>
    <dl-pagination v-if="pagination" :class="bemNS.e('pagination')" v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import DlColumn from './column.vue'

export default {
  name: 'Table',
  components: {
    DlColumn
  },
  props: {
    column: {
      type: Array,
      default: () => []
    },
    data: Array,
    spanMethod: Function,
    border: {
      type: Boolean,
      default: false
    },
    pagination: {
      type: Boolean,
      default: false
    },
    paginationTop: {
      type: String,
      default: '15px'
    },
    paginationAlign: {
      type: String,
      default: 'right'
    },
    align: {
      type: String,
      default: 'center'
    },
    optionsLabel: {
      type: String,
      default: '操作'
    },
    merge: Array
  },
  data() {
    return {
      mergeLine: {},
      mergeIndex: {}
    }
  },
  computed: {
    bemNS() {
      return this.$dlUseNamespace('table')
    },
    dataLength() {
      return this.data.length
    }
  },
  watch: {
    merge() {
      this.getMergeArr(this.data, this.merge)
    },
    dataLength() {
      this.getMergeArr(this.data, this.merge)
    }
  },
  created() {
    this.getMergeArr(this.data, this.merge)
  },
  methods: {
    clearSelection() {
      this.$refs.elTable.clearSelection()
    },
    toggleRowSelection(row, selected) {
      this.$refs.elTable.toggleRowSelection(row, selected)
    },
    toggleAllSelection() {
      this.$refs.elTable.toggleAllSelection()
    },
    toggleRowExpansion(row, expanded) {
      this.$refs.elTable.toggleRowExpansion(row, expanded)
    },
    setCurrentRow(row) {
      this.$refs.elTable.setCurrentRow(row)
    },
    clearSort() {
      this.$refs.elTable.clearSort()
    },
    clearFilter(columnKey) {
      this.$refs.elTable.clearFilter(columnKey)
    },
    doLayout() {
      this.$refs.elTable.doLayout()
    },
    sort(prop, order) {
      this.$refs.elTable.sort(prop, order)
    },
    getMergeArr(tableData, merge) {
      if (!merge) return
      this.mergeLine = {}
      this.mergeIndex = {}
      merge.forEach((item, k) => {
        tableData.forEach((data, i) => {
          if (i === 0) {
            this.mergeIndex[item] = this.mergeIndex[item] || []
            this.mergeIndex[item].push(1)
            this.mergeLine[item] = 0
          } else {
            if (data[item] === tableData[i - 1][item]) {
              this.mergeIndex[item][this.mergeLine[item]] += 1
              this.mergeIndex[item].push(0)
            } else {
              this.mergeIndex[item].push(1)
              this.mergeLine[item] = i
            }
          }
        })
      })
    },
    mergeMethod({ row, column, rowIndex, columnIndex }) {
      const index = this.merge.indexOf(column.property)
      if (index > -1) {
        const _row = this.mergeIndex[this.merge[index]][rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    }
  }
}
</script>
