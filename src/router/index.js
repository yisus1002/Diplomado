import { createRouter, createWebHistory } from 'vue-router';
import ViewModuleRoutes from '../views/ViewModuleRoutes.js';

const routes = [
  {
    path: '/',
    redirect: '/home', 
  },
  ...ViewModuleRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
