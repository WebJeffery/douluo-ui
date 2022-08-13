<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        default-active="1"
        @open="handleOpen"
        class="el-menu-vertical">

        <el-menu-item
          v-for="item in routeComponents"
          @click.native="handleOpen(item)"
          :key="item.path">
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { routeComponents } from '@/router/index.js'

export default {
  name: 'Sidebar',
  data () {
    return {
      isCollapse: true,
      routeComponents
    }
  },

  methods: {
    handleOpen(item) {
      this.$router.push({ path: item.path })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical {
  height: 100vh;
}
</style>
