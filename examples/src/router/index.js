import Vue from 'vue'
import Router from 'vue-router'

// 避免重复点击菜单报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

Vue.use(Router)

/* Layout */
import Layout from '../layout/index.vue'

export const routeComponents = [
  {
    title: 'Button 组件',
    path: '/button',
    component: () => import('@/views/button/index.vue')
  },
  {
    title: 'Icon 组件',
    path: '/icon',
    component: () => import('@/views/icon/index.vue')
  },
  {
    title: 'DatePicker 组件',
    path: '/DatePicker',
    component: () => import('@/views/datePicker/index.vue')
  },
  {
    title: 'Radio 组件',
    path: '/radio',
    component: () => import('@/views/radio/index.vue')
  },
  {
    title: 'Checkbox 组件',
    path: '/checkbox',
    component: () => import('@/views/checkbox/index.vue')
  },
  {
    title: 'Form 表单组件',
    path: '/form',
    component: () => import('@/views/form/index.vue')
  },
  {
    title: 'Input 组件',
    path: '/input',
    component: () => import('@/views/input/index.vue')
  },
  {
    title: 'Table 组件',
    path: '/table',
    component: () => import('@/views/table/index.vue')
  },
  {
    title: 'Empty 组件',
    path: '/empty',
    component: () => import('@/views/empty/index.vue')
  },
  {
    title: 'Pagination 组件',
    path: '/pagination',
    component: () => import('@/views/pagination/index.vue')
  },
  {
    title: 'Dialog 组件',
    path: '/dialog',
    component: () => import('@/views/dialog/index.vue')
  },
  {
    title: 'Drawder 组件',
    path: '/drawer',
    component: () => import('@/views/drawer/index.vue')
  },
  {
    title: 'Popover 组件',
    path: '/popover',
    component: () => import('@/views/popover/index.vue')
  },
  {
    title: 'Popconfirm 组件',
    path: '/popconfirm',
    component: () => import('@/views/popconfirm/index.vue')
  },
  {
    title: 'Tooltip 组件',
    path: '/tooltip',
    component: () => import('@/views/tooltip/index.vue')
  },
  {
    title: 'Select 组件',
    path: '/select',
    component: () => import('@/views/select/index.vue')
  },
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/',
        component: Layout,
        children: [...routeComponents]
      }
    ]
  })

const router = createRouter()

export default router
