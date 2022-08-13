import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../layout/index.vue'

export const routeComponents = [
  {
    title: 'Button 组件',
    path: '/button',
    component: () => import('@/views/button/index.vue'),
  },
  {
    title: 'table 组件',
    path: '/table',
    component: () => import('@/views/table/index.vue')
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        ...routeComponents
      ]
    }
  ]
})

const router = createRouter()


export default router
