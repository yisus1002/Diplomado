<template >
    <div class="Hotel_home Hotel__home" >
            <h1 class="Hotel__home__title">Información Hotel {{ id }}</h1>
        <hr class="mb-6 bg-gray-400 h-1" />
        <button type="button" class="button_back" @click="goBack"><i class="fa-solid fa-arrow-left"></i> Regresar</button>
        
        <div class="container_detalle"> 
            <div class="flex items-center justify-center p-3">
                    <img src="https://loremflickr.com/cache/resized/65535_52546335077_3169299263_c_640_480_nofilter.jpg" class="rounded-xl max-w-60  mx-auto">
                </div>
            <div class="container_form">
                <div class="grid gap-6 mb-6 md:grid-cols-1">
                        <h1 class="detaller_form">{{ Detalle_hotel.hotel }}</h1>
                    <div class="grip  gap-6 mb-6 md:grid-cols-2">
                            <P class="detalle_h2">Nit: {{ Detalle_hotel.nit }}</P>
                            <P class="detalle_h2">Ciudad: {{ Detalle_hotel.ciudad }}</P>
                            <P class="detalle_h2">Direccion: {{ Detalle_hotel.direccion }}</P>
                            <P class="detalle_h2">Habitaciones: {{ Detalle_hotel.habitaciontotal }}</P>
                    </div>
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
        HotelJson:{},
        Detalle_hotel:{}
    }
  },

    methods: {
        ...mapMutations(['alert']),
        goBack() {
            this.$router.push('/hotel')
        },
        loadDetalle(hotel){
            this.Detalle_hotel={
                hotel:hotel.hotel,
                ciudad:hotel.ciudad,
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
                this.loadDetalle(this.HotelJson)
            })
            .catch(error => {
                console.log(error);
            });
        },
    },
    mounted() {
        this.getHotelByID(this.id);
    },
};
</script>
<style scoped>

</style>