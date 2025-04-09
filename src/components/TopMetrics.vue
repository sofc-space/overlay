<script setup>

import Metric from "@/components/Metric.vue";
defineProps(["apiResult"])

</script>

<template>
  <div class="bg-solid mcontainer">
    <div class="metric-group">
      <Metric label="kills" :value="apiResult.kills" text="great"></Metric>
      <Metric label="deaths" :value="apiResult.deaths" text="poor"></Metric>
    </div>
    <Metric label="K/D" :value="$n(apiResult.kd, 'twoFractionNumber')"></Metric>
    <Metric label="ADR" :value="$n(apiResult.adr, 'twoFractionNumber')" v-if="apiResult.adr != null"></Metric>
    <Metric label="HS" :value="$n(apiResult.hs, 'percent', { minimumFractionDigits: 2 })" v-if="apiResult.hs != null"></Metric>
    <Metric label="winrate" :value="$n(apiResult.winrate, 'percent', { minimumFractionDigits: 2 })"></Metric>
  </div>
</template>

<style scoped>

</style>