<template>
  <el-form
    ref="form"
    :class="[bemNS.b()]"
    :isLabelMidden="isLabelMidden"
    v-bind="$attrs"
    v-on="$listeners">
    <slot></slot>
  </el-form>
</template>

<script>
export default {
  name: 'Form',
  inheritAttrs: false,

  props: {
    // label字体不居中
    isLabelMidden: Boolean
  },

  computed: {
    bemNS() {
      return this.$dlUseNamespace('form')
    }
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
    }
  }
}
</script>
