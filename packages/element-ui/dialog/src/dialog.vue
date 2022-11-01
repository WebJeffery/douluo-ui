<template>
  <el-dialog :class="bemNS.b()" v-bind="$attrs" v-on="$listeners">
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

  computed: {
    bemNS () {
      return this.$dlUseNamespace('dialog')
    }
  }
}
</script>
