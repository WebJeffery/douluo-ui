<template>
  <el-tag
    :type="type"
    v-bind="$attrs"
    v-on="$listeners"
    :class="[bemNS.b(), bemNS.m(type), bemNS.is('disabled', disabled), bemNS.m('close')]"
    @click="handleClick"
    @close="handleClose"
  >
    <slot></slot>
  </el-tag>
</template>
<script>
export default {
  name: 'Tag',

  props: {
    type: {
      type: String,
      default: 'primary'
    },
    disabled: Boolean
  },

  computed: {
    bemNS() {
      return this.$dlUseNamespace('tag')
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    },
    handleClose(evt) {
      this.$emit('closeFunc', evt)
    }
  }
}
</script>
