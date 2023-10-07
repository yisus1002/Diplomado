<template lang="">

<nav class="dark:bg-gray-800 dark:divide-gray-800">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">

  <div class="flex items-center  order-1">
      <button id="dropdownDividerButton" type="button" class="user__button"  data-dropdown-toggle="dropdownDivider">
        <i class="fa-solid fa-user-tie"></i>
      </button>
  </div>


<!-- Dropdown menu -->
<div id="dropdownDivider" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-800 dark:divide-gray-600">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">

      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ajustes</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Perfil</a>
      </li>
    </ul>
    <div class="py-2">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Salir</a>
    </div>
</div>


  <div class=""> 
    <button @click="toogleHMenu" type="button" class="Hamburger">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>
  </div>
  </div>
</nav>

</template>
<script>
export default {
    name: 'NavBarMenu',
    methods:{
        toogleHMenu(){
          this.$emit('HMenu')
        }
    }
}
</script>
<style scoped>
    .user__button{
        background-color: rgb(0, 255, 115);
        height: 40px;
        width: 40px;
        @apply flex mr-3 text-2xl justify-center items-center rounded-full p-3 text-blue-500
    }
</style>