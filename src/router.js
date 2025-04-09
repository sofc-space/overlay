import {createRouter, createWebHistory} from 'vue-router'
import MetricsContainer from "@/components/MetricsContainer.vue";
import Blalalala from "@/components/Blalalala.vue";

const routes = [
    { path: '/stats/:steam64Id', component: MetricsContainer, props: true  },
    { path: '/', component: Blalalala  },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router