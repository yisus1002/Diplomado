<template lang="">
    <div class="container_detalle cont-card " >
      <div class="flex items-center justify-center p-3">
        <img src="https://loremflickr.com/640/480/business" class="rounded-xl max-w-60 mx-auto" />
      </div>
      <div class="container_form">
        <div class="grid gap-6 mb-6 md:grid-cols-1">
          <!-- <h1 class="detaller_form">{{ Jsonl?.name }}</h1> -->
          <div class="grip gap-6 mb-6 md:grid-cols-2">
            <p class="detalle_h2">Codigp: {{ Jsonl?.id }}</p>
            <p class="detalle_h2">Acomodación: {{ Jsonl?.type?.name }}</p>
            <p class="detalle_h2">Tipo: {{ Jsonl?.accommodation?.name }}</p>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name:'CardHabitacion',
    components:{},
    props:{
        Jsonl:{}
    },
    data(){
        return{
            // Json: {},
        }
    }
}
</script>
<style scoped>
    .cont-card{
        flex-direction: column;
    }
</style>