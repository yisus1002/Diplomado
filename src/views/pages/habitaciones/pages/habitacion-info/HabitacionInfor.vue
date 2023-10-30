<template lang="">
    <div>
        <div class="Hotel_home Hotel__home" >
            <h1 class="Hotel__home__title">Información Hotel {{ id }}</h1>
        <hr class="mb-6 bg-gray-400 h-1" />
        <button type="button" class="button_back" @click="goBack"><i class="fa-solid fa-arrow-left"></i> Regresar</button>
        
        <div class="container_detalle"> 
            <div class="flex items-center justify-center p-3">
                    <img :src="Detalle_habitacion.img" class="rounded-xl max-w-60  mx-auto">
                </div>
            <div class="container_form">
                <div class="grid gap-6 mb-6 md:grid-cols-1">
                        <h1 class="detaller_form">Habitación: {{ Detalle_habitacion.codigo }}</h1>
                    <div class="grip  gap-6 mb-6 md:grid-cols-2">
                            <p class="detalle_h2">Tipo: {{ Detalle_habitacion.tipo }}</P>
                            <p class="detalle_h2">Acomodación: {{ Detalle_habitacion.acomodacion }}</P>
                    </div>
                </div>
                
            </div>
    
        </div>
        

    </div>
    </div>
</template>
<script>
import HabitacionService from '@/services/HabitacionService';
import { mapMutations } from 'vuex';
export default {
    props:['id'],
    data(){
        return{
            Detalle_habitacion:{}
        }
    },

        methods: {
            ...mapMutations(['alert']),
        goBack() {
            this.$router.push('/habitacion')
        },
        getHabitacionID(id){
            HabitacionService.getHabitacionId(id)
            .then(response => {
                console.log(response);
                this.Detalle_habitacion = response;
            })
            .catch(error => {
                console.log(error);
            });
        },
    },
    mounted() {
        this.getHabitacionID(this.id);
    },
    
}
</script>
<style lang="">
    
</style>