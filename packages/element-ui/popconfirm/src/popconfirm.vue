<template>
  <el-popconfirm :class="bemNS.b()" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
    <template v-if="$slots.reference" slot="reference">
      <slot name="reference"></slot>
    </template>
  </el-popconfirm>
</template>

<script>
export default {
  name: 'Popconfirm',
  inheritAttrs: false,

  computed: {
    bemNS() {
      return this.$dlUseNamespace('popconfirm')
    }
  }
}
</script>
