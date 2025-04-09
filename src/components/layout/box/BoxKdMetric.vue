<script setup>
import Metric from "@/components/metric/Metric.vue";

defineProps(["apiResult"])
</script>

<template>
  <div class="bg-solid mcontainer">
    <div class="metric-group">
      <Metric :label="$t('labels.kills')" :value="apiResult.kills" text="great"></Metric>
      <Metric :label="$t('labels.deaths')" :value="apiResult.deaths" text="poor"></Metric>
    </div>
    <Metric :label="$t('labels.kdratio')" :value="$n(apiResult.kd, 'twoFractionNumber')"></Metric>
  </div>
</template>
