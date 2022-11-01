<template>
  <span v-if="lock" :class="[bemNS.b()]">
    <span :class="[bemNS.is('lock', lock)]">
      <i class="douluo-icons dl-icon-lock"></i>
    </span>
    <slot></slot>
  </span>
  <el-checkbox
    v-else
    :class="[bemNS.b(), bemNS.is('bordered', border), bemNS.m(size)]"
    v-bind="$attrs"
    v-on="$listeners"
    :border="border"
    :size="size"
    :label="label"
  >
    <slot></slot>
    <template v-if="!$slots.default">{{ label }}</template>
    <span class="dl-check-status">
      <i class="douluo-icons dl-icon-check"></i>
    </span>
  </el-checkbox>
</template>

<script>
export default {
  name: 'Checkbox',
  inheritAttrs: false,

  props: {
    border: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    lock: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    bemNS () {
      return this.$dlUseNamespace('checkbox')
    }
  }
}
</script>
