<template>
  <el-form-item
    ref="formItem"
    :class="[bemNS.b()]"
    :label="label"
    v-bind="$attrs"
    v-on="$listeners">
    <slot v-if="$slots.label" name="label">{{ label }}</slot>
    <slot></slot>
    <slot v-if="$slots.error" name="error"></slot>
  </el-form-item>
</template>

<script>
export default {
  name: 'FormItem',
  inheritAttrs: false,

  props: {
    label: String
  },


  computed: {
    bemNS () {
      return this.$dlUseNamespace('form-item')
    }
  },

  methods: {
    resetFields() {
      this.$refs.formItem.resetFields()
    },
    clearValidate() {
      this.$refs.formItem.clearValidate()
    }
  }
}
</script>
