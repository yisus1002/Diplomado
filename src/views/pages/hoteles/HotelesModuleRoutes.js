const HotelesModuleRoutes =[
    {
        path: '',
        component: ()=> import('./pages/hoteHome/HoteHome.vue'),
    },
    {
        path: '/hotel/:id', // Ruta con parámetro dinámico :id
        component: () => import('./pages/hotel-detalle/HotelDetalle.vue'), // Componente para mostrar los detalles del hotel
        props: true, // Habilitar el paso de :id como propiedad al componente
      },
    {
        path: '/hotel-info/:id', // Ruta con parámetro dinámico :id
        component: () => import('./pages/hotel-info/hotelInfor.vue'), // Componente para mostrar los detalles del hotel
        props: true, // Habilitar el paso de :id como propiedad al componente
      },

]

export default HotelesModuleRoutes