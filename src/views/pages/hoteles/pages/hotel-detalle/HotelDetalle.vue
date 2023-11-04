<template>
  <div class="Hotel__home">

    <h1 class="Hotel__home__title ">Hotel {{ id }}</h1>
    <hr class="mb-6 bg-gray-400 h-1" />
    <button type="button" class="button_back" @click="goBack"><i class="fa-solid fa-arrow-left"></i> Regresar</button>
    <div class="container_form">

      <form ref="FormuHotel" @submit.prevent="send">
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label for="city" class="label_form">Ciudad</label>
          <select v-model="FormuHotel.city_id" class="input_form" required>
            <option v-for="(city, index) in ciudades" :key="index" :value="city.id"  :selected="index === 0" :disabled="index === 0">{{ city.name }}</option>
          </select>
          <!-- <input v-model="FormuHotel.city_id" type="text" id="city" class="input_form" placeholder="Ingrese la ciudad" required> -->
        </div>
        <div>
          <label for="name_hotel" class="label_form">Hotel</label>
          <input v-model="FormuHotel.name" type="text" id="name_hotel" class="input_form" placeholder="Ingrese el nombre del hotel" required>
        </div>
        <div>
          <label for="nit" class="label_form">NIT</label>
          <input v-model="FormuHotel.nit" type="text" id="nit" class="input_form" placeholder="Ingrese el NIT" required>
        </div>
        <div>
          <label for="address" class="label_form">Dirección</label>
          <input v-model="FormuHotel.address" type="text" id="address" class="input_form" placeholder="Ingrese la dirección" required>
        </div>
        <div>
          <label for="number_rooms" class="label_form">Habitaciones</label>
          <input v-model="FormuHotel.num_rooms" type="number" min="1" id="number_rooms" class="input_form" placeholder="Ingrese el numero maximo de habitaciones"
            required>
        </div>

      </div>
      <button type="submit" class="button_form">Guardar</button>
    </form>
<div class="slide-in-top" v-if="HotelJson?.num_rooms>0">
  <h1 class="text-center text-2xl title_habitacion">Asignar habitaciones</h1>
    <form class="table_detail">
    <table>
      <thead class="">
            <tr>
                <th scope="col" class="px-6 py-3">#</th>
                <th scope="col" class="px-6 py-3">Cantidad</th>
                <th scope="col" class="px-6 py-3">Tipo</th>
                <th scope="col" class="px-6 py-3">Acomodación</th>
                <th scope="col" class="px-6 py-3">Cargado</th>
                <th scope="col" class="px-6 py-3">Opciones</th>
            </tr>
      </thead>
      <tbody>
        
        <tr  v-for="(habitacion, index) in habitacionesJson" :key="index">
  <td class="px-6 py-4">{{ index + 1 }}</td>
  <td>
    <input ref="myParagraph"
      v-model="habitacion.quantity"
      type="number"
      min="1"
      class="input_form"
      required
      />
  </td>
  <td>
    <select v-model="habitacion.type.id" class="input_form" required>
      <option v-for="(tipo, index) in TipoHabitacion" :key="index" :value="tipo.id"  :selected="index === 0" :disabled="index === 0">{{ tipo.name }}</option>
    </select>
  </td>
  <td>
    <select v-model="habitacion.accommodation.id" class="input_form" required>
      <option v-for="(acomodacion, index) in TipoAcomodacion" :key="index" :value="acomodacion.id"  :selected="index === 0" :disabled="index === 0">{{ acomodacion.name }}</option>
    </select>
  </td>
  <td class="px-6 py-4 text-center">
    <i v-if="!habitacion.id" class="fa-solid fa-xmark text-red-500"></i>
    <i v-if="habitacion.id" class="fa-solid fa-check text-green-500"></i>
  </td>
  <td class="flex items-center px-6 py-4 space-x-3">
    <button v-if="habitacion.id" type="button" class="button_edit" @click="editHabitacion(habitacion)"><i class="fa-solid fa-pencil"></i></button>
    <button type="button" class="button_remove" @click="confirmRemoveHabitacion(habitacion, index)"><i class="fa-solid fa-trash-can"></i></button>
    <button v-if="!habitacion.id" type="button" class="button_saved" @click="saved(
                { 
                  quantity: habitacion.quantity,
                  room_type_id: habitacion.type.id,
                  accommodation_id: habitacion.accommodation.id,
                }, index
    )"><i class="fa-solid fa-cloud-arrow-up"></i></button>
  </td>
</tr>

      </tbody>
    </table>
    </form>
    <div class="">
      <button v-if="HotelJson?.num_rooms> verificaH" type="button" @click="createHabitacion" class="button_form button_crear"><i class="fa-solid fa-plus"></i></button>
    </div>
</div>
    </div>

  </div>
</template>
  
<script>
import HotelService from '@/services/HotelService';
import HabitacionService from '@/services/HabitacionService';
import { mapMutations } from 'vuex';
import Citys from '@/services/ServicesSelectores';
import Tiposroom from '@/services/ServicesSelectores'
import Swal from 'sweetalert2';
import Acomodacion from '@/services/ServicesSelectores'
export default {
  props: ['id'], 
  data(){
    return {
      TipoHabitacion: [],
      TipoAcomodacion:[],
      HotelJson:{},
      habitacionesJson:[],
      FormuHotel:{},
      ciudades:[],
      verificaH:0
    }
  },
  created(){

   const id = this.$route.params.id;

    if (id !== 'new') {
      // console.log(this.id);
      this.getHotelByID(id);
      this.getHabitacionByID(id);
    }else{
      this.loadFormu({ city:{id:0,name:'Seleccione'}, name:'', nit:'', address:'', num_rooms:0, tipo:{id:0,name:'Seleccione'}, acomodacion:{id:0,name:'Seleccione'},});

    }
  },

  mounted() {
    this.getCitys();
    this.getTyperooms();
    this.getAcomodation();
    
  },
  updated() {
    this.$nextTick(() => {
      this.verificaH =( this.verificarHabitaciones(this.habitacionesJson));
    });
  
  },
  methods: {
    ...mapMutations(['alert']),
    goBack() {
      this.$router.push('/hotel');
    },
    
    editHabitacion(habitacion, index){
      let habiAux ={
        hotel_id: this.HotelJson?.id,
        room_type_id: habitacion.type.id,
        accommodation_id: habitacion.accommodation.id,
        quantity: habitacion.quantity
      }
      if(habitacion.id){
        this.putHabitacion(habitacion.id, habiAux, index);
      }else{
        this.alert();
      }
    },
    confirmRemoveHabitacion(habitacion, index){
      if(!habitacion?.id){
        this.habitacionesJson.splice(index, 1);
        return;
      }
      Swal.fire({
        title: 'Confirmar eliminación',
        text: '¿Estás seguro de eliminar esta habitación?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => { 
        result.isConfirmed && this.deleteHabitacion(habitacion.id, index);
      });
    },
    saved(habitacion , index){
      let habiAux ={
        ...habitacion,
        hotel_id: this.HotelJson?.id
      }
      if(habiAux){
        this.postHabitacion(habiAux, index);
      }
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

      if(this.HotelJson?.num_rooms>this.habitacionesJson.length){
        this.habitacionesJson.push({
          quantity:1,
          type:{id: 0, name: 'Seleccione'},
          accommodation:{id: 0, name: 'Seleccione'},
        })
      }

    },
    loadFormu(hotel){

      this.FormuHotel={
        city_id: hotel.city?.id,
        name: hotel.name,
        nit: hotel.nit,
        address: hotel.address,
        num_rooms: hotel?.num_rooms
      }
    },
    getCitys(){
      Citys.getCityes()
      .then(response => {
        this.ciudades = response;
        this.ciudades.unshift({id:0,name:'Seleccione'});
      })
      .catch(error => {
                this.alert({mensage:error?.response?.data?.message,icon:'error'});
      })
    },
    getTyperooms(){
      Tiposroom.getTyperooms()
      .then(response => {
        this.TipoHabitacion = response;
        this.TipoHabitacion.unshift({id:0,name:'Seleccione'});
      })
      .catch(error => {
        this.alert({mensage:error?.response?.data?.message,icon:'error'});
        console.log(error?.response?.data?.mensage);
      })
    },
    getAcomodation(){
      Acomodacion.getAcomodation()
      .then(response => {
        this.TipoAcomodacion = response;
        this.TipoAcomodacion.unshift({id:0,name:'Seleccione'});
      })
      .catch(error => {
        this.alert({mensage:error?.response?.data?.message,icon:'error'});
        console.log(error?.response?.data?.mensage);
      })
    },
    getHotelByID(id){
      HotelService.gethotelId(id)
      .then(response => {
        if(!response.data){
            this.goBack();
            return;
          }        
        this.HotelJson = response.data;
          this.loadFormu(this.HotelJson)
        })
        .catch(error => {
                  this.alert({mensage:error?.response?.data?.message,icon:'error'});
        console.log(error?.response?.data?.message);
        this.goBack();
        })
    },
    verificarHabitaciones(data){
      const sumaQuantity = data.reduce((acumulador, elemento) => {
        return acumulador + elemento.quantity;
      }, 0);
      return sumaQuantity;
    },
    getHabitacionByID(id) {
      HabitacionService.getHabitacionId(id)
        .then((response) => {
          this.habitacionesJson = response.data;
          console.log(this.verificarHabitaciones(this.habitacionesJson));
        })
        .catch((error) => {
          this.alert({ mensage: error, icon: 'error' });
        });
    },
    postHotel(hotel){
      HotelService.posthotel(hotel)
      .then(response=>{
        // console.log(response);
        this.HotelJson=response.data;
        console.log(this.HotelJson);
        this.alert({mensage:`Hotel creado`,icon:'success'});
      })
      .catch(error => {
        this.alert({mensage:error?.response?.data?.message,icon:'error'});
        console.log(error?.response?.data?.message);
      })
    },

    putHotel(id, hotel, index){
      HotelService.puthotel(id, hotel)
      .then(response => {
        this.HotelJson[index]=response.data;
        this.alert({mensage:`Hotel actualizado`,icon:'success'});
        this.loadFormu(this.HotelJson)
      })
      .catch(error=>{

        this.alert({mensage:error?.response?.data?.message,icon:'error'});
        console.log(error?.response?.data?.message);
      })
    },
    postHabitacion(habitacion, index) {
      HabitacionService.postHabitacion(habitacion)
        .then(response => {
          console.log(response);
          let obj={
            id:response.data.id,
            quantity:response.data.quantity,           
            accommodation:this.TipoHabitacion[response.data.accommodation_id],
            type:this.TipoAcomodacion[response.data.room_type_id],
          }
          console.log(this.habitacionesJson)
          this.habitacionesJson[index] = obj;
          this.alert({ mensage: `Habitación creada`, icon: 'success' });
        })
        .catch(error => {
          console.log(error);
          this.alert({ mensage: error?.response?.data?.message || 'Error al crear la habitación', icon: 'error' });
          console.error('Error al crear la habitación:', error);
        });
    },
    putHabitacion(id, habitacion, index){
      HabitacionService.putHabitacion(id, habitacion)
      .then(response => {
        let obj={
            id:response.data.id,
            quantity:response.data.quantity,           
            accommodation:this.TipoHabitacion[response.data.accommodation_id],
            type:this.TipoAcomodacion[response.data.room_type_id],
          }
          
        this.habitacionesJson[index] = obj;
        let  aux=[];
      this.habitacionesJson.forEach(element => {
            if(element.id){
              aux.push(element)
            }
          })
          this.habitacionesJson=aux;
        this.alert({mensage:`Habitación actualizada`,icon:'success'});
      })
      .catch(error=>{ 
        this.alert({mensage:error?.response?.data?.message,icon:'error'});
        console.log(error?.response?.data?.message);
})
    },
    deleteHabitacion(id, index){
      HabitacionService.deleteHabitacion(id)
      .then(response => {
        this.alert({mensage:`Se a elimina la habitación ${id}`,icon:'success'});
      this.habitacionesJson.splice(index, 1);
        console.log(response);
      })
      .catch(error => {
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
