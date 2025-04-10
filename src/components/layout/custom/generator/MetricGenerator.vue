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

const props = defineProps(["value", "apiResult"]);

const isObject = typeof props.value === "object";
const metric = isObject ? props.value.metric : props.value;


</script>

<template>
  <AdrMetric :apiResult="apiResult" v-if="metric === 'adr'" />
  <CurrentSeasonWinMetric :apiResult="apiResult" v-else-if="metric === 'current_season_win'" />
  <DeathMetric :apiResult="apiResult" v-else-if="metric === 'death'" />
  <HsRateMetric :apiResult="apiResult" v-else-if="metric === 'hs_rate'" />
  <KdMetric :apiResult="apiResult" v-else-if="metric === 'kd'" />
  <KillMetric :apiResult="apiResult" v-else-if="metric === 'kill'" />
  <LossMetric :apiResult="apiResult" v-else-if="metric === 'loss'" />
  <MatchesMetric :apiResult="apiResult" v-else-if="metric === 'matches'" />
  <PremierCurrentMetric :apiResult="apiResult" v-else-if="metric === 'premier_current'" />
  <PremierStartMetric :apiResult="apiResult" v-else-if="metric === 'premier_start'" />
  <TieMetric :apiResult="apiResult" v-else-if="metric === 'tie'" />
  <WinMetric :apiResult="apiResult" v-else-if="metric === 'win'" />
  <WinrateMetric :apiResult="apiResult" v-else-if="metric === 'winrate'" />
  <StaticMetric :params="props.value.props" v-else-if="metric === 'static'" />
  <DelimiterMetric :params="props.value.props" v-else-if="metric === 'delimiter'" />
  <div v-else>{{ metric }}</div>
</template>