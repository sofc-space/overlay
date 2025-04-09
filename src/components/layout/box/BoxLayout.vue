<script setup>
import BoxKdMetric from "@/components/layout/box/BoxKdMetric.vue";
import BoxRatesMetric from "@/components/layout/box/BoxRatesMetric.vue";
import BoxResultMetric from "@/components/layout/box/BoxResultMetric.vue";
import BoxFooter from "@/components/layout/box/BoxFooter.vue";
import BoxPremierMetric from "@/components/layout/box/BoxPremierMetric.vue";

defineProps(["apiResult"])
</script>

<template>
  <BoxKdMetric :apiResult="apiResult" />
  <BoxRatesMetric :apiResult="apiResult" />
  <BoxResultMetric :apiResult="apiResult" />
  <BoxPremierMetric :apiResult="apiResult" />
  <BoxFooter :apiResult="apiResult" />
</template>