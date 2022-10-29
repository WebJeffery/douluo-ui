<template>
  <el-tooltip :class="ns.b()" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
    <template v-if="$slots.content" slot="content">
      <slot name="content"></slot>
    </template>
  </el-tooltip>
</template>

<script>
import { useNamespace } from 'src/utils/use-namespace.js'

export default {
  name: 'Tooltip',
  inheritAttrs: false,

  data() {
    this.ns = useNamespace('tooltip')
    return {}
  }
}
</script>
