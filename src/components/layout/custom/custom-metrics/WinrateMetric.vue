<script setup>
defineProps(["apiResult"]);
import Metric from "@/components/metric/Metric.vue";
</script>

<template>
  <Metric :label="$t('labels.winrate')" :value="$n(apiResult.winrate, 'percent', { minimumFractionDigits: 2 })"></Metric>
</template>