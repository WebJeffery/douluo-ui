<template>
  <div :class="ns.b()">
    <div :class="ns.e('image')" :style="imageStyle">
      <slot name="image">
        <img :src="imageEmpty" />
      </slot>
    </div>
    <div :class="ns.e('description')">
      <slot v-if="$slots.description" name="description"></slot>
      <p v-else :class="ns.bm('description', 'text')">{{ emptyDescription }}</p>
    </div>
    <div v-if="$slots.default" :class="ns.e('bottom')">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { useNamespace } from 'src/utils/use-namespace.js'

export default {
  name: 'Empty',

  props: {
    image: {
      type: String,
      default: ''
    },
    imageSize: Number,
    description: {
      type: String,
      default: ''
    }
  },

  data() {
    this.ns = useNamespace('empty')
    return {}
  },

  computed: {
    emptyDescription() {
      return this.description || '暂无数据'
    },
    imageStyle() {
      return {
        width: this.imageSize ? `${this.imageSize}px` : ''
      }
    },
    imageEmpty() {
      return this.image || '//static.91160.com/wechat/img/doctor/nodata-img.png'
    }
  }
}
</script>
