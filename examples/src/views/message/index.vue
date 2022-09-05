<template>
  <div>
    <h1>Message 消息提示</h1>
    <message1 />
    <message2 />
    <message3 />
    <message4 />
    <message5 />
  </div>
</template>

<script>
import message1 from './components/message1.vue'
import message2 from './components/message2.vue'
import message3 from './components/message3.vue'
import message4 from './components/message4.vue'
import message5 from './components/message5.vue'
export default {
  components: { message1, message2, message3, message4, message5 }
}
</script>
