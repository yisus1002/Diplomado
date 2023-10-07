<template lang="">
    <div class="Hotel__home">
        <h1 class="Hotel__home__title">Habitaciones</h1>
        <div class="flex justify-end">
            <button class="button_back" @click="crearHabitacion">Crear habitación</button>
        </div>
    
        <template v-if="HabitacionesJson.length>0">
            <div class="table_detail">
    <table>
        <thead class="">
            <tr>
                <th scope="col" class="px-6 py-3">Codigo</th>
                <th scope="col" class="px-6 py-3">Tipo</th>
                <th scope="col" class="px-6 py-3">Acomodación</th>
                <th scope="col" class="px-6 py-3">Opciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(Habitacion, index) in HabitacionesJson" :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{Habitacion?.Codigo}}
                </th>
                <td class="px-6 py-4">{{Habitacion?.Tipo}}</td>
                <td class="px-6 py-4">{{Habitacion?.Acomodacion}}</td>
                <td class="flex items-center px-6 py-4 space-x-3">
                    <button class="button_edit" @click="editHabitacion(Habitacion?.Codigo, index)"><i class="fa-solid fa-pencil"></i></button>
                    <button class="button_remove" @click="confirmRemoveHabitacion(Habitacion?.Codigo, index)"><i class="fa-solid fa-trash-can"></i></button>
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
    name: 'HabitacionHome',
    components:{

    },
    data() {
        return {
            HabitacionesJson: [
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
            ]
        }
    },
    methods: {
    ...mapMutations(['alert']),
        crearHabitacion(){
            this.$router.push('/habitacion/new')
        },
        editHabitacion(id) {
            this.$router.push(`/habitacion/${id}`);
        },
        confirmRemoveHabitacion(id, index) {

           Swal.fire({
                title: 'Confirmar eliminación',
                text: '¿Estas seguro de eliminar este Habitacion?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.removeHabitacion(id, index);
                }
            });
        },
        removeHabitacion(id) {
            this.alert(`Se a eliminado la habitación ${id}`);
            this.HabitacionesJson= this.HabitacionesJson.filter((ele)=>ele.Codigo!==id)
        }
    }
}
</script>
<style scoped>
    .Habitacion__home{
        @apply mt-4
    }

</style>