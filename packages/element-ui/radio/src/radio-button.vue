<template>
  <el-radio-button :class="[bemNS.b()]" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-radio-button>
</template>

<script>
export default {
  name: 'RadioButton',

  inheritAttrs: false,


  computed: {
    bemNS() {
      return this.$dlUseNamespace('radio-button')
    }
  },
}
</script>
