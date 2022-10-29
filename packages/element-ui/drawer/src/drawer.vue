<template>
  <el-drawer :class="ns.b()" v-bind="$attrs" v-on="$listeners">
    <template v-if="$slots.title" slot="footer">
      <slot name="title"></slot>
    </template>
    <slot></slot>
  </el-drawer>
</template>

<script>
import { useNamespace } from 'src/utils/use-namespace.js'

export default {
  name: 'Drawer',
  inheritAttrs: false,

  data() {
    this.ns = useNamespace('drawer')
    return {}
  }
}
</script>
