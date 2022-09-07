<template>
  <span
    v-if="lock"
    :class="[
      ns.b()
    ]"
  >
    <span :class="[ns.is('lock', lock)]">
      <i class="douluo-icons dl-icon-lock"></i>
    </span>
    <slot></slot>
  </span>
    <el-checkbox
      v-else
      :class="[
        ns.b(),
        ns.is('bordered', border),
        ns.m(size)]"
      v-bind="$attrs"
      v-on="$listeners"
      :border="border"
      :size="size"
      :label="label"
    >
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
      <span class="dl-check-status">
        <i class="douluo-icons dl-icon-check"></i>
      </span>
    </el-checkbox>
</template>

<script>
import { useNamespace } from 'src/utils/use-namespace'
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
    },
  },

  data() {
    this.ns = useNamespace('checkbox')
    return {}
  }
}
</script>
