<script setup>
defineProps(["apiResult"]);
import Metric from "@/components/metric/Metric.vue";
</script>

<template>
  <Metric :label="$t('labels.kills')" :value="apiResult.kills" text="great"></Metric>
</template>