import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/category/:categoryName',
    name: 'category',
    component: CategoryView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
