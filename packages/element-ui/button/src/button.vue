<template>
  <el-button
    v-bind="$attrs"
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
    console.log(this.ns)
    return {}
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
