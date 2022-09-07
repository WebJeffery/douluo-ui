<template>
  <div>
    <h1>时间选择器</h1>
    <div>
      <timePicker1 />
      <timePicker2 />
      <timePicker3 />
      <timePicker4 />
    </div>
  </div>
</template>

<script>
import timePicker1 from './components/timePicker1.vue'
import timePicker2 from './components/timePicker2.vue'
import timePicker3 from './components/timePicker3.vue'
import timePicker4 from './components/timePicker4.vue'
export default {
  components: { timePicker1, timePicker2, timePicker3, timePicker4 }
}
</script>
