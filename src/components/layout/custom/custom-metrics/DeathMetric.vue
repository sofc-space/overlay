<script setup>
defineProps(["apiResult"]);
import Metric from "@/components/metric/Metric.vue";
</script>

<template>
  <Metric :label="$t('labels.deaths')" :value="apiResult.deaths" text="poor"></Metric>
</template>