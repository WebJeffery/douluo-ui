<template>
  <div class="x-show-mark">
    <h3 class="x-block-title">文档说明</h3>
    <NwEditor
      :value="value"
      :menus="menus"
      :disabled="true"
      v-bind="$attrs"
    />
  </div>
</template>
<script>
import NwEditor from './editor'

export default {
  name: 'ShowMark',
  inheritAttrs: false,
  components: {
    NwEditor
  },
  props: {
    value: String
  },
  data() {
    return {
      menus: []
    }
  }
}
</script>
<style lang="scss">
.x-show-mark {
  margin-top: 20px;
  .w-e-toolbar {
    z-index: 10 !important;
  }
  .w-e-text-container {
    height: auto !important;
    z-index: 0 !important;
  }
  .w-e-text {
    overflow-y: hidden;
  }
}
.x-block-title {
  position: relative;
  margin: 16px 0;
  padding-left: 11px;
  color: #282E43;
  background: #fff;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 3px;
    height: 18px;
    background: #567CDB;
  }
}
</style>
