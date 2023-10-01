import HotelesModuleRoutes from '../views/pages/hoteles/HotelesModuleRoutes.js' // 
import LandingModuleRoutes from '../views/pages/landing/LandingModuleRoutes' // 
const ViewModuleRoutes = [
  {
    path: '/', // Ruta principal 
    component: () => import('./viewsHome.vue'), // Componente principal del módulo
    children: [
      {
        path: 'home', // Ruta hija
        component: () => import('./pages/landing/LandingView.vue'), // Componente de la página de inicio
        children: [...LandingModuleRoutes],
      },
      {
        path: 'hotel', // Ruta hija, por ejemplo, /hotel
        component: () => import('./pages/hoteles/HotelesView.vue'), // Componente de la página de hoteles
        children: [...HotelesModuleRoutes],
      },
    ],
  },
  {
    path: '/404', // Ruta para mostrar la página de error 404
    component: () => import('./pages/404/ErrorL404.vue'), // Componente de la página de error 404
  },
  {
    path: '/:catchAll(.*)', // Ruta para manejar todas las rutas no encontradas
    redirect: '/404', // Redirigir a la página de error 404
  },
  {
    path: '/',
    redirect: '/home', 
  },
];

export default ViewModuleRoutes;
