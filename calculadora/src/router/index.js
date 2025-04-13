import { createRouter, createWebHistory } from 'vue-router'
import Calculadora from '../views/CalculadoraView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'calculadora',
      component: Calculadora,
    },
  ],
})

export default router
