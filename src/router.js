import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/components/home/HomePage.vue";
import MetricsContainer from "@/components/metric/MetricsContainer.vue";

const routes = [
    { path: '/stats/:steam64Id', component: () => import('@/components/metric/MetricsContainer.vue'), props: true  }, // TODO lazy loading: https://router.vuejs.org/guide/advanced/lazy-loading.html () => import('@/components/metric/MetricsContainer.vue')
    { path: '/', component: HomePage  },
    { path: '/editor', component: () => import('@/components/editor/Editor.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router