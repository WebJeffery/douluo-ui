<template>
  <el-popconfirm
    :class="ns.b()"
    v-bind="$attrs"
    v-on="$listeners"
    >
      <slot></slot>
      <template v-if="$slots.reference" slot="reference">
        <slot name="reference"></slot>
      </template>
    </el-popconfirm>
</template>

<script>

import { useNamespace } from 'src/utils/use-namespace'

export default {
  name: 'popconfirm',
  inheritAttrs: false,

  data() {
    this.ns = useNamespace('popconfirm')
    return {}
  }
}
</script>
