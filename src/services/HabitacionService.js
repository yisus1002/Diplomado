import axios from 'axios';
import store from '@/store/index';
const apiBaseURL = store.state.apiBaseURL;

export default {
  getHabitacion() {
    return axios.get(`${apiBaseURL}/rooms`).then((response) => response.data);
  },

  getHabitacionId(id) {
    return axios
      .get(`${apiBaseURL}/rooms/${id}`)
      .then((response) => response.data);
  },

  postHabitacion(habitacion) {
    return axios
      .post(`${apiBaseURL}/rooms`, habitacion)
      .then((response) => response.data);
  },

  putHabitacion(id, habitacion) {
    return axios
      .put(`${apiBaseURL}/rooms/${id}`, habitacion)
      .then((response) => response.data);
  },

  deleteHabitacion(id) {
    return axios
      .delete(`${apiBaseURL}/rooms/${id}`)
      .then((response) => response.data);
  },
};
