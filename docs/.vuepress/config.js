module.exports = {
  title: 'Douluo-UI',
  description: 'douluo ui 组件库文档',
  markdown: {
    lineNumbers: true
  },
  base: '/douluo-ui/',
  themeConfig: {
    logo: '/logo.png',
    nav: [ // 配置顶部导航栏
      {
        text: '首页',
        link: '/'
      },
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '组件',
        link: '/components/'
      }
    ],
    sidebar: { // 配置侧边栏部分
      '/components/': [
        
        // {
        //   title: '组件',
        //   path: '',
        // },
        {
          title: '基础组件',
          children: [
            ['../components/Button.md', 'Button'],
            ['../components/Card.md', 'Card']
          ]
        }
      ],
      '/guide/': [
        ['', '介绍'],
        {
          title: '组件',
          children: [
            ['../guide/Button.md', 'Button'],
            ['../guide/Card.md', 'Card']
          ]
        }
      ]
    }
    // locales: {
    //   '/': {
    //     selectText: '选择语言',
    //     label: '简体中文',
    //     nav: [
    //       {
    //         text: '指南',
    //         link: '/guide/'
    //       },
    //       {
    //         text: 'github',
    //         link: 'https://github.com'
    //       }
    //     ],
    //     sidebar: {
    //       '/guide/': [
    //         ['', '介绍'],
    //         {
    //           title: '组件',
    //           children: [
    //             ['../guide/Button.md', 'Button'],
    //             ['../guide/Card.md', 'Card']
    //           ]
    //         }
    //       ]
    //     }
    //   },
    //   '/en/': {
    //     selectText: 'Languages',
    //     label: 'English',
    //     nav: [
    //       {
    //         text: 'guide',
    //         link: '/en/guide/'
    //       },
    //       {
    //         text: 'github',
    //         link: 'https://github.com'
    //       }
    //     ],
    //     sidebar: {
    //       '/en/guide/': [
    //         ['', 'introduction'],
    //         {
    //           title: 'Components',
    //           children: [
    //             ['../guide/Button.md', 'Button'],
    //             ['../guide/Card.md', 'Card']
    //           ]
    //         }
    //       ]
    //     }
    //   }
    // }
  },
  plugins: [
    // '@vuepress/back-to-top'
    'demo-container', // 配置插件
  ]
};
