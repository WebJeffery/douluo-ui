<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{ count }}
    <button @click="count++">加</button>
  </div>
</template>

<script setup>
import { defineComponent, ref } from 'vue'

// export default defineComponent({
//   setup () {
//     const count = ref(233)
//     return {
//       count
//     }
//   }
// })

const count = ref(23323)

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>