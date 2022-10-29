<template>
  <el-radio
    :class="[ns.b(), ns.is('bordered', border), ns.m(size)]"
    v-bind="$attrs"
    v-on="$listeners"
    :border="border"
    :size="size"
  >
    <slot></slot>
  </el-radio>
</template>

<script>
import { useNamespace } from 'src/utils/use-namespace.js'
export default {
  name: 'Radio',
  inheritAttrs: false,

  props: {
    border: Boolean,
    size: String
  },

  data() {
    this.ns = useNamespace('radio')
    return {}
  }
}
</script>
