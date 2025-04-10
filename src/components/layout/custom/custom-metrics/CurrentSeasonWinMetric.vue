<script setup>
import Metric from "@/components/metric/Metric.vue";

defineProps(["apiResult"]);
</script>

<template>
  <Metric :label="$t('labels.season_wins')" :value="apiResult.premierSeasonWins" :text="(apiResult.premierSeasonWins < 25 ? 'poor' : (apiResult.premierSeasonWins < 50 ? 'subpar' : (apiResult.premierSeasonWins < 75 ? 'average' : (apiResult.premierSeasonWins < 100 ? 'semi' : (apiResult.premierSeasonWins < 125 ? 'good' : 'great')))))"></Metric>
</template>