import axios from 'axios';
import store from '@/store/index';
const apiBaseURL = store.state.apiBaseURL;

export default {
  getHabitacion() {
    return axios.get(`${apiBaseURL}/habitacion`).then((response) => response.data);
  },

  getHabitacionId(id) {
    return axios
      .get(`${apiBaseURL}/habitacion/${id}`)
      .then((response) => response.data);
  },

  postHabitacion(habitacion) {
    return axios
      .post(`${apiBaseURL}/habitacion`, habitacion)
      .then((response) => response.data);
  },

  putHabitacion(id, habitacion) {
    return axios
      .put(`${apiBaseURL}/habitacion/${id}`, habitacion)
      .then((response) => response.data);
  },

  deleteHabitacion(id) {
    return axios
      .delete(`${apiBaseURL}/habitacion/${id}`)
      .then((response) => response.data);
  },
};
