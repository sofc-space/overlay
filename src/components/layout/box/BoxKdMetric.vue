<script setup>
import Metric from "@/components/metric/Metric.vue";
import MContainer from "@/components/metric/MContainer.vue";

defineProps(["apiResult"])
</script>

<template>
  <MContainer class="bg-solid">
    <div class="metric-group">
      <Metric :label="$t('labels.kills')" :value="apiResult.kills" text="great"></Metric>
      <Metric :label="$t('labels.deaths')" :value="apiResult.deaths" text="poor"></Metric>
    </div>
    <Metric :label="$t('labels.kdratio')" :value="$n(apiResult.kd, 'twoFractionNumber')"></Metric>
  </MContainer>
</template>
