<template>
  <div class="demo-form">
    <h1> Form 组件</h1>
    <demo1 />
    <demo2 />
    <demo3 />
    <demo4 />
    <demo5 />
    <demo6 />
    <demo7 />
    <demo8 />
  </div>
</template>

<script>
import demo1 from './demo/demo1.vue'
import demo2 from './demo/demo2.vue'
import demo3 from './demo/demo3.vue'
import demo4 from './demo/demo4.vue'
import demo5 from './demo/demo5.vue'
import demo6 from './demo/demo6.vue'
import demo7 from './demo/demo7.vue'
import demo8 from './demo/demo8.vue'

export default {
  name: 'Form',

  components: {
    demo1,
    demo2,
    demo3,
    demo4,
    demo5,
    demo6,
    demo7,
    demo8
  }
}
</script>

<style lang="scss">
  .demo-form {
    .el-form {
      width: 460px;
    }

    .line {
      text-align: center;
    }

    .demo-form-inline {
      width: auto;
    }

    .demo-dynamic {
      width: 600px;
    }

    .demo-dynamic .el-input {
      margin-right: 10px;
      width: 270px;
      vertical-align: top;
    }
  }
</style>
