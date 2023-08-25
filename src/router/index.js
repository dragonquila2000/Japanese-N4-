import { createRouter, createWebHistory } from 'vue-router'
import WordGeneratorN4 from '../components/WordGenerator-N4.vue'
import WordGeneratorN5 from '../components/WordGenerator-N5.vue'
import WordGeneratorKanjiN4 from '../components/WordGenerator-KanjiN4.vue'
import WordGeneratorKanjiN5 from '../components/WordGenerator-KanjiN5.vue'

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
  {
    path: '/Kanji-N4',
    name: 'Kanji-N4',
    component: WordGeneratorKanjiN4
  },
  {
    path: '/Kanji-N5',
    name: 'Kanji-N5',
    component: WordGeneratorKanjiN5
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
