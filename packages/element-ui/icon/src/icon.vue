<script>
export default {
  name: 'Icon',
  props: {
      name: {
          type: String,
          default: ''
      },
      color: {
          type: String,
          default: ''
      },
      size: {
          type: [Number, String],
          default: undefined
      },
      iconfont: {
          type: String,
          default: 'douluo-icons'
      },
  },

  computed: {
    bemNS () {
      return this.$dlUseNamespace('icon')
    }
  },

  render(h) {
    const style = {
      color: `${this.color}`,
      fontSize: this.size && `${this.size}px`
    }

    const classArr = [ this.bemNS.b() ]
    const domProps = {}
    const icon = this.name

    if (/^el-/.test(icon)) {
        // element 图标
        classArr.push(icon)
    } else if (/^&#/.test(icon)) {
        // 阿里 unicode 字体库
        classArr.push(this.$dlIconfont)
        domProps.innerHTML = icon
    } else {
      classArr.push(this.iconfont, icon)
    }

    return h('i', {
      style,
      class: classArr,
      domProps,
      on: { click: () => this.$emit('click') }
    })
  }
}
</script>
