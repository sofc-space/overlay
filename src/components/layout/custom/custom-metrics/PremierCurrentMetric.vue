<script setup>
import PremierMetric from "@/components/metric/PremierMetric.vue";

defineProps(["apiResult"]);
</script>

<template>
  <PremierMetric :value="apiResult.premierCurrent" :label="$t('labels.current')" />
</template>