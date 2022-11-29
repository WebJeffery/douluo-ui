<template>
  <el-input
    :class="[type === 'textarea' ? nsTextarea.b() : nsInput.b(), nsInput.is('dashed', dashed)]"
    :type="type"
    :style="customStyle"
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
export default {
  name: 'Input',
  inheritAttrs: false,

  props: {
    type: {
      type: String,
      default: 'text'
    },
    dashed: Boolean,
    width: {
      type: [Number, String],
      default: ''
    }
  },

  computed: {
    nsInput () {
      return this.$dlUseNamespace('input')
    },
    nsTextarea () {
      return this.$dlUseNamespace('textarea')
    },
    customStyle() {
      const style = {}
      if (this.width) {
        style.width = this.width + 'px'
      }
      return style
    },
  }
}
</script>
