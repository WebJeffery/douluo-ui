<template>
  <el-radio-group :class="[bemNS.b()]" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-radio-group>
</template>

<script>
export default {
  name: 'RadioGroup',
  inheritAttrs: false,

  computed: {
    bemNS() {
      return this.$dlUseNamespace('radio-group')
    }
  },
}
</script>
