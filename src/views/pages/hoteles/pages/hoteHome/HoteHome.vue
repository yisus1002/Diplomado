<template lang="">
    <div>
        <div class="flex justify-end">
            <button class="button_back" @click="createHotel">Crear Hotel</button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        createHotel() {
            this.$router.push('/hotel/new');
        }
    }
}
</script>
<style lang="">
    
</style>