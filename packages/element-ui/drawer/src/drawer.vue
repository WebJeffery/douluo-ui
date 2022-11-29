<template>
  <el-drawer
    :class="bemNS.b()"
    :append-to-body="appendToBody"
    v-bind="$attrs"
    v-on="$listeners">
    <template v-if="$slots.title" slot="footer">
      <slot name="title"></slot>
    </template>
    <slot></slot>
  </el-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  inheritAttrs: false,

  props: {
    appendToBody: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    bemNS () {
      return this.$dlUseNamespace('drawer')
    }
  }
}
</script>
