
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './components/LoginView.vue'
import HelloWorld from './components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/hello',
    name: 'Hello',
    component: HelloWorld,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem('authToken')) {
    next('/login')
  } else {
    next()
  }
})

export default router