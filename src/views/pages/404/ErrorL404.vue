<template lang="">
<div class="E404 " >
    <div  class="cardCont">
    <h5 class="title">404 - Page Not Found</h5>
    <router-link class="btn_volver" to="/home"><i class="fa-solid fa-arrow-left"></i> Volver al inicio </router-link>
    <img class="img404" src="@/assets/images/404/E404.jpg" alt="image description">

</div>
</div>

</template>
<script>
export default {
    name:'ErrorL404',
    components:{
        
    }
    
}
</script>
<style scoped>
    .E404{
        height:100vh; align-items:center;
        @apply flex justify-center 
    }
    .cardCont{
        height: 70%;
        @apply block 
        max-w-xl p-6 
        bg-white 
        border 
        border-gray-200 
        rounded-lg 
        shadow 
        
        hover:bg-gray-100 
        dark:bg-gray-800 
        dark:border-gray-700 
        dark:hover:bg-gray-700
    }
    .title{
        @apply 
        p-3
        mb-2 
        text-2xl
        sm:text-4xl
        md:text-5xl
        font-bold 
        tracking-tight 
        text-gray-900 
        dark:text-white

    }
    .btn_volver{
        @apply text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700
    }
    .img404{
        @apply h-auto max-w-full rounded my-5
    }
</style>