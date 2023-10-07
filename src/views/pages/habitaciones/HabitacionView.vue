<template lang="">
    <div class="fondo">
        <router-view/>
    </div>
</template>
<script>
export default {
    name:"HabitacionView",
    components:{},
}
</script>
<style scoped>
.fondo{
    height: 100vh;
        width: 100%;
        /* object-fit: cover; */
        background-image: url('https://img.freepik.com/fotos-premium/interior-dormitorio-futurista-holografico-inteligente-moderno-alta-tecnologia-ciencia-ficcion-cyberpunk-decoracion-hogar-3d_839035-2515.jpg?w=826');
        background-repeat: no-repeat;
        /* background-size:100% ; */
        background-attachment: fixed;
        background-size:cover ;
}    
</style>