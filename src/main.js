import { createApp } from 'vue'
import App from './App.vue'
import 'tailwindcss/tailwind.css'
import './assets/styles/__root.css'
import 'flowbite';
import router from './router'
import store from './store'
createApp(App).use(store).use(router).mount('#app')
