<template>
  <el-checkbox-button :class="[bemNS.b()]" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-checkbox-button>
</template>

<script>
export default {
  name: 'CheckboxButton',

  inheritAttrs: false,

  computed: {
    bemNS () {
      return this.$dlUseNamespace('checkbox-button')
    }
  }
}
</script>
