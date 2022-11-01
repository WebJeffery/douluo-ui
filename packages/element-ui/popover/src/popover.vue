<template>
  <el-popover :class="bemNS.b()" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
    <template v-if="$slots.reference" slot="reference">
      <slot name="reference"></slot>
    </template>
  </el-popover>
</template>

<script>
export default {
  name: 'Popover',
  inheritAttrs: false,

  computed: {
    bemNS() {
      return this.$dlUseNamespace('popover')
    }
  },
}
</script>
