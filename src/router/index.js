import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import Detail from '@/views/Detail.vue'
import Hitung from '@/views/Hitung.vue'

const routes = [
  { path: '/', component: Home, name: 'home'},
  { path: '/contact', component: Contact, name: 'contact' },
  { path: '/detail/:nim', component: Detail, name: 'detail' },
  { path: '/hitung', component: Hitung, name: 'hitung' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router