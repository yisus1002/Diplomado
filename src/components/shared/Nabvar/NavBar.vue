<template >
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
</template>
<script>
export default {
  name: "NavBar",
  data(){
    return{
      items: [
                  { title: 'Home', icon: 'fa-solid fa-house', to:'/Home' },
                  { title: 'Hotel', icon: 'fa-solid fa-hotel', to:'/hotel' },
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
<style lang="">
  
</style>