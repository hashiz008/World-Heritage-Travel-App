import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TopPager from '../views/TopPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TopPage',
    component: TopPager
  },
  {
    path: '/mainPage',
    name: 'MainPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MainPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
