<template lang="">
    <div class="Hotel__home">
        <h1 class="Hotel__home__title">Hoteles</h1>
        <div class="flex justify-end">
            <button class="button_back" @click="createHotel">Crear Hotel</button>
        </div>
<template v-if="HotelJson.length>0">
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
                    {{hotel?.Ciudad}}
                </th>
                <td class="px-6 py-4">{{hotel?.Hotel}}</td>
                <td class="px-6 py-4">{{hotel?.NIT}}</td>
                <td class="px-6 py-4">{{hotel?.Direccion}}</td>
                <td class="px-6 py-4">{{hotel?.Habitaciones.length}}</td>
                <td class="flex items-center px-6 py-4 space-x-3">
                    <button class="button_edit" @click="editHotel(hotel?.NIT)">Edit</button>
                    <button class="button_remove" @click="confirmRemoveHotel(hotel?.NIT, index)">Remove</button>
                </td>
            </tr>
        </tbody>
            </table>
    </div>
</template>
<template v-else>
    <div class="alert shadow">
        <p class="text-red-500 text-2xl">No hay datos de habitaciones</p>
    </div>
</template>

    </div>
</template>
<script>
import Swal from 'sweetalert2';
import { mapMutations } from 'vuex';
export default {
    name:"HotelHome",
    data(){
    return {
        HotelJson:[
            {
                Ciudad:"Monteria",
                Hotel:"Miami Center",
                NIT:12083231,
                Direccion:"Cra 5A 23-59",
                Habitaciones:[
                {
                    Codigo:"123",
                    Tipo:"Estándar",
                    Acomodacion:"Sencilla",
                },
                {
                    Codigo:"124",
                    Tipo:"Junior",
                    Acomodacion:"Doble",
                },
                {
                    Codigo:"125",
                    Tipo:"Estándar",
                    Acomodacion:"Cuádruple",
                },
                {
                    Codigo:"126",
                    Tipo:"Suite",
                    Acomodacion:"Triple",
                }, 
                ],
            },
            {
                Ciudad:"Medellin",
                Hotel:"Hong Kong",
                NIT:12983231,
                Direccion:"Cra 5A 23-59",
                Habitaciones:[
                {
                    Codigo:"123",
                    Tipo:"Estándar",
                    Acomodacion:"Sencilla",
                },
                {
                    Codigo:"124",
                    Tipo:"Junior",
                    Acomodacion:"Doble",
                },
                {
                    Codigo:"125",
                    Tipo:"Estándar",
                    Acomodacion:"Cuádruple",
                },
                {
                    Codigo:"126",
                    Tipo:"Suite",
                    Acomodacion:"Triple",
                }, 
                ],
            },
        ]
    }
  },
    methods: {
        ...mapMutations(['alert']),
        createHotel() {
            this.$router.push('/hotel/new');
        },
        editHotel(id) {
            this.$router.push(`/hotel/${id}`);
        },
        confirmRemoveHotel(id, index) {
            Swal.fire({
                title: 'Confirmar eliminación',
                text: '¿Estas seguro de eliminar este hotel?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.removeHotel(id, index);
                }
            });
        },
        removeHotel(id) {
            this.alert(`Se a eliminado el hotel ${id}`);
            this.HotelJson= this.HotelJson.filter((ele)=>ele.NIT!==id);
            console.log(id);
        }
    }
}
</script>
<style lang="css" scoped>
.Hotel__home{
    
    @apply mt-4

}

    
</style>