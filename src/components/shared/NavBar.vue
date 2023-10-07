<template >
<div class="">
  <div class="cont">
    <img src="../../assets/icons/logo.png" class="cont_logo" alt="Logo">
  </div>
  <ul class="space-y-2 font-medium color">
         <li v-for="(menu, index) in items" :key="index">
            <router-link
            @click="toogleH"
                :to="menu.to" class="aside__item group" :class="{ ' activated': $route.path === menu.to}" aria-current="page" >
              <i :class=" menu.icon"></i>
               <span class="ml-3">{{menu.title}}</span>
            </router-link>
         </li>
      </ul>
</div>
</template>
<script>
export default {
  name: "NavBar",
  data(){
    return{
      items: [
                  { title: 'Dashboard ', icon: 'fa-solid fa-house', to:'/Home' },
                  { title: 'Hotel', icon: 'fa-solid fa-hotel', to:'/hotel' },
                  { title: 'Habitación', icon: 'fa-solid fa-person-shelter', to:'/habitacion' },
                  ],
    }
  },
  methods:{
    toogleH(){
      this.$emit('clase-toggled');
    }
  }
  
}
</script>
<style scoped>
  .cont{
    /* border: solid red 1px; */
    height: 50px;
    margin-bottom:10px ;
  }
  .cont_logo{
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    border-radius: 10px;
  }
</style>