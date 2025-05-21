import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/admin/login',
    //   name: 'admin-login',
    //   component: () => import('../views/AdminLoginView.vue') // Você criará depois
    // }
  ]
})

export default router