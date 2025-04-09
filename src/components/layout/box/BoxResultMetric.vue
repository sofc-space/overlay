<script setup>
import Metric from "@/components/metric/Metric.vue";

defineProps(["apiResult"]);
</script>

<template>
  <div class="bg-solid mcontainer">
    <Metric :label="$t('labels.winrate')" :value="$n(apiResult.winrate, 'percent', { minimumFractionDigits: 2 })"></Metric>
    <div class="metric-group">
      <Metric :label="$t('labels.win')" :value="apiResult.wins" text="great"></Metric>
      <div class="metric-group-delimiter">/</div>
      <Metric :label="$t('labels.tie')" :value="apiResult.draws" text="subpar"></Metric>
      <div class="metric-group-delimiter">/</div>
      <Metric :label="$t('labels.loss')" :value="apiResult.losses" text="poor"></Metric>
    </div>
  </div>
</template>