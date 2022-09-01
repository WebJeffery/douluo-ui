<template>
  <div>
    <h3>任意时间范围</h3>
    <h4>可选择任意的时间范围</h4>
    <dl-time-picker
      is-range
      v-model="value1"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
    />
    <dl-time-picker
      is-range
      arrow-control
      v-model="value2"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
    }
  }
}
</script>
