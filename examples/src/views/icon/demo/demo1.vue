<template>
  <div class="page-component">
    <h2>使用方法</h2>
    <dl-icon type="el-icon-edit" />
    <dl-icon type="el-icon-share" />
    <dl-icon type="el-icon-delete" />
    <el-button type="primary" icon="el-icon-search">搜索</el-button>

    <h2>组件库图标</h2>
    <ul class="icon-list">
      <li v-for="name in dlIcons" :key="name">
        <span>
          <dl-icon :type="'dl-icon-' + name" />
          <span class="icon-name">{{ 'dl-icon-' + name }}</span>
        </span>
      </li>
    </ul>

    <h2>element 图标</h2>
    <ul class="icon-list">
      <li v-for="name in icons" :key="name">
        <span>
          <dl-icon :type="'el-icon-' + name" />
          <span class="icon-name">{{ 'el-icon-' + name }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import icons from './icon.json'
import dlIcons from './dl-icon.json'

export default {
  data() {
    return {
      dlIcons,
      icons
    }
  },

  computed: {

  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.icon-list i {
  color: #606266;
  margin: 0 20px;
  font-size: 1.5em;
  vertical-align: middle;
}

.page-component > ul.icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0!important;
  border: solid 1px #eaeefb;
  border-radius: 4px;
}
.icon-list li {
  float: left;
  width: 16.66%;
  text-align: center;
  height: 120px;
  line-height: 120px;
  color: #666;
  font-size: 13px;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-right: -1px;
  margin-bottom: -1px;

  &::after {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
  }

  span {
    display: inline-block;
    line-height: normal;
    vertical-align: middle;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", SimSun, sans-serif;
    color: #99a9bf;
    transition: color 0.15s linear;
  }

  i {
    display: block;
    font-size: 32px;
    margin-bottom: 15px;
    color: #606266;
    transition: color 0.15s linear;
  }

  .icon-name {
    display: inline-block;
    padding: 0 3px;
    height: 1em;
  }

  &:hover {
    span,
    i {
      color: rgb(92, 182, 255);
    }
  }
}
</style>
