import axios from 'axios';
import store from '@/store/index';
const apiBaseURL = store.state.apiBaseURL;

export default {
    gethotel() {
        return axios.get(`${apiBaseURL}/hotel`)
          .then(response => response.data);
      },
    
      gethotelId(id) {
        return axios.get(`${apiBaseURL}/hotel/${id}`)
          .then(response => response.data);
      },
    
      posthotel(hotel) {
        return axios.post(`${apiBaseURL}/hotel`, hotel)
          .then(response => response.data);
      },
    
      puthotel(id, hotel) {
        return axios.put(`${apiBaseURL}/hotel/${id}`, hotel)
          .then(response => response.data);
      },
    
      deletehotel(id) {
        return axios.delete(`${apiBaseURL}/hotel/${id}`)
          .then(response => response.data);
      },  
};