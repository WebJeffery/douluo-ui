<template>
  <el-checkbox-group :class="[bemNS.b()]" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-checkbox-group>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  inheritAttrs: false,

  computed: {
    bemNS () {
      return this.$dlUseNamespace('checkbox-group')
    }
  }
}
</script>
