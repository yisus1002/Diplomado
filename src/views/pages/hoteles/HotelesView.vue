<template lang="">
    <div class="fondo">
        <router-view/>
    </div>
</template>
<script>
export default {
    name: 'HotelesView',
    components:{

    }
}
</script>
<style scoped>
    .fondo{
        background-image: url('https://img.freepik.com/foto-gratis/casa-lago-casa-iluminada-iluminada-noche_1340-43162.jpg?w=740&t=st=1696660596~exp=1696661196~hmac=dae80e9c1c25e19a5c625b6ff1f03c00f5ca629814d3c3d38c45c51e7c012450');
        min-height: 100vh;
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size:cover ;
    }
</style>