import axios from 'axios';
import store from '@/store/index';
const apiBaseURL = store.state.apiBaseURL;

export default {
    gethotel() {
        return axios.get(`${apiBaseURL}/hotels`)
          .then(response => response.data);
      },
    
      gethotelId(id) {
        return axios.get(`${apiBaseURL}/hotels/${id}`)
          .then(response => response.data);
      },
    
      posthotel(hotel) {
        return axios.post(`${apiBaseURL}/hotels`, hotel)
          .then(response => response.data);
      },
    
      puthotel(id, hotel) {
        return axios.put(`${apiBaseURL}/hotels/${id}`, hotel)
          .then(response => response.data);
      },
    
      deletehotel(id) {
        return axios.delete(`${apiBaseURL}/hotels/${id}`)
          .then(response => response.data);
      },  
};