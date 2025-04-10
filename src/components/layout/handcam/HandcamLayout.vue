<script setup>
import TopMetrics from "@/components/layout/handcam/TopMetrics.vue";
import BottomMetrics from "@/components/layout/handcam/BottomMetrics.vue";
import Footer from "@/components/layout/handcam/Footer.vue";
import {colorScheme, scaling} from "@/layoutChooser.js";
import {onUpdated} from "vue";
import getParameterValue from "@/parameter.js";
defineProps(["apiResult"])

onUpdated(() => {
  colorScheme(getParameterValue("scheme", "regular"));
  scaling(getParameterValue("scaling", 1));
});
</script>

<template>
  <TopMetrics :api-result="apiResult"></TopMetrics>
  <BottomMetrics :api-result="apiResult"></BottomMetrics>
  <Footer :api-result="apiResult" />
</template>