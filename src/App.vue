<script setup lang="ts">
import PageFooter from "@/components/page/PageFooter.vue";
import {useRouter} from "vue-router";
const router = useRouter()
</script>

<template>
  <RouterView v-if="router.currentRoute.value.fullPath.includes('/stats/')" />
  <div class="page" v-else>
    <div class="page-content">
      <RouterView />
    </div>
    <PageFooter />
  </div>

</template>