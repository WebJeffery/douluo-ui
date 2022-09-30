<template>
  <el-form-item
    ref="formItem"
    :class="[ns.b()]"
    :label="label"
    v-bind="$attrs"
    v-on="$listeners">
    <slot v-if="$slots.label" name="label">{{ label }}</slot>
    <slot></slot>
    <slot v-if="$slots.error" name="error"></slot>
  </el-form-item>
</template>

<script>
import { useNamespace } from 'src/utils/use-namespace'
export default {
  name: 'FormItem',
  inheritAttrs: false,

  props: {
    label: String
  },

  data() {
    this.ns = useNamespace('form-item')
    return {}
  },

  methods: {
      resetFields() {
        this.$refs.formItem.resetFields()
      },
      clearValidate() {
        this.$refs.formItem.clearValidate()
      },
  }
}
</script>
