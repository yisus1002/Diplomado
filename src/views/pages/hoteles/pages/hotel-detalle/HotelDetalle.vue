<template>
    <div>
      <h2>Detalles del hotel {{ id }}</h2>
      <!-- Resto de la presentación de los detalles del hotel -->
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'], // Recibe el valor de id como una propiedad
  
    mounted() {
      // Imprimir el valor de id en la consola
      console.log('ID del hotel:', this.id);
  
      // Resto de la lógica del componente
    },
  };
  </script>
  