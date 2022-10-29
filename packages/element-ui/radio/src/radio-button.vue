<template>
  <el-radio-button :class="[ns.b()]" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-radio-button>
</template>

<script>
import { useNamespace } from 'src/utils/use-namespace.js'
export default {
  name: 'RadioButton',

  inheritAttrs: false,

  // props: {},

  data() {
    this.ns = useNamespace('radio-button')
    return {}
  }
}
</script>
