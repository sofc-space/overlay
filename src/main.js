import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from "@/i18n.js";

createApp(App)
    .use(i18n)
    .use(router)
    .mount('#app')
