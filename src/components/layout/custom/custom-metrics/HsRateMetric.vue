<script setup>
defineProps(["apiResult"]);
import Metric from "@/components/metric/Metric.vue";
</script>

<template>
  <Metric :label="$t('labels.hsrate')" :value="$n(apiResult.hs, 'percent', { minimumFractionDigits: 2 })" v-if="apiResult.hs != null"></Metric>
</template>