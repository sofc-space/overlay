<script setup>
import PremierMetric from "@/components/metric/PremierMetric.vue";

defineProps(["apiResult"]);
</script>

<template>
  <PremierMetric :value="apiResult.premierStart" :label="$t('labels.begin')" />
</template>