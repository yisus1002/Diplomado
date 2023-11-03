<template>
  <div class="Hotel_home Hotel__home">
    <h1 class="Hotel__home__title">Información Hotel {{ id }}</h1>
    <hr class="mb-6 bg-gray-400 h-1" />
    <button type="button" class="button_back" @click="goBack">
      <i class="fa-solid fa-arrow-left"></i> Regresar
    </button>
    <div class="container_chart">
      <div>
        <Doughnut :data="chartDataHabitacionesByType" :options="chartOptions" />
      </div>
      <div>
        <Bar
          :data="chartDataHabitacionesByAcomodacion"
          :options="chartOptions"
        />
      </div>
    </div>
    <div class="container_detalle">
      <div class="flex items-center justify-center p-3">
        <img
          src="https://loremflickr.com/640/480/city"
          class="rounded-xl max-w-60 mx-auto"
        />
      </div>
      <div class="container_form">
        <div class="grid gap-6 mb-6 md:grid-cols-1">
          <h1 class="detaller_form">{{ Detalle_hotel?.name }}</h1>
          <div class="grip gap-6 mb-6 md:grid-cols-2">
            <p class="detalle_h2">Nit: {{ Detalle_hotel?.nit }}</p>
            <p class="detalle_h2">Ciudad: {{ Detalle_hotel?.city?.name }}</p>
            <p class="detalle_h2">Direccion: {{ Detalle_hotel?.address }}</p>
            <p class="detalle_h2">
              Habitaciones: {{ Detalle_hotel?.num_rooms }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="cont__habitacion" v-if="habitacionHotel.length > 0">
      <h1 class="h1">Habitaciones</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
        <CardHabitacion
          v-for="(habitacion, index) in habitacionHotel"
          :key="index"
          :Jsonl="habitacion"
        ></CardHabitacion>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Title,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Doughnut, Bar } from 'vue-chartjs';
import {
  dataConfig,
  options,
} from '@/views/pages/landing/pages/LandingHome/chartConfig';
import HotelService from '@/services/HotelService';
import HabitacionService from '@/services/HabitacionService';
import { mapMutations } from 'vuex';
import CardHabitacion from '@/components/shared/cardHabitacion.vue';

ChartJS.register(
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default {
  props: ['id'],
  components: {
    CardHabitacion,
    Doughnut,
    Bar,
  },
  created() {
    this.DataHabitaciones();
  },
  data() {
    return {
      habitacionHotel: [],
      Detalle_hotel: {},
      habitacionType: {
        suite: 'SUITE',
        estandar: 'ESTANDAR',
        matrimonial: 'MATRIMONIAL',
      },
      habitacionAcomodacion: {
        sencilla: 'SENCILLA',
        doble: 'DOBLE',
        triple: 'TRIPLE',
      },
      chartDataHabitacionesByType: dataConfig([], [], []),
      chartDataHabitacionesByAcomodacion: dataConfig([], [], []),
      chartOptions: options,
    };
  },

  methods: {
    ...mapMutations(['alert']),
    goBack() {
      this.$router.push('/hotel');
    },
    getHotelByID(id) {
      HotelService.gethotelId(id)
        .then((response) => {
          if (!response.data) {
            this.goBack();
            return;
          }
          this.Detalle_hotel = response.data;

          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
          this.alert({ mensage: error, icon: 'error' });
          this.goBack();
        });
    },
    getHabitacioneHotel(id) {
      HabitacionService.getHabitacionId(id)
        .then((response) => {
          this.habitacionHotel = response.data;
        })
        .catch((error) => {
          console.log(error);
          // this.alert({ mensage: error, icon: 'error' });
          // this.goBack();
        });
    },
    getCountHabitacionesByHotel() {
      const search = {
        tipo: 'type.name',
        acomodacion: 'accommodation.name',
      };
      return HabitacionService.getHabitacionId(this.id)
        .then((res) => {
          const countHabitacionesByType = {};
          const countHabitacionesByAcomodacion = {};
          for (const key in this.habitacionType) {
            countHabitacionesByType[key] = this.getCountHabitaciones({
              data: res.data,
              search: search.tipo,
              type: this.habitacionType[key],
            });
          }
          for (const key in this.habitacionAcomodacion) {
            countHabitacionesByAcomodacion[key] = this.getCountHabitaciones({
              data: res.data,
              search: search.acomodacion,
              type: this.habitacionAcomodacion[key],
            });
          }
          return {
            countHabitacionesByType,
            countHabitacionesByAcomodacion,
          };
        })
        .catch((error) => console.log(error));
    },

    getCountHabitaciones({ data = [], search, type }) {
      const habitacionesType = data.filter((habitacion) => {
        //Eval nos permite usar codigo JS como strings
        return (
          habitacion.hotel_id === +this.id &&
          eval(`habitacion.${search}`) === type
        );
      });

      return habitacionesType.length;
    },
    DataHabitaciones() {
      this.getCountHabitacionesByHotel().then(
        ({ countHabitacionesByType, countHabitacionesByAcomodacion }) => {
          const { estandar, matrimonial, suite } = countHabitacionesByType;
          const { sencilla, doble, triple } = countHabitacionesByAcomodacion;
          this.chartDataHabitacionesByType = dataConfig(
            [
              this.habitacionType.suite,
              this.habitacionType.estandar,
              this.habitacionType.matrimonial,
            ],
            ['#41B883', '#00D8FF', '#DD1B16'],
            [suite, estandar, matrimonial]
          );

          this.chartDataHabitacionesByAcomodacion = dataConfig(
            [
              this.habitacionAcomodacion.sencilla,
              this.habitacionAcomodacion.doble,
              this.habitacionAcomodacion.triple,
            ],
            ['#41B883', '#00D8FF', '#DD1B16', '#f87979'],
            [sencilla, doble, triple],
            'Acomodación'
          );
        }
      );
    },
  },
  mounted() {
    this.getHotelByID(this.id), this.getHabitacioneHotel(this.id);
  },
};
</script>

<style scoped>
.cont__habitacion {
  background-color: #ffffff3d;
  padding: 0;
  border-radius: 30px;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.h1 {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  @apply text-green-500;
}
</style>
