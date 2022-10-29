<template>
  <el-checkbox-button :class="[ns.b()]" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-checkbox-button>
</template>

<script>
import { useNamespace } from 'src/utils/use-namespace.js'
export default {
  name: 'CheckboxButton',

  inheritAttrs: false,

  // props: {},

  data() {
    this.ns = useNamespace('checkbox-button')
    return {}
  }
}
</script>
