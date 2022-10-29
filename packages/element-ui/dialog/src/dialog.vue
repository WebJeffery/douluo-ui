<template>
  <el-dialog :class="ns.b()" v-bind="$attrs" v-on="$listeners">
    <template v-if="$slots.title" slot="footer">
      <slot name="title"></slot>
    </template>
    <slot></slot>
    <template v-if="$slots.footer" slot="footer">
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script>
import { useNamespace } from 'src/utils/use-namespace.js'

export default {
  name: 'Dialog',
  inheritAttrs: false,

  data() {
    this.ns = useNamespace('dialog')
    return {}
  }
}
</script>
