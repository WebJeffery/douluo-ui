<template>
  <el-checkbox-group
    :class="[ns.b()]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-checkbox-group>
</template>

<script>
import { useNamespace } from 'src/utils/use-namespace'
export default {
  name: 'CheckboxGroup',

  inheritAttrs: false,

  // props: {},

  data() {
    this.ns = useNamespace('checkbox-group')
    return {}
  }
}
</script>
