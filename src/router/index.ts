import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '../views/layout/layout.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/list',
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/list/list.vue'),
        meta: { navIndex: '/list', title: '我的问卷' }
      },
      {
        path: 'create',
        name: 'create',
        component: () => import('@/views/create/create.vue'),
        meta: { navIndex: '/create', title: '创建' }
      },
      {
        path: 'statistics/:id',
        name: 'statistics',
        component: () => import('@/views/statistics/index.vue'),
        meta: { hasSubNav: true, navIndex: '/list', title: '结果统计' },
        children: [
          {
            path: 'result',
            name: 'result',
            component: () => import('@/views/statistics/result.vue'),
            meta: {
              navIndex: '/list',
              subNavIndex: 'result',
              title: '结果统计',
              hasSubNav: true
            }
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router