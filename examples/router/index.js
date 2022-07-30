import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../components/layout/index.vue';
import { getRoutes } from './utils';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect: {
      path: '/button'
    },
    children: getRoutes()
  }
];

const router = new VueRouter({
  base: '/mifei-ui',
  mode: 'history',
  routes,
});

export default router;
