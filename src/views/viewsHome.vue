<template lang="">


<aside class="aside__content" :class="{'-translate-x-full': customClasses}" aria-label="Sidebar">
   <div class="aside__content__menu">
      <button v-if="!customClasses" @click="toogle" type="button" class="exit heartbeat"><i class="fa-solid fa-xmark  text-orange-600 icon__exit"></i></button>
      <NavBar @clase-toggled="toogle"></NavBar>
   </div>
</aside>

<div class=" sm:ml-64">
   <NavBarMenu @HMenu="toogle"></NavBarMenu>
   <div class="">
      <router-view/>
      
   </div>
</div>
</template>
<script>
import NavBar  from '../components/shared/NavBar.vue'
import NavBarMenu  from '../components/shared/NavBarMenu.vue'
export default {
    name:'ViewHome',
    components:{
        NavBar,
        NavBarMenu
    },
    data(){
      return{
         toggExit:true,
         customClasses:true,
      }
    },
    methods:{
      toogle(){
         this.customClasses = !this.customClasses;
         console.log(this.customClasses);
         // (this.customClasses.includes('-translate-x-full')) ?  this.customClasses = this.customClasses.replace('-translate-x-full', '-translate-x-0') :  this.customClasses = this.customClasses.replace('-translate-x-0', '-translate-x-full');
      },
    },
    computed(){
      // this.toogle;
      //  console.log(this.customClasses);
    },
    updated(){
    }
    
}
</script>
<style scoped>
    .exit{
      height: 20px;
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      border-radius: 100%;
      overflow: hidden;
      position: absolute;
      top: 4px;
      right: -4px;
      @apply bg-emerald-200  sm:hidden

   }
</style>