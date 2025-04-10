import {createRouter, createWebHistory} from 'vue-router'
import MetricsContainer from "@/components/metric/MetricsContainer.vue";
import HomePage from "@/components/home/HomePage.vue";

const routes = [
    { path: '/stats/:steam64Id', component: MetricsContainer, props: true  },
    { path: '/', component: HomePage  },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router