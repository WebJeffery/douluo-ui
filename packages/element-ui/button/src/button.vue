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
      ns.is('link', link),
    ]"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
    <span v-if="$slots.icon"><slot name="icon"></slot></span>
  </button>
</template>
<script>
import { useNamespace } from 'src/utils/use-namespace'

export default {
  name: 'Button',
  inheritAttrs: false,

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
      text: Boolean,
    },

  data () {
    this.ns = useNamespace('button')
    return {}
  },

  computed: {
    _dlFormItemSize() {
      return (this.dlFormItem || {}).dlFormItemSize;
    },
    buttonSize() {
      return this.size || this._dlFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.dlForm || {}).disabled;
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>
