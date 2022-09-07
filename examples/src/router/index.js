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
    title: 'table 组件',
    path: '/table',
    component: () => import('@/views/table/index.vue')
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
