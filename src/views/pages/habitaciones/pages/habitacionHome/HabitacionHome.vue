<template lang="">
    <div>
        Habitacion home
        <div class="flex justify-end">
            <button class="button_back" @click="crearHabitacion">Crear Habitacion</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HabitacionHome',
    components:{

    },
    data() {
        return {
            
        }
    },
    methods: {
        crearHabitacion(){
            this.$router.push('/habitacion/new')
        }
    }
}
</script>
<style scoped>
    
</style>