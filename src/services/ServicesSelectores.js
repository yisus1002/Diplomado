import axios from 'axios';
import store from '@/store/index';
const apiBaseURL = store.state.apiBaseURL;

export default {
    getCityes() {
        return axios.get(`${apiBaseURL}/cities`)
          .then(response => response.data);
    },
    getTyperooms() {
        return axios.get(`${apiBaseURL}/room-types`)
          .then(response => response.data);
    },
    getAcomodation() {
      return axios.get(`${apiBaseURL}/accommodation-types`)
        .then(response => response.data);
  }
    
}