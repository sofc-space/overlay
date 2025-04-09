<script setup>
import Metric from "@/components/Metric.vue";
import PremierMetric from "@/components/PremierMetric.vue";
defineProps(["apiResult"])
</script>

<template>
  <div class="bg-transparent mcontainer">
    <div class="metric-group">
      <PremierMetric :value="apiResult.premierStart" :label="$t('labels.begin')" />
      <div class="metric-group-delimiter">→</div>
      <PremierMetric :value="apiResult.premierCurrent" :label="$t('labels.current')" />
    </div>
    <Metric :label="$t('labels.matches')" :value="apiResult.matches"></Metric>
    <div class="metric-group">
      <Metric :label="$t('labels.win')" :value="apiResult.wins" text="great"></Metric>
      <div class="metric-group-delimiter">/</div>
      <Metric :label="$t('labels.tie')" :value="apiResult.draws" text="subpar"></Metric>
      <div class="metric-group-delimiter">/</div>
      <Metric :label="$t('labels.loss')" :value="apiResult.losses" text="poor"></Metric>
    </div>
  </div>
</template>

<style scoped>

</style>