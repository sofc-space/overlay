<script setup>
import TopMetrics from "@/components/TopMetrics.vue";
import BottomMetrics from "@/components/BottomMetrics.vue";
import {ref} from "vue";
import axios from "axios";

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
  losses: 0
});

function updateData() {
  axios.get("https://publ-api.cs2stats.sofc.dev/stats/" + props.steam64Id)
      .then(res => {
        console.log(apiResult)
        apiResult.value = res.data;
      })
      .finally(() => setTimeout(updateData, 1000));
}

updateData()


</script>

<template>
  <div class="vcontainer">
    <TopMetrics :api-result="apiResult"></TopMetrics>
    <BottomMetrics :api-result="apiResult"></BottomMetrics>
  </div>
</template>