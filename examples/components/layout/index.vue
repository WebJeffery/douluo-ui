<template>
  <el-container style="height:100%">
    <el-aside width="200px">
      <h1 class="n-title">前端组件文档</h1>
      <section class="n-menu">
        <el-menu :default-openeds="['1']" :default-active="$route.path">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>组件</template>
            <el-menu-item-group>
              <template v-for="(item, index) in routes">
                <router-link
                  :to="item.path"
                  :key="item.path"
                >
                  <el-menu-item
                    v-if="item.name !== 'root'"
                    :i="'1-' + index"
                    :key="item.path"
                    :index="item.path"
                  >
                    {{ item.name }}
                  </el-menu-item>
                </router-link>
              </template>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </section>
    </el-aside>

    <el-container>
      <el-header class="n-header">
        <h2>mifei-ui</h2>
        <strong class="n-time">{{ currTime }}</strong>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer class="n-copyright">
        Copyright ©2021 160前端
        <span class="n-update-time">最后更新时间：{{ lastModified }}</span>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      routes: [],
      currTime: '',
      lastModified: document.lastModified
    };
  },
  mounted() {
    this.routes = this.$router.getRoutes();
    setInterval(() => this.currTime = this.getNow(), 1000)
  },
  methods: {
    getNow() {
      const now = new Date()
      const fmt = v => v < 10 ? `0${v}` : v
      return `
        ${now.getFullYear()}年${fmt(now.getMonth() + 1)}月${fmt(now.getDate())}日
        ${fmt(now.getHours())}:${fmt(now.getMinutes())}:${fmt(now.getSeconds())}
      `
    }
  }
};
</script>
<style lang="scss">
.el-header {
  color: #333;
  line-height: 60px;
}

// .el-aside {
//   color: #333;
// }

$bgColor: #1b1c22;
$activeBgColor: #000;

.n-title {
  margin: 0;
  height: 72px;
  line-height: 72px;
  font-size: 22px;
  color: #fff;
  background-color: #22262f;
  text-align: center;
  cursor: default;
}

.n-menu {
  height: calc(100% - 72px);
  overflow-x: hidden !important;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
    background-color: transparent;
  }
}
.el-menu {
  width: 202px;
  height: 100%;
  color: #fff;
  background-color: $bgColor !important;
  .el-menu-item,
  .el-submenu__title,
  .el-submenu__title i {
    color: #fff;
    background-color: $bgColor;
  }
  .el-submenu__title:hover {
    i {
      background-color: $activeBgColor;
    }
    background-color: $activeBgColor;
  }
  .el-menu-item:focus,
  .el-menu-item:hover {
    background-color: $activeBgColor;
  }
  .el-menu-item.is-active {
    color: #00c985;
  }
}

.n-header {
  position: relative;
  height: 72px !important;
  line-height: inherit;
  box-shadow: 0 0 6px 0 #999;
  text-align: left;
  .n-time {
    position: absolute;
    right: 48px;
    top: 24px;
    font-size: 16px;
    z-index: 2;
    color: #666;
  }
}

.n-copyright {
  line-height: 60px;
  color: #aaa;
  text-align: center;
  .n-update-time {
    float: right;
    padding-right: 20px;
    font-size: 10px;
    color: #f00;
  }
}
</style>
