<script setup>
import Metric from "@/components/metric/Metric.vue";
import PremierMetric from "@/components/metric/PremierMetric.vue";
defineProps(["apiResult"])
</script>

<template>
  <div class="bg-semi-transparent mcontainer">
    <div class="metric-group">
      <PremierMetric :value="apiResult.premierStart" :label="$t('labels.begin')" />
      <div class="metric-group-delimiter">→</div>
      <PremierMetric :value="apiResult.premierCurrent" :label="$t('labels.current')" />
    </div>
    <Metric :label="$t('labels.season_wins')" :value="apiResult.premierSeasonWins" :text="(apiResult.premierSeasonWins < 25 ? 'poor' : (apiResult.premierSeasonWins < 50 ? 'subpar' : (apiResult.premierSeasonWins < 75 ? 'average' : (apiResult.premierSeasonWins < 100 ? 'semi' : (apiResult.premierSeasonWins < 125 ? 'good' : 'great')))))"></Metric>
    <Metric :label="$t('labels.matches')" :value="apiResult.matches"></Metric>
    <div class="metric-group">
      <Metric :label="$t('labels.win')" :value="apiResult.wins" text="great"></Metric>
      <div class="metric-group-delimiter">/</div>
      <Metric :label="$t('labels.tie')" :value="apiResult.draws" text="subpar"></Metric>
      <div class="metric-group-delimiter">/</div>
      <Metric :label="$t('labels.loss')" :value="apiResult.losses" text="poor"></Metric>
    </div>
  </div>
</template>