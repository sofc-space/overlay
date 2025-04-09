<script setup>
import TopMetrics from "@/components/layout/handcam/TopMetrics.vue";
import BottomMetrics from "@/components/layout/handcam/BottomMetrics.vue";
import Footer from "@/components/layout/handcam/Footer.vue";

defineProps(["apiResult"])
</script>

<template>
  <TopMetrics :api-result="apiResult"></TopMetrics>
  <BottomMetrics :api-result="apiResult"></BottomMetrics>
  <Footer :api-result="apiResult" />
</template>