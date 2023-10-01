<template lang="">

<button @click="toogle" data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="Hamburger">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" :class="'aside__content ' + customClasses" aria-label="Sidebar">
   <div class="aside__content__menu">
      <NavBar @clase-toggled="toogle"></NavBar>
   </div>
</aside>

<div class="p-4 sm:ml-64">
    <router-view/>
</div>
</template>
<script>
import NavBar  from '../components/shared/Nabvar/NavBar.vue'
export default {
    name:'ViewHome',
    components:{
        NavBar
    },
    data(){
      return{
         togg:true,
         customClasses:'-translate-x-full',
      }
    },
    methods:{
      toogle(){
         (this.customClasses.includes('-translate-x-full')) ?  this.customClasses = this.customClasses.replace('-translate-x-full', '-translate-x-0') :  this.customClasses = this.customClasses.replace('-translate-x-0', '-translate-x-full');
      },
      prueba(){

      }
    }
    
}
</script>
<style lang="">
    
</style>