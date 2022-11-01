<template>
  <div :class="bemNS.b()">
    <div :class="bemNS.e('image')" :style="imageStyle">
      <slot name="image">
        <img :src="imageEmpty" />
      </slot>
    </div>
    <div :class="bemNS.e('description')">
      <slot v-if="$slots.description" name="description"></slot>
      <p v-else :class="bemNS.bm('description', 'text')">{{ emptyDescription }}</p>
    </div>
    <div v-if="$slots.default" :class="bemNS.e('bottom')">
      <slot></slot>
    </div>
  </div>
</template>

<script>
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


  computed: {
    bemNS () {
      return this.$dlUseNamespace('empty')
    },
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
