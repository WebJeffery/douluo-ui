<template>
  <div ref="editor"></div>
</template>
<script>
import defaultMenus from './defaultMenus'
export default {
  name: 'NwEditor',
  props: {
    value: String,
    menus: {
      type: Array,
      default: () => (defaultMenus)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    value(val, old) {
      if (val !== old) {
        this.editor && this.editor.txt.html(val)
      }
    },
    disabled(val) {
      this.editor.$textElem.attr('contenteditable', !val)
    }
  },
  methods: {
    init() {
      // 版本：^4.3.0
      import(/* webpackChunkName: "public-wangeditor" */ 'wangeditor').then((E) => {
        /* eslint-disable */
        this.editor = new E.default(this.$refs.editor)
        this.editor.config.menus = this.menus
        this.editor.config.onchange = (html) => {
          this.$emit('input', html)
        }
        this.editor.create()
        this.editor.$textElem.attr('contenteditable', !this.disabled)
        this.editor.txt.html(this.value)
      }
      )
    }
  }
}
</script>
