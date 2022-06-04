import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue')
  },
  {
    path: '/posts',
    name: 'post',
    component: () => import('../views/posts/PostListView.vue')
  },
  {
    path: '/grants',
    name: 'grant',
    component: () => import('../views/grants/GrantListView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
