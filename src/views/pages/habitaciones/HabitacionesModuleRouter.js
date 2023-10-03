const HabitacionesModuleRoutes =[
    {
        path: '',
        component: ()=> import('./pages/habitacionHome/HabitacionHome.vue'),
    },
    {
        path: '/habitacion/:id', // Ruta con parámetro dinámico :id
        component: () => import('./pages/habitacion-detalle/HabitacionDetalle.vue'), // Componente para mostrar los detalles del hotel
        props: true, // Habilitar el paso de :id como propiedad al componente
      },

]

export default HabitacionesModuleRoutes