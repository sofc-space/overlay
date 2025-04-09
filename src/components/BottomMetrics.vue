<script setup>
import Metric from "@/components/Metric.vue";
import PremierMetric from "@/components/PremierMetric.vue";
defineProps(["apiResult"])
</script>

<template>
  <div class="bg-transpartent mcontainer">
    <div class="metric-group">
      <PremierMetric :value="apiResult.premierStart" label="beginn" />
      <div class="metric-group-delimiter">→</div>
      <PremierMetric :value="apiResult.premierCurrent" label="aktuell" />
    </div>
    <Metric label="matches" :value="apiResult.matches"></Metric>
    <div class="metric-group">
      <Metric label="win" :value="apiResult.wins" text="great"></Metric>
      <div class="metric-group-delimiter">/</div>
      <Metric label="tie" :value="apiResult.draws" text="subpar"></Metric>
      <div class="metric-group-delimiter">/</div>
      <Metric label="loss" :value="apiResult.losses" text="poor"></Metric>
    </div>
  </div>
</template>

<style scoped>

</style>