<template>
  <div>
    <h3>任意时间点</h3>
    <h4>可以选择任意时间</h4>
    <dl-time-picker
      v-model="value1"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }"
      placeholder="任意时间点"
    />
    <dl-time-picker
      arrow-control
      v-model="value2"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }"
      placeholder="任意时间点"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40)
    }
  }
}
</script>
