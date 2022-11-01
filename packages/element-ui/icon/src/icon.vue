<script>
export default {
  name: 'Icon',
  props: {
      type: {
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
    const type = this.type

    if (/^el-/.test(type)) {
        // element 图标
        classArr.push(type)
    } else if (/^&#/.test(this.type)) {
        // 阿里 unicode 字体库
        classArr.push(this.$dlIconfont)
        domProps.innerHTML = this.type
    } else {
      classArr.push(this.iconfont, this.type)
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
