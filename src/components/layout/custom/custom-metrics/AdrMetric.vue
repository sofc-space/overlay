<script setup>
defineProps(["apiResult"]);
import Metric from "@/components/metric/Metric.vue";
</script>

<template>
  <Metric :label="$t('labels.adr')" :value="$n(apiResult.adr, 'twoFractionNumber')" v-if="apiResult.adr != null"></Metric>
</template>