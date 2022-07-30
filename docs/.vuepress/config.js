const path = require('path')
const alias = require('../../config/alias');
const guideRoutes = require('./sidebarRoutes/guide.js')
const developerGuideRoutes = require('./sidebarRoutes/developer.js')
const elementUIRoutes = require('./sidebarRoutes/element.js')
const businessRoutes = require('./sidebarRoutes/business.js')

module.exports = {
  title: 'Douluo-UI',
  description: 'A UI library build by Vue 2.0',
  markdown: {
    lineNumbers: true
  },
  lang: 'zh-CN',
  base: '/douluo-ui/',
  head: [ // 网站标题栏的相关设置
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  locales: {
    '/': {
      selectText: '选择语言',
      lang: 'zh-CN',
      label: '简体中文',
      title: 'Douluo-UI',
      description: '基于 Vue2.0 的组件库'
    }
  },
  themeConfig: {
    // 配置顶部导航栏
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '开发指南',
        link: '/developer/installation'
      },
      {
        text: 'element 组件',
        link: '/packages/element/layout'
      },
      {
        text: '业务组件',
        link: '/packages/business/rich-text'
      },
    ],
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        lastUpdated: '上次更新',
        sidebar: {
          '/guide': guideRoutes,
          '/developer': developerGuideRoutes,
          '/packages/element': elementUIRoutes,
          '/packages/business': businessRoutes,

        }
      }
    }
  },
  // 配置插件
  plugins: [
    '@vuepress/back-to-top',
    'demo-container',
  ],
  // 修改内部的webpack设置
  configureWebpack: {
    resolve: {
      alias: alias
    }
  },
}
