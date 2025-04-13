import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from "@/i18n.js";
import VueCookies from 'vue-cookies'

createApp(App)
    .use(i18n)
    .use(router)
    .use(VueCookies, { expires: '7d'})
    .mount('#app')
