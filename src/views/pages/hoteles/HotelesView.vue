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
        height: 100vh;
        width: 100%;
        /* object-fit: cover; */
        background-image: url('https://img.freepik.com/foto-gratis/casa-lago-casa-iluminada-iluminada-noche_1340-43162.jpg?w=740&t=st=1696660596~exp=1696661196~hmac=dae80e9c1c25e19a5c625b6ff1f03c00f5ca629814d3c3d38c45c51e7c012450');
        background-repeat: no-repeat;
        /* background-size:100% ; */
        background-attachment: fixed;
        background-size:cover ;
    }
</style>