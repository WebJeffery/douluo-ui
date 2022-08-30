<template>
  <div class="datePicker4">
    <h2>选择月份范围</h2>
    <h4>可在一个选择器中便捷地选择一个月份范围</h4>
    <div class="block">
      <span class="demonstration">默认</span>
      <dl-date-picker
        v-model="value1"
        type="monthrange"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
      />
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <dl-date-picker
        v-model="value2"
        type="monthrange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
        :picker-options="pickerOptions"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: '本月',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()])
            }
          },
          {
            text: '今年至今',
            onClick(picker) {
              const end = new Date()
              const start = new Date(new Date().getFullYear(), 0)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近六个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setMonth(start.getMonth() - 6)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      value1: '',
      value2: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.datePicker4 {
  .block {
    display: inline-block;
    width: 500px;
  }
}
</style>
