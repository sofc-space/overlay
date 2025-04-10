<script setup>
defineProps(["apiResult"]);
import Metric from "@/components/metric/Metric.vue";
</script>

<template>
  <Metric :label="$t('labels.loss')" :value="apiResult.losses" text="poor"></Metric>
</template>