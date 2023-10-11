import { createStore } from 'vuex'

import Swal from 'sweetalert2'

export default createStore({
  state: {
    apiBaseURL: 'https://6526f588917d673fd76d462f.mockapi.io/'
  },
  getters: {
  },
  mutations: {
    alert:( state,{mensage, icon})=>{
      console.log(mensage);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: icon,
        title: mensage
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
