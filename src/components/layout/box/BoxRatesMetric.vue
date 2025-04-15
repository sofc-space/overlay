<script setup>
import Metric from "@/components/metric/Metric.vue";
import MContainer from "@/components/metric/MContainer.vue";

defineProps(["apiResult"])
</script>

<template>
  <MContainer class="bg-solid">
    <Metric :label="$t('labels.adr')" :value="$n(apiResult.adr, 'twoFractionNumber')" v-if="apiResult.adr != null"></Metric>
    <Metric :label="$t('labels.hsrate')" :value="$n(apiResult.hs, 'percent', { minimumFractionDigits: 2 })" v-if="apiResult.hs != null"></Metric>
    <Metric :label="$t('labels.matches')" :value="apiResult.matches"></Metric>
  </MContainer>
</template>