<template>
  <el-drawer :class="bemNS.b()" v-bind="$attrs" v-on="$listeners">
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

  computed: {
    bemNS () {
      return this.$dlUseNamespace('drawer')
    }
  }
}
</script>
