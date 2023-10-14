<template lang="">
    <div class="Hotel__home">
        <h1 class="Hotel__home__title">Hoteles</h1>
        <div class="flex justify-end">
            <button class="button_back" @click="createHotel">Crear Hotel</button>
        </div>
<template v-if="HotelJson?.length>0">
    <div class="table_detail">
            <table>
        <thead class="">
            <tr>
                <th scope="col" class="px-6 py-3">Ciudad</th>
                <th scope="col" class="px-6 py-3">Hotel</th>
                <th scope="col" class="px-6 py-3">NIT</th>
                <th scope="col" class="px-6 py-3">Direccion</th>
                <th scope="col" class="px-6 py-3">Habitaciones</th>
                <th scope="col" class="px-6 py-3">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr 
            v-for="(hotel, index) in HotelJson" :key="index"            
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{hotel?.ciudad}}
                </th>
                <td class="px-6 py-4">{{hotel?.hotel}}</td>
                <td class="px-6 py-4">{{hotel?.nit}}</td>
                <td class="px-6 py-4">{{hotel?.direccion}}</td>
                <td class="px-6 py-4">{{hotel?.habitaciontotal}}</td>
                <td class="flex items-center px-6 py-4 space-x-3">
                    <button class="button_info" @click="info(hotel?.id)"><i class="fa-solid fa-eye"></i></button>
                    <button class="button_edit" @click="editHotel(hotel?.id)"><i class="fa-solid fa-pencil"></i></button>
                    <button class="button_remove" @click="confirmRemoveHotel(hotel?.id,)"><i class="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>
        </tbody>
            </table>
    </div>
</template>
<template v-else>
    <div class="alert shadow">
        <p class="text-red-500 text-2xl">No hay datos de hoteles</p>
    </div>
</template>

    </div>
</template>

<script>
import HotelService from '@/services/HotelService';
import Swal from 'sweetalert2';
import { mapMutations } from 'vuex';
export default {
    name:"HotelHome",
    data(){
    return {
        HotelJson:[]
    }
  },
  created(){
    this.getHotel();
  },
    methods: {
        ...mapMutations(['alert']),
        createHotel() {
            this.$router.push('/hotel/new');
        },
        editHotel(id) {
            this.$router.push(`/hotel/${id}`);
        },
        info(id) {
            this.$router.push(`/hotel-info/${id}`);
        },
        confirmRemoveHotel(id) {
            Swal.fire({
                title: 'Confirmar eliminación',
                text: '¿Estas seguro de eliminar este hotel?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.deletedHotel(id);
                }
            });
        },
        getHotel(){
            HotelService.gethotel()
            .then(response=>{
                this.HotelJson=response
            })
            .catch(error=>{
               this.alert({mensage:error,icon:'error'})
            })
        },
        deletedHotel(id){
            HotelService.deletehotel(id)
            .then(()=>{
                this.alert({mensage:`Se a eliminado el hotel ${id}`,icon:'success'});
                this.HotelJson= this.HotelJson.filter((ele)=>ele.id!==id);
            }).catch(error=>{
                this.alert({mensage:error,icon:'error'})
            })
        }
    }
}
</script>
<style scoped></style>