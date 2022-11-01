<template>
  <el-radio
    :class="[bemNS.b(), bemNS.is('bordered', border), bemNS.m(size)]"
    v-bind="$attrs"
    v-on="$listeners"
    :border="border"
    :size="size"
  >
    <slot></slot>
  </el-radio>
</template>

<script>
export default {
  name: 'Radio',
  inheritAttrs: false,

  props: {
    border: Boolean,
    size: String
  },

  computed: {
    bemNS() {
      return this.$dlUseNamespace('radio')
    }
  }
}
</script>
