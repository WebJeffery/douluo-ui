<template>
  <div>
    <h1>日期选择器</h1>
    <datePicker1 />
    <datePicker2 />
    <datePicker3 />
    <datePicker4 />
    <datePicker5 />
    <datePicker6 />
  </div>
</template>

<script>
import datePicker1 from './components/datePicker1.vue'
import datePicker2 from './components/datePicker2.vue'
import datePicker3 from './components/datePicker3.vue'
import datePicker4 from './components/datePicker4.vue'
import datePicker5 from './components/datePicker5.vue'
import datePicker6 from './components/datePicker6.vue'
export default {
  components: { datePicker1, datePicker2, datePicker3, datePicker4, datePicker5, datePicker6 },
  data() {
    return {
      value1: ''
    }
  }
}
</script>
