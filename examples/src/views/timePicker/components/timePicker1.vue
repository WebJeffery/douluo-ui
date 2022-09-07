<template>
  <div>
    <h3>固定时间点</h3>
    <h4>提供几个固定的时间点供用户选择</h4>
    <dl-time-picker
      v-model="value"
      :is-fixed-time="true"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
      placeholder="选择时间"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
