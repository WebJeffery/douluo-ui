<template>
  <button
    :class="[
      bemNS.b(),
      bemNS.m(type),
      bemNS.m(buttonSize),
      bemNS.is('disabled', buttonDisabled),
      bemNS.is('loading', loading),
      bemNS.is('plain', plain),
      bemNS.is('ghost', ghost),
      bemNS.is('round', round),
      bemNS.is('circle', circle),
      bemNS.is('text', text),
      bemNS.is('link', link)
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
      <dl-icon v-else :name="icon" />
    </template>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
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

  computed: {
    bemNS () {
      return this.$dlUseNamespace('button')
    },
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
