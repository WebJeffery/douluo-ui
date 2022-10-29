<template>
  <el-input
    :class="[type === 'textarea' ? nsTextarea.b() : nsInput.b(), nsInput.is('dashed', dashed)]"
    :type="type"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #append>
      <slot name="append"></slot>
    </template>
    <template #prefix>
      <slot name="prefix"></slot>
    </template>
    <template #suffix>
      <slot name="suffix"></slot>
    </template>
    <template #prepend>
      <slot name="prepend"></slot>
    </template>
  </el-input>
</template>

<script>
import { useNamespace } from 'src/utils/use-namespace.js'
export default {
  name: 'Input',
  inheritAttrs: false,

  props: {
    type: {
      type: String,
      default: 'text'
    },
    dashed: Boolean
  },

  data() {
    this.nsInput = useNamespace('input')
    this.nsTextarea = useNamespace('textarea')
    return {}
  }
}
</script>
