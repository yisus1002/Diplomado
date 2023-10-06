<template lang="">
  <div class="landingContainer">
    <h1 class="head__title Hotel__home__title">Admin / Dashboard</h1>
    <div class="flex justify-center">
      <div>
        <Doughnut :data="chartDataHabitacionesByType" :options="chartOptions" />
      </div>
      <div>
        <Bar :data="chartDataHabitacionesByAcomodacion" :options="chartOptions" />
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
import { dataConfig, options } from './chartConfig.js';

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
  name: 'LandingHome',
  components: {
    Doughnut,
    Bar,
  },
  data() {
    return {
      chartDataHabitacionesByType: dataConfig(
        ['ESTANDAR', 'JUNIOR', 'SUITE'],
        ['#41B883', '#00D8FF', '#DD1B16'],
        [10, 20, 25]
      ),
      chartDataHabitacionesByAcomodacion: dataConfig(
        ['SENCILLA', 'DOBLE', 'TRIPLE', 'CUADRUPLE'],
        ['#41B883', '#00D8FF', '#DD1B16', '#f87979'],
        [10, 20, 25, 40],
        'Acomodación'
      ),
      chartOptions: options,
    };
  },
};
</script>
<style scoped>
.landingContainer {
  @apply p-1;
}
.landingContainer__head {
  @apply flex;
}
.head__title {
  @apply text-2xl;
}
.icon__title {
  border: solid 1px red;
  /* border-radius: 100%; */
  margin: 0;
  background-color: rgb(181, 181, 181);
  @apply text-white
        p-3;
}
</style>
