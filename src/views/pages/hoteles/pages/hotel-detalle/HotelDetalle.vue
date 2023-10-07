<template>
  <div class="Hotel__home">
    <!-- <h2>Detalles del hotel {{ id }}</h2> -->
    <!-- Resto de la presentación de los detalles del hotel -->

    <h1 class="Hotel__home__title">Hotel {{ id }}</h1>
    <hr class="mb-6 bg-gray-400 h-1" />
    <button type="button" class="button_back" @click="goBack"><i class="fa-solid fa-arrow-left"></i> Regresar</button>
    <div class="container_form">
      <form>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label for="city" class="label_form">Ciudad</label>
          <input type="text" id="city" class="input_form" placeholder="Ingrese la ciudad" required>
        </div>
        <div>
          <label for="name_hotel" class="label_form">Hotel</label>
          <input type="text" id="name_hotel" class="input_form" placeholder="Ingrese el nombre del hotel" required>
        </div>
        <div>
          <label for="nit" class="label_form">NIT</label>
          <input type="text" id="nit" class="input_form" placeholder="Ingrese el NIT" required>
        </div>
        <div>
          <label for="address" class="label_form">Dirección</label>
          <input type="text" id="address" class="input_form" placeholder="Ingrese la dirección" required>
        </div>
        <div>
          <label for="number_rooms" class="label_form">Habitaciones</label>
          <input type="number" id="number_rooms" class="input_form" placeholder="Ingrese el numero maximo de habitaciones"
            required>
        </div>

      </div>
      <button type="submit" class="button_form">Guardar</button>
    </form>
    </div>
  </div>
</template>
  
<script>
export default {
  props: ['id'], // Recibe el valor de id como una propiedad
  data(){
    return {
      
    }
  },
  mounted() {
    // Imprimir el valor de id en la consola
    console.log('ID del hotel:', this.id);

    // Resto de la lógica del componente
    const id = this.$route.params.id
    if (id !== 'new') {
      // Imprimir el valor de id en la consola
      console.log('ID del hotel:', id);
    }
  },
  methods: {
    goBack() {
      this.$router.push('/hotel');
    }
  }
};
</script>
<style scoped>

</style>
