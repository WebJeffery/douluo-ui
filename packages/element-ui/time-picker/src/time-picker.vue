<template>
  <el-time-select
    v-if="isFixedTime"
    ref="timePicker"
    v-bind="$attrs"
    :align="align"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :picker-options="pickerOptions"
    v-on="$listeners"
    :class="[ns.b()]"
  />
  <el-time-picker
    v-else
    ref="timePicker"
    v-bind="$attrs"
    :align="align"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :picker-options="pickerOptions"
    v-on="$listeners"
    :class="[ns.b()]"
  />
</template>

<script>
import { useNamespace } from 'src/utils/use-namespace.js'
export default {
  name: 'TimePicker',
  inheritAttrs: false,
  props: {
    // 是否为固定时间点
    isFixedTime: {
      type: Boolean,
      default: false
    },
    // 选择器对齐方式
    align: {
      type: String,
      default: 'right'
    },
    // 当前时间选择器特有的选项
    pickerOptions: {
      type: Object,
      default: null
    },
    // 开始时间
    startPlaceholder: {
      type: String,
      default: '开始时间'
    },
    // 结束时间
    endPlaceholder: {
      type: String,
      default: '结束时间'
    }
  },
  data() {
    this.ns = useNamespace('date-editor')
    return {}
  }
}
</script>
