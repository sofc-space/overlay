import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/components/home/HomePage.vue";
import MetricsContainer from "@/components/metric/MetricsContainer.vue";
import Imprint from "@/components/law/Imprint.vue";
import DataProtection from "@/components/law/DataProtection.vue";

const routes = [
    { path: '/stats/:steam64Id', component: () => import('@/components/metric/MetricsContainer.vue'), props: true  }, // TODO lazy loading: https://router.vuejs.org/guide/advanced/lazy-loading.html () => import('@/components/metric/MetricsContainer.vue')
    { path: '/', component: HomePage  },
    { path: '/imprint', component: Imprint },
    { path: '/data-protection', component: DataProtection },
    { path: '/editor', component: () => import('@/components/editor/Editor.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router