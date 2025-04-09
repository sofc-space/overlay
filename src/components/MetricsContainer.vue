<script setup>
import TopMetrics from "@/components/TopMetrics.vue";
import BottomMetrics from "@/components/BottomMetrics.vue";
import {ref} from "vue";
import axios from "axios";
import Credit from "@/components/Credit.vue";
import i18n from "@/i18n.js";

const props = defineProps(["steam64Id"]);

const apiResult = ref({
  kills: 0,
  deaths: 0,
  kd: 0,
  adr: null,
  hs: null,
  winrate: 0,
  premierStart: 0,
  premierCurrent: 0,
  matches: 0,
  wins: 0,
  draws: 0,
  losses: 0,
  firstMatch: null,
  lastMatch: null,
});

function updateData() {
  axios.get("https://publ-api.cs2stats.sofc.dev/stats/" + props.steam64Id)
      .then(res => {
        console.log(apiResult)
        apiResult.value = res.data;
      })
      .finally(() => setTimeout(updateData, 1000));
}

const unitsInSec = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity];
const unitStrings = ["second", "minute", "hour", "day", "week", "month", "year"];

function getRelativeDate(dateString, locale) {
  const date = new Date(dateString);
  const secondsDiff = Math.round((date - Date.now()) / 1000);
  const unitIndex = unitsInSec.findIndex((cutoff) => cutoff > Math.abs(secondsDiff));
  const divisor = unitIndex ? unitsInSec[unitIndex - 1] : 1;
  const rtf = new Intl.RelativeTimeFormat(locale, {style: 'short'});
  return rtf.format(Math.floor(secondsDiff / divisor), unitStrings[unitIndex]);
}

updateData()

</script>

<template>

  <div class="vcontainer">
    <TopMetrics :api-result="apiResult"></TopMetrics>
    <BottomMetrics :api-result="apiResult"></BottomMetrics>
    <div class="footer">
      <div>
        <span>{{ getRelativeDate(apiResult.firstMatch, $i18n.locale) }} - {{ getRelativeDate(apiResult.lastMatch, $i18n.locale) }}</span>
      </div>
      <Credit />
    </div>
  </div>
</template>