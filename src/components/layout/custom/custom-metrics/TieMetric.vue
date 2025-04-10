<script setup>
defineProps(["apiResult"]);
import Metric from "@/components/metric/Metric.vue";
</script>

<template>
  <Metric :label="$t('labels.tie')" :value="apiResult.draws" text="subpar"></Metric>
</template>