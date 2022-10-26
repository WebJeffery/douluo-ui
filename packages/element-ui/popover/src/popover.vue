<template>
  <el-popover
    :class="ns.b()"
    v-bind="$attrs"
    v-on="$listeners"
    >
      <slot></slot>
      <template v-if="$slots.reference" slot="reference">
        <slot name="reference"></slot>
      </template>
    </el-popover>
</template>

<script>

import { useNamespace } from 'src/utils/use-namespace'

export default {
  name: 'popover',
  inheritAttrs: false,

  data() {
    this.ns = useNamespace('popover')
    return {}
  }
}
</script>
