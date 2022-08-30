<template>
  <div class="datePicker2">
    <h2>其他日期单位</h2>
    <h4>通过扩展基础的日期选择，可以选择周、月、年或多个日期</h4>
    <div class="container">
      <div class="block">
        <span class="demonstration">周</span>
        <dl-date-picker v-model="value1" type="week" format="yyyy 第 WW 周" placeholder="选择周" />
      </div>
      <div class="block">
        <span class="demonstration">月</span>
        <dl-date-picker v-model="value2" type="month" placeholder="选择月" />
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">年</span>
        <dl-date-picker v-model="value3" type="year" placeholder="选择年" />
      </div>
      <div class="block">
        <span class="demonstration">多个日期</span>
        <dl-date-picker type="dates" v-model="value4" placeholder="选择一个或多个日期" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.datePicker2 {
  .block {
    margin-bottom: 20px;
  }
}
</style>
