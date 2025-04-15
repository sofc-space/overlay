<script setup>
import PremierMetric from "@/components/metric/PremierMetric.vue";
import Metric from "@/components/metric/Metric.vue";
import MContainer from "@/components/metric/MContainer.vue";

defineProps(["apiResult"]);
</script>

<template>
  <MContainer class="bg-semi-transparent">
    <div class="metric-group">
      <PremierMetric :value="apiResult.premierStart" :label="$t('labels.begin')" />
      <div class="metric-group-delimiter">→</div>
      <PremierMetric :value="apiResult.premierCurrent" :label="$t('labels.current')" />
    </div>
    <Metric :label="$t('labels.season_wins')" :value="apiResult.premierSeasonWins" :text="(apiResult.premierSeasonWins < 25 ? 'poor' : (apiResult.premierSeasonWins < 50 ? 'subpar' : (apiResult.premierSeasonWins < 75 ? 'average' : (apiResult.premierSeasonWins < 100 ? 'semi' : (apiResult.premierSeasonWins < 125 ? 'good' : 'great')))))"></Metric>
  </MContainer>
</template>