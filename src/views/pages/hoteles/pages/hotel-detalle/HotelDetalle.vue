<template>
  <div class="Hotel__home">

    <h1 class="Hotel__home__title">Hotel {{ id }}</h1>
    <hr class="mb-6 bg-gray-400 h-1" />
    <button type="button" class="button_back" @click="goBack"><i class="fa-solid fa-arrow-left"></i> Regresar</button>
    <div class="container_form">

      <form ref="FormuHotel" @submit.prevent="send">
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label for="city" class="label_form">Ciudad</label>
          <input v-model="FormuHotel.ciudad" type="text" id="city" class="input_form" placeholder="Ingrese la ciudad" required>
        </div>
        <div>
          <label for="name_hotel" class="label_form">Hotel</label>
          <input v-model="FormuHotel.hotel" type="text" id="name_hotel" class="input_form" placeholder="Ingrese el nombre del hotel" required>
        </div>
        <div>
          <label for="nit" class="label_form">NIT</label>
          <input v-model="FormuHotel.nit" type="text" id="nit" class="input_form" placeholder="Ingrese el NIT" required>
        </div>
        <div>
          <label for="address" class="label_form">Dirección</label>
          <input v-model="FormuHotel.direccion" type="text" id="address" class="input_form" placeholder="Ingrese la dirección" required>
        </div>
        <div>
          <label for="number_rooms" class="label_form">Habitaciones</label>
          <input v-model="FormuHotel.habitaciontotal" type="number" min="1" id="number_rooms" class="input_form" placeholder="Ingrese el numero maximo de habitaciones"
            required>
        </div>

      </div>
      <button type="submit" class="button_form">Guardar</button>
    </form>
<div class="slide-in-top" v-if="HotelJson.habitaciontotal>0">
  <h1 class="text-center text-2xl title_habitacion">Asignar habitaciones</h1>
    <form class="table_detail">
    <table>
      <thead class="">
            <tr>
                <th scope="col" class="px-6 py-3">#</th>
                <th scope="col" class="px-6 py-3">Codigo</th>
                <th scope="col" class="px-6 py-3">Tipo</th>
                <th scope="col" class="px-6 py-3">Acomodación</th>
                <th scope="col" class="px-6 py-3">Cargado</th>
                <th scope="col" class="px-6 py-3">Opciones</th>
            </tr>
      </thead>
      <tbody>
        <tr v-for="(habitacion, index) in habitacionJson" :key="index">
  <td class="px-6 py-4">{{ index + 1 }}</td>
  <td>
    <input
      v-model="habitacion.codigo"
      type="text"
      class="input_form"
      placeholder="Ingrese el codigo de habitacion"
      required
    />
  </td>
  <td>
    <select v-model="habitacion.tipo" class="input_form" required>
      <option v-for="(tipo, index) in TipoHabitacion" :key="index" :value="tipo"  :selected="index === 0" :disabled="index === 0">{{ tipo }}</option>
    </select>
  </td>
  <td>
    <select v-model="habitacion.acomodacion" class="input_form" required>
      <option v-for="(acomodacion, index) in TipoAcomodacion" :key="index" :value="acomodacion"  :selected="index === 0" :disabled="index === 0">{{ acomodacion }}</option>
    </select>
  </td>
  <td class="px-6 py-4 text-center">
    <i class="fa-solid fa-xmark text-red-500"></i>
    <i class="fa-solid fa-check text-green-500"></i>
  </td>
  <td class="flex items-center px-6 py-4 space-x-3">
    <button type="button" class="button_edit" @click="editHabitacion(habitacion.codigo)"><i class="fa-solid fa-pencil"></i></button>
    <button type="button" class="button_remove" @click="confirmRemoveHabitacion(habitacion.codigo, index)"><i class="fa-solid fa-trash-can"></i></button>
    <button type="button" class="button_saved" @click="saved(habitacion)"><i class="fa-solid fa-cloud-arrow-up"></i></button>
  </td>
</tr>

      </tbody>
    </table>
    </form>
    <div class="">
      <button v-if="HotelJson?.habitaciontotal>habitacionJson.length" type="button" @click="createHabitacion" class="button_form button_crear"><i class="fa-solid fa-plus"></i></button>
    </div>
</div>
    </div>

  </div>
</template>
  
<script>
import HotelService from '@/services/HotelService';
import { mapMutations } from 'vuex';
export default {
  props: ['id'], 
  data(){
    return {
      TipoHabitacion: ['Seleccione','Estandar', 'Junior', 'Suite'],
      TipoAcomodacion:['Seleccione','Sencilla', 'Doble', 'Triple', 'Cuádruple'],
      HotelJson:{},
      habitacionJson:[],
      FormuHotel:{}
    }
  },
  created(){

   const id = this.$route.params.id;

    if (id !== 'new') {
      console.log(this.id);
      this.getHotelByID(id);
    }
    this.loadFormu({ ciudad:'', hotel:'', nit:'', direccion:'', habitaciontotal:0});

  },

  mounted() {


  },
  methods: {
    ...mapMutations(['alert']),
    goBack() {
      this.$router.push('/hotel');
    },
    editHabitacion(){

    },
    confirmRemoveHabitacion(codigo, index){
      this.habitacionJson.splice(index, 1);

      // this.habitacionJson = this.habitacionJson.filter((ele) => ele.codigo !== index);

    },
    saved(habitacion){
      console.log(habitacion);
      if(habitacion.codigo==='',habitacion.tipo==='Seleccione',habitacion.acomodacion==='Seleccione'){
        this.alert({mensage:`Tiene campos sin completar`,icon:'warning'});
        return;
      }
      this.alert({mensage:`Habitaciín creada`,icon:'success'});

    },
    send(){
      if(this.HotelJson?.id){
        this.putHotel(this.HotelJson.id, this.FormuHotel);
        return;
      }
      this.postHotel(this.FormuHotel);
    },
    limpiarFormHotel(){
      this.$refs.FormuHotel.reset();
    },
    createHabitacion(){
      if(this.HotelJson?.habitaciontotal>this.habitacionJson.length){
        this.habitacionJson.push({
          codigo:'',
          tipo:'Seleccione',
          acomodacion:'Seleccione',
        })
      }

    },
    loadFormu(hotel){
      this.FormuHotel={
        ciudad:hotel.ciudad,
        hotel:hotel.hotel,
        nit:hotel.nit,
        direccion:hotel.direccion,
        habitaciontotal:hotel.habitaciontotal,
      }

    },
    getHotelByID(id){
      HotelService.gethotelId(id)
      .then(response => {
        console.log(response);
          this.HotelJson = response;
          this.loadFormu(this.HotelJson)
        })
        .catch(error => {
          console.log(error);
        })
    },
    postHotel(hotel){
      HotelService.posthotel(hotel)
      .then(response=>{
        console.log(response);
        this.HotelJson=response;
        this.alert({mensage:`Hotel creado`,icon:'success'});
      })
      .catch(error => {
        console.log(error);
      })
    },
    putHotel(id, hotel){
      HotelService.puthotel(id, hotel)
      .then(response => {
        console.log(response);
        this.HotelJson=response;
        this.alert({mensage:`Hotel actualizado`,icon:'success'});
        this.loadFormu(response)
      })
      .catch(error=>{
        console.log(error);
      })
    }
  }
};
</script>
<style scoped>
.title_habitacion{
  text-align: center;
  font-weight: bold;
  color: #FFFF;
  @apply
  my-3
}
button.button_crear{
  border-radius: 100%;
  width: 40px;
  height: 40px;
  display: grid;
  place-content: center;
  @apply my-2
}
</style>
