import { createRouter, createWebHistory } from 'vue-router' 
import BienvenidoPage from '../pages/BienvenidoPage.vue'
import RealizarVenta from '@/components/RealizarVenta.vue'
import IngresarProductoPage from '@/pages/IngresarProductoPage.vue'


const routes = [
  {
    path: '/',
    name: 'Bienvenido',
    component: BienvenidoPage  // Aquí se muestra la página de bienvenida
  },

  {
    path: '/ingresar-producto',
    name: 'ingresar-producto',
    component: IngresarProductoPage  // Ruta para crear vehículos
  },

  {
    path: '/realizar-venta',
    name: 'realizar-venta',
    component: RealizarVenta  // Ruta para consultar vehículos
  },
 

]

const router = createRouter({
  history: createWebHistory(),  // Crea el historial para las rutas
  routes  // Asigna las rutas a la instancia del router
})

export default router
