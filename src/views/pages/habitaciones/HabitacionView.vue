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
    background-image: url('https://img.freepik.com/fotos-premium/interior-dormitorio-futurista-holografico-inteligente-moderno-alta-tecnologia-ciencia-ficcion-cyberpunk-decoracion-hogar-3d_839035-2515.jpg?w=826');
    min-height: 100vh;
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size:cover ;
}    
</style>