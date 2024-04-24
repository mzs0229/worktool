import { createRouter, createWebHistory } from 'vue-router'


import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Chat from '@/views/Chat/index.vue'
import Mail from '@/views/Mail/index.vue'
import Link from '@/views/Link/index.vue'
import Other from '@/views/Other/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,

      children:[
        {
          path: '/chat',
          component: Chat
        },
        {
          path: '/mail',
          component: Mail
        },
        {
          path: '/link',
          component: Link
        },
        {
          path: '/other',
          component: Other
        },
        {
          path: 'category',
          component: Category,
        },
      ]
    },
    {
      path: '/login',
      name:'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
