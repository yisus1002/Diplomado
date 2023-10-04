import { createStore } from 'vuex'

import Swal from 'sweetalert2'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
    alert:( state,mensage)=>{
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
        icon: 'success',
        title: mensage
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
