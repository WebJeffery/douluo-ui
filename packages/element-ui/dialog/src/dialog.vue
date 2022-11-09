<template>
  <el-dialog
    :class="bemNS.b()"
    :append-to-body="appendToBody"
    v-bind="$attrs"
    v-on="$listeners">
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
export default {
  name: 'Dialog',
  inheritAttrs: false,

  props: {
    appendToBody: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    bemNS () {
      return this.$dlUseNamespace('dialog')
    }
  }
}
</script>
