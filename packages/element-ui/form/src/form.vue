<template>
  <el-form
    ref="form"
    :class="[ns.b()]"
    :isLabelMidden="isLabelMidden"
    v-bind="$attrs"
    v-on="$listeners"
    >
        <slot></slot>
    </el-form>
</template>

<script>
import { useNamespace } from 'src/utils/use-namespace'
export default {
  name: 'Form',
  inheritAttrs: false,

  props: {
    // label字体不居中
    isLabelMidden: Boolean
  },

  data() {
    this.ns = useNamespace('form')
    return {}
  },

  methods: {
    async validate(callback) {
        try {
          await this.$refs.form.validate(callback)
        } catch (err) {
          return false
        }

          return true
      },
      resetFields() {
        this.$refs.form.resetFields()
      },
      validateField(props, callback) {
        this.$refs.form.validateField(props, callback)
      },
      clearValidate(props) {
        this.$refs.form.clearValidate(props)
      },
  }
}
</script>
