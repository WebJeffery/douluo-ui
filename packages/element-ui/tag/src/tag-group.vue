<template>
  <div :class="[customClass, bemNS.b()]">
    <slot>
      <span :class="[bemNS.m('button'), bemNS.is('select', select), bemNS.is('disabled', disabled)]" @click="addClick">
        <dl-icon name="dl-icon-add" />
        <span style="margin-left: 3px">{{ title }}</span>
      </span>
    </slot>
    <div style="margin-top: 10px" v-if="tagList && tagList.length > 0">
      <dl-tag
        @closeFunc="closeFun(index, $event)"
        :closable="closable"
        :disabled="disabled"
        style="margin-right: 20px"
        v-for="(item, index) in tagList"
        :key="index"
      >
        {{ item }}
      </dl-tag>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TagGroup',

  props: {
    customClass: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '添加标签'
    },
    tagList: {
      type: Array,
      default: () => []
    },
    closable: {
      type: Boolean,
      default: true
    },
    disabled: Boolean
  },

  data() {
    return {
      select: false
    }
  },

  computed: {
    bemNS() {
      return this.$dlUseNamespace('tag-group')
    }
  },
  methods: {
    addClick(evt) {
      this.select = true
      this.$emit('click', evt)
    },
    closeFun(index, evt) {
      this.$emit('close', index, evt)
    }
  }
}
</script>
