<template>
  <button
    :class="[
      ns.b(),
      ns.m(type),
      ns.m(buttonSize),
      ns.is('disabled', buttonDisabled),
      ns.is('loading', loading),
      ns.is('plain', plain),
      ns.is('ghost', ghost),
      ns.is('round', round),
      ns.is('circle', circle),
      ns.is('text', text),
      ns.is('link', link)
    ]"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading"></slot>
      <i v-else class="el-icon-loading"></i>
    </template>
    <template v-else-if="icon || $slots.icon">
      <span v-if="$slots.icon"><slot name="icon"></slot></span>
      <i v-else :class="icon"></i>
    </template>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
import { useNamespace } from 'src/utils/use-namespace.js'

export default {
  name: 'Button',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    ghost: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    link: Boolean,
    text: Boolean
  },

  data() {
    this.ns = useNamespace('button')
    return {}
  },

  computed: {
    _dlFormItemSize() {
      return (this.dlFormItem || {}).dlFormItemSize
    },
    buttonSize() {
      return this.size || this._dlFormItemSize || (this.$ELEMENT || {}).size
    },
    buttonDisabled() {
      return this.disabled || (this.dlForm || {}).disabled
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
