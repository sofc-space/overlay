<script setup>
defineProps(["apiResult"]);
import Metric from "@/components/metric/Metric.vue";
</script>

<template>
  <Metric :label="$t('labels.kdratio')" :value="$n(apiResult.kd, 'twoFractionNumber')"></Metric>
</template>