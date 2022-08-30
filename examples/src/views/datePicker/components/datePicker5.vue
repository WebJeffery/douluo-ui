<template>
  <div class="datePicker5">
    <h2>日期格式</h2>
    <h4>使用format指定输入框的格式；使用value-format指定绑定值的格式。</h4>
    <div class="block">
      <span class="demonstration">默认为 Date 对象</span>
      <div class="demonstration">值：{{ value1 }}</div>
      <dl-date-picker v-model="value1" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" />
    </div>
    <div class="block">
      <span class="demonstration">使用 value-format</span>
      <div class="demonstration">值：{{ value2 }}</div>
      <dl-date-picker
        v-model="value2"
        type="date"
        placeholder="选择日期"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd"
      />
    </div>
    <div class="block">
      <span class="demonstration">时间戳</span>
      <div class="demonstration">值：{{ value3 }}</div>
      <dl-date-picker
        v-model="value3"
        type="date"
        placeholder="选择日期"
        format="yyyy 年 MM 月 dd 日"
        value-format="timestamp"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: ''
    }
  }
}
</script>
