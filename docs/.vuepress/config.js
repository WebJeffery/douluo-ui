const path = require('path')

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
      // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      selectText: '选择语言',
      lang: 'zh-CN',
      label: '简体中文',
      title: 'Douluo-UI',
      description: '基于 Vue2.0 的组件库'
    },
    // 'en/': {
    //   lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //   label: 'English',
    //   title: 'English',
    //   description: 'A UI library build by Vue 2.0'
    // },
  },
  themeConfig: {
    nav: [ // 配置顶部导航栏
      {
        text: '首页',
        link: '/'
      },
      // {
      //   text: '指南',
      //   link: '/guide/instroduce/'
      // },
      {
        text: '组件',
        link: '/components/button'
      }
    ],
    locales: {
      // '/': {
      //   label: 'English',
      //   selectText: 'Languages',
      //   editLinkText: 'Edit this page on GitHub',
      //   lastUpdated: 'Last Updated',
      //   sidebar: {
      //     '/': genSidebarConfig('Guide')
      //   }
      // },
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        // editLinkText: '在 GitHub 上编辑此页',
        // lastUpdated: '上次更新',
        sidebar: [
          {
            title: '开发指南',
            collapsable: false,
            children: [
              {
                title: '前言',
                collapsable: false,
                path: '/guide/instroduce',
              },
              {
                title: '开始',
                collapsable: false,
                path: '/guide/start',
              }
            ]
          },
          {
            title: '组件',
            collapsable: false,
            children: [
              {
                title: '通用',
                collapsable: false,
                children: [
                  ['/components/button', 'button'],
                  ['/components/card', 'card'],
                ]
              }
            ]
          }
        ]
      }
    }
  },
  plugins: [
    // '@vuepress/back-to-top'
    'demo-container', // 配置插件
  ],
  // 修改内部的webpack设置
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "../../src"),
        "packages": path.resolve(process.cwd(), "../../packages"),
      }
    }
  },
}
