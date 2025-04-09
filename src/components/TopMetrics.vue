<script setup>

import Metric from "@/components/Metric.vue";
defineProps(["apiResult"])

</script>

<template>
  <div class="bg-solid mcontainer">
    <div class="metric-group">
      <Metric :label="$t('labels.kills')" :value="apiResult.kills" text="great"></Metric>
      <Metric :label="$t('labels.deaths')" :value="apiResult.deaths" text="poor"></Metric>
    </div>
    <Metric :label="$t('labels.kdratio')" :value="$n(apiResult.kd, 'twoFractionNumber')"></Metric>
    <Metric :label="$t('labels.adr')" :value="$n(apiResult.adr, 'twoFractionNumber')" v-if="apiResult.adr != null"></Metric>
    <Metric :label="$t('labels.hsrate')" :value="$n(apiResult.hs, 'percent', { minimumFractionDigits: 2 })" v-if="apiResult.hs != null"></Metric>
    <Metric :label="$t('labels.winrate')" :value="$n(apiResult.winrate, 'percent', { minimumFractionDigits: 2 })"></Metric>
  </div>
</template>

<style scoped>

</style>