<template>
	<div>
    <el-button>hello</el-button>
    <dl-button><i class="dl-icon-shezhi"></i>斗罗 ZUI</dl-button>
    <!-- <d-button></d-button>
    <d-radio></d-radio>
    <d-table></d-table> -->
  </div>
</template>


<script>
import DButton from '../../examples/src/views/button/index.vue'
import DRadio from '../../examples/src/views/radio/index.vue'
import DTable from '../../examples/src/views/table/index.vue'
export default {
  components: {
    DButton,
    DRadio,
    DTable
  },
  mounted () {
    // document.documentElement 是全局变量时
const el = document.documentElement
// const el = document.getElementById('xxx')

// 获取 css 变量
getComputedStyle(el).getPropertyValue(`--dl-color-primary`)

// 设置 css 变量
el.style.setProperty('--color-primary', 'red')
  }
}
</script>
