import { createRouter, createWebHistory } from 'vue-router'
import WordGeneratorN4 from '../components/WordGenerator-N4.vue'
import WordGeneratorN5 from '../components/WordGenerator-N5.vue'

const routes = [
  {
    path: '/N4',
    name: 'N4',
    component: WordGeneratorN4
  },
  {
    path: '/N5',
    name: 'N5',
    component: WordGeneratorN5
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
