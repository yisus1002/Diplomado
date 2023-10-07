<template lang="">
  <div>
    <div class="Hotel__home">
      <h1 class="Hotel__home__title">Habitacion {{ id }}</h1>
      <hr class="mb-6 bg-gray-400 h-1" />
      <button type="button" class="button_back" @click="goBack">
        <i class="fa-solid fa-arrow-left"></i> Regresar
      </button>
      <div class="container_form">
        <form>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label for="code" class="label_form">Codigo</label>
              <input
                type="text"
                id="code"
                class="input_form"
                placeholder="Ingrese el codigo de habitacion"
                required
              />
            </div>
            <div>
              <label for="type" class="label_form">Tipo</label>
              <select id="type" class="input_form">
                <option selected>Tipo de habitacion</option>
                <option value="STANDAR">Estándar</option>
                <option value="JUNIOR">Junior</option>
                <option value="SUITE">Suite</option>
              </select>
            </div>
            <div>
              <label for="type" class="label_form">Acomodación</label>
              <select id="type" class="input_form">
                <option selected>Tipo de acomodación</option>
                <option value="SINGLE">Sencilla</option>
                <option value="DOUBLE">Doble</option>
                <option value="TRIPLE">Triple</option>
                <option value="CUADRUPLE">Cuádruple</option>
              </select>
            </div>
            <div>
              <label for="type" class="label_form">Hotel</label>
              <select id="type" class="input_form">
                <option selected>Seleccione el hotel</option>
                <option value="123">Silver</option>
                <option value="4321">Costa de oro</option>
              </select>
            </div>
          </div>
          <button type="submit" class="button_form">Guardar</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HabitacionDetalle',
  props: ['id'],
  components: {},
  methods: {
    goBack() {
      this.$router.push('/habitacion');
    },
  },
};
</script>
<style lang=""></style>
