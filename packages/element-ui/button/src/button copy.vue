<template>
  <el-button
    v-bind="$attrs"
    v-on="$listeners"
    :type="type"
    :class="[
      ns.b(),
      ns.m(type)
    ]">
    <slot></slot>
  </el-button>
</template>
<script>
import { useNamespace } from 'src/utils/use-namespace'

export default {
  name: 'Button',

  props: {
    type: {
        type: String,
        default: 'default'
      }
  },

  data () {
    this.ns = useNamespace('button')
    return {}
  }
}
</script>
