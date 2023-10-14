<template lang="">
  <div>
    <div class="Hotel__home">
      <h1 class="Hotel__home__title">Habitacion {{ id }}</h1>
      <hr class="mb-6 bg-gray-400 h-1" />
      <button type="button" class="button_back" @click="goBack">
        <i class="fa-solid fa-arrow-left"></i> Regresar
      </button>
      <div class="container_form">
        <form ref="FormuHabitacion" @submit.prevent="send">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label for="code" class="label_form">Codigo</label>
              <input
                v-model="FormuHabitacion.codigo"
                type="text"
                id="code"
                class="input_form"
                placeholder="Ingrese el codigo de habitacion"
                required
              />
            </div>
            <div>
              <label for="type" class="label_form">Tipo</label>
              <select
                v-model="FormuHabitacion.tipo"
                id="type"
                class="input_form"
              >
                <option selected>{{ FormuHabitacion.tipo }}</option>
                <option
                  v-for="(tipo, index) in TipoHabitacion"
                  :key="index"
                  :value="tipo"
                  :selected="index === 0"
                  :disabled="index === 0"
                >
                  {{ tipo }}
                </option>
              </select>
            </div>
            <div>
              <label for="type" class="label_form">Tipo Acomodacion</label>
              <select
                v-model="FormuHabitacion.acomodacion"
                id="type"
                class="input_form"
              >
                <option selected>{{ FormuHabitacion.acomodacion }}</option>
                <option
                  v-for="(acomodacion, index) in TipoAcomodacion"
                  :key="index"
                  :value="acomodacion"
                  :selected="index === 0"
                  :disabled="index === 0"
                >
                  {{ acomodacion }}
                </option>
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
import HabitacionService from '@/services/HabitacionService';
import { mapMutations } from 'vuex';
export default {
  name: 'HabitacionDetalle',
  props: ['id'],
  data() {
    return {
      TipoHabitacion: ['Seleccione', 'Estandar', 'Junior', 'Suite'],
      TipoAcomodacion: [
        'Seleccione',
        'Sencilla',
        'Doble',
        'Triple',
        'Cuádruple',
      ],
      HabitacionJson: [],
      FormuHabitacion: {},
    };
  },
  created() {
    const id = this.$route.params.id;
    if (id !== 'new') {
      this.getHabitacionByID(id);
    }
    this.loadFormu({});
  },
  methods: {
    ...mapMutations(['alert']),
    goBack() {
      this.$router.push('/habitacion');
    },
    editHabitacion() {},
    confirmRemoveHabitacion(codigo, index) {
      console.log(codigo, index);
    },
    limpiarFormHabitacion() {
      this.$refs.FormuHabitacion.reset();
    },
    loadFormu(habitacion) {
      console.log(habitacion);
      this.FormuHabitacion = habitacion;
    },
    getHabitacionByID(id) {
      HabitacionService.getHabitacionId(id)
        .then((response) => {
          this.HabitacionJson = response;
          this.loadFormu(this.HabitacionJson);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    putHabitacion(id, habitacion) {
      HabitacionService.putHabitacion(id, habitacion)
        .then((response) => {
          console.log(response);
          this.HabitacionJson = response;
          this.alert({ mensage: 'Habitacion actualizada', icon: 'success' });
          this.loadFormu(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang=""></style>
