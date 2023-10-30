<template>
  <div class="Hotel_home Hotel__home">
    <h1 class="Hotel__home__title">Información Hotel {{ id }}</h1>
    <hr class="mb-6 bg-gray-400 h-1" />
    <button type="button" class="button_back" @click="goBack">
      <i class="fa-solid fa-arrow-left"></i> Regresar
    </button>
    <!-- <div class="container_chart container_form">
      <div>
        <Doughnut :data="chartDataHabitacionesByType" :options="chartOptions" />
      </div>
      <div>
        <Bar
          :data="chartDataHabitacionesByAcomodacion"
          :options="chartOptions"
        />
      </div>
    </div> -->
    <div class="container_detalle">
      <div class="flex items-center justify-center p-3">
        <img src="https://loremflickr.com/640/480/city" class="rounded-xl max-w-60 mx-auto" />
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
// import { Doughnut, Bar } from 'vue-chartjs';
import {
  dataConfig,
  options,
} from '@/views/pages/landing/pages/LandingHome/chartConfig';
import HotelService from '@/services/HotelService';
import HabitacionService from '@/services/HabitacionService';
import { mapMutations } from 'vuex';

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
    // Doughnut,
    // Bar,
  },
  created() {
    // this.DataHabitaciones();
  },
  data() {
    return {
      HotelJson: {},
      Detalle_hotel: {},
      habitacionType: {
        estandar: 'ESTANDAR',
        junior: 'JUNIOR',
        suite: 'SUITE',
      },
      habitacionAcomodacion: {
        sencilla: 'SENCILLA',
        doble: 'DOBLE',
        triple: 'TRIPLE',
        cuadruple: 'CUADRUPLE',
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
          if(!response.data){
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
    getCountHabitacionesByHotel() {
      const search = {
        tipo: 'tipo',
        acomodacion: 'acomodacion',
      };
      return HabitacionService.getHabitacion()
        .then((res) => {
          const countHabitacionesByType = {};
          const countHabitacionesByAcomodacion = {};
          for (const key in this.habitacionType) {
            countHabitacionesByType[key] = this.getCountHabitaciones({
              data: res,
              search: search.tipo,
              type: this.habitacionType[key],
            });
          }
          for (const key in this.habitacionAcomodacion) {
            countHabitacionesByAcomodacion[key] = this.getCountHabitaciones({
              data: res,
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
      const habitacionesType = data.filter(
        (habitacion) =>
          habitacion.idHotel === +this.id && habitacion[search] === type
      );

      return habitacionesType.length;
    },
    DataHabitaciones() {
      this.getCountHabitacionesByHotel().then(
        ({ countHabitacionesByType, countHabitacionesByAcomodacion }) => {
          const { estandar, junior, suite } = countHabitacionesByType;
          const { sencilla, doble, triple, cuadruple } =
            countHabitacionesByAcomodacion;
          this.chartDataHabitacionesByType = dataConfig(
            [
              this.habitacionType.estandar,
              this.habitacionType.junior,
              this.habitacionType.suite,
            ],
            ['#41B883', '#00D8FF', '#DD1B16'],
            [estandar, junior, suite]
          );

          this.chartDataHabitacionesByAcomodacion = dataConfig(
            [
              this.habitacionAcomodacion.sencilla,
              this.habitacionAcomodacion.doble,
              this.habitacionAcomodacion.triple,
              this.habitacionAcomodacion.cuadruple,
            ],
            ['#41B883', '#00D8FF', '#DD1B16', '#f87979'],
            [sencilla, doble, triple, cuadruple],
            'Acomodación'
          );
        }
      );
    },
  },
  mounted() {
    this.getHotelByID(this.id);
  },
};
</script>

<style scoped></style>
