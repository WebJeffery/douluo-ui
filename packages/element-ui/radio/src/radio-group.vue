<template>
  <el-radio-group :class="[ns.b()]" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-radio-group>
</template>

<script>
import { useNamespace } from 'src/utils/use-namespace.js'
export default {
  name: 'RadioGroup',

  inheritAttrs: false,

  // props: {},

  data() {
    this.ns = useNamespace('radio-group')
    return {}
  }
}
</script>
