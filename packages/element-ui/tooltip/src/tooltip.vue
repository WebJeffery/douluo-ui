<template>
  <el-tooltip :class="bemNS.b()" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
    <template v-if="$slots.content" slot="content">
      <slot name="content"></slot>
    </template>
  </el-tooltip>
</template>

<script>
export default {
  name: 'Tooltip',
  inheritAttrs: false,

  computed: {
    bemNS() {
      return this.$dlUseNamespace('tooltip')
    }
  }
}
</script>
