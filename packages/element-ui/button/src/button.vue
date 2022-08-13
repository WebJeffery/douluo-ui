<template>
  <el-button
    v-bind="$attrs"
    v-on="$listeners"
    :class="[
      ns.b()
    ]">
    <slot></slot>
  </el-button>
</template>
<script>
import { useNamespace } from 'src/utils/use-namespace'

export default {
  name: 'Button',

  data () {
    this.ns = useNamespace('button')
    return {}
  }
}
</script>
