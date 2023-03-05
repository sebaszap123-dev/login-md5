import { createRouter, createWebHistory } from 'vue-router'
import { RegisterView, SignInView, LibraryView } from '../views/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signin',
      component: SignInView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/lib',
      name: 'LibraryIndex',
      component: LibraryView
    },
  ]
})

export default router
