<template lang="">
    <div>
        <div class="flex justify-end">
            <button class="button_back" @click="createHotel">Crear Hotel</button>
        </div>
        
<div class="table_detail">
    <table>
        <thead class="">
            <tr>

                <th scope="col" class="px-6 py-3">
                    Ciudad
                </th>
                <th scope="col" class="px-6 py-3">
                    Hotel
                </th>
                <th scope="col" class="px-6 py-3">
                    NIT
                </th>
                <th scope="col" class="px-6 py-3">
                    Direccion
                </th>
                <th scope="col" class="px-6 py-3">
                    Habitaciones
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Monteria
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    12321323
                </td>
                <td class="px-6 py-4">
                    Monteria calle 64 # 32-12
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                    <button class="button_edit" @click="editHotel('123')">Edit</button>
                    <button class="button_remove" @click="confirmRemoveHotel('123')">Remove</button>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Barranquilla
                </th>
                <td class="px-6 py-4">
                    Costa de oro
                </td>
                <td class="px-6 py-4">
                    23213213
                </td>
                <td class="px-6 py-4">
                    Barranquilla calle 82 # 123-23
                </td>
                <td class="px-6 py-4">
                    30
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                    <button class="button_edit" @click="editHotel('123')">Edit</button>
                    <button class="button_remove" @click="confirmRemoveHotel('123')">Remove</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
</template>
<script>
import Swal from 'sweetalert2'
export default {
    methods: {
        createHotel() {
            this.$router.push('/hotel/new');
        },
        editHotel(id) {
            this.$router.push(`/hotel/${id}`);
        },
        async confirmRemoveHotel(id) {
            const result = await Swal.fire({
                title: 'Confirmar eliminación',
                text: '¿Estas seguro de eliminar este hotel?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar'
            })

            if (result.isConfirmed) {
                this.removeHotel(id);
            }
        },
        removeHotel(id) {
            // Logica para eliminar un hotel
            console.log(`se a eliminado el registro ${id}`);
        }

    }
}
</script>
<style lang="">
    
</style>