<template lang="">
    <div class="landingContainer">
        <div class="landingContainer__head">
            <h1 class="head__title Hotel__home__title">Admin / Dashboard</h1>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
.landingContainer{
    @apply p-1
}
.landingContainer__head{
    @apply flex
        
    }
    .head__title{
        @apply text-2xl
    }
    .icon__title{
        border: solid 1px red;
        /* border-radius: 100%; */
        margin: 0;
        background-color: rgb(181, 181, 181);
        @apply text-white
        p-3
    }

    
</style>