<template>
  <el-date-picker
    ref="datePicker"
    v-bind="$attrs"
    :type="type"
    :align="align"
    unlink-panels
    :range-separator="rangeSeparator"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :picker-options="pickerOptions"
    v-on="$listeners"
    :class="[bemNS.b()]"
  >
    <template #range-separator>
      <slot name="range-separator"></slot>
    </template>
  </el-date-picker>
</template>

<script>
export default {
  name: 'DatePicker',
  inheritAttrs: false,
  props: {
    // 选择器对齐方式
    align: {
      type: String,
      default: 'right'
    },
    // 当前时间日期选择器特有的选项参考下表
    pickerOptions: {
      type: Object,
      default: null
    },
    // 分隔符
    rangeSeparator: {
      type: String,
      default: '至'
    },
    // 开始日期
    startPlaceholder: {
      type: String,
      default: '开始日期'
    },
    // 结束日期
    endPlaceholder: {
      type: String,
      default: '结束日期'
    },
    // 显示类型
    type: {
      type: String,
      default: 'daterange'
    }
  },

  computed: {
    bemNS () {
      return this.$dlUseNamespace('date-picker')
    }
  }
}
</script>
