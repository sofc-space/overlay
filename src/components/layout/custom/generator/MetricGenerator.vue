<script setup>
import AdrMetric from "@/components/layout/custom/custom-metrics/AdrMetric.vue";
import CurrentSeasonWinMetric from "@/components/layout/custom/custom-metrics/CurrentSeasonWinMetric.vue";
import DeathMetric from "@/components/layout/custom/custom-metrics/DeathMetric.vue";
import HsRateMetric from "@/components/layout/custom/custom-metrics/HsRateMetric.vue";
import KdMetric from "@/components/layout/custom/custom-metrics/KdMetric.vue";
import KillMetric from "@/components/layout/custom/custom-metrics/KillMetric.vue";
import LossMetric from "@/components/layout/custom/custom-metrics/LossMetric.vue";
import MatchesMetric from "@/components/layout/custom/custom-metrics/MatchesMetric.vue";
import PremierCurrentMetric from "@/components/layout/custom/custom-metrics/PremierCurrentMetric.vue";
import PremierStartMetric from "@/components/layout/custom/custom-metrics/PremierStartMetric.vue";
import TieMetric from "@/components/layout/custom/custom-metrics/TieMetric.vue";
import WinMetric from "@/components/layout/custom/custom-metrics/WinMetric.vue";
import WinrateMetric from "@/components/layout/custom/custom-metrics/WinrateMetric.vue";
import StaticMetric from "@/components/layout/custom/custom-statics/StaticMetric.vue";
import DelimiterMetric from "@/components/layout/custom/custom-statics/DelimiterMetric.vue";
import metrics from "@/assets/metric/metrics_description.json";
import DescribedMetricGenerator from "@/components/layout/custom/generator/DescribedMetricGenerator.vue";

const props = defineProps(["value", "apiResult"]);

const isObject = typeof props.value === "object";
const metricPointer = isObject ? props.value.metric : props.value;
const metricArr = metricPointer.split(".");
const group = metricArr[0];
const metric = metricArr[1];

</script>

<template>
  <!--<AdrMetric :apiResult="apiResult" v-if="metricPointer === 'session.adr'" />
  <CurrentSeasonWinMetric :apiResult="apiResult" v-else-if="metricPointer === 'premier_season.current_season_win'" />
  <DeathMetric :apiResult="apiResult" v-else-if="metricPointer === 'session.death'" />
  <HsRateMetric :apiResult="apiResult" v-else-if="metricPointer === 'session.hs_rate'" />
  <KdMetric :apiResult="apiResult" v-else-if="metricPointer === 'session.kd'" />
  <KillMetric :apiResult="apiResult" v-else-if="metricPointer === 'session.kill'" />
  <MatchesMetric :apiResult="apiResult" v-else-if="metricPointer === 'session.matches'" />-->
  <PremierCurrentMetric :apiResult="apiResult" v-if="metricPointer === 'session.premier_current'" />
  <PremierStartMetric :apiResult="apiResult" v-else-if="metricPointer === 'session.premier_start'" />
  <!--<WinMetric :apiResult="apiResult" v-else-if="metricPointer === 'session.win'" />
  <TieMetric :apiResult="apiResult" v-else-if="metricPointer === 'session.tie'" />
  <LossMetric :apiResult="apiResult" v-else-if="metricPointer === 'session.loss'" />
  <WinrateMetric :apiResult="apiResult" v-else-if="metricPointer === 'session.winrate'" />-->
  <StaticMetric :params="props.value.props" v-else-if="metricPointer === 'static.static'" />
  <DelimiterMetric :params="props.value.props" v-else-if="metricPointer === 'static.delimiter'" />
  <DescribedMetricGenerator :value="value" :description="metrics[group][metric]" :apiResult="apiResult" :group="group" v-else-if="metrics[group] && metrics[group][metric] && metrics[group][metric].label" />
  <div v-else>{{ metricPointer }}</div>
</template>