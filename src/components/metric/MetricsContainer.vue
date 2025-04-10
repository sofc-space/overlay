<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import HandcamLayout from "@/components/layout/handcam/HandcamLayout.vue";
import BoxLayout from "@/components/layout/box/BoxLayout.vue";
import { layoutFinder } from "@/layoutChooser.js";
import CustomLayout from "@/components/layout/custom/CustomLayout.vue";

const props = defineProps(["steam64Id"]);

const layout = ref("")
const initialize = () => {
  layout.value = layoutFinder()
};
onMounted(() => initialize());

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
  premierSeasonWins: 0,
  premierSeasonDraws: 0,
  premierSeasonLosses: 0,
  premierSeasonWinRate: 0,
});

function updateData() {
  axios.get("https://publ-api.cs2stats.sofc.dev/stats/" + props.steam64Id)
      .then(res => {
        apiResult.value = res.data;
      })
      .finally(() => setTimeout(updateData, 10 * 1000));
}

updateData()

</script>

<template>
  <div class="vcontainer">
    <CustomLayout :apiResult="apiResult" v-if="layout === 'custom'" />
    <BoxLayout :apiResult="apiResult" v-else-if="layout === 'box'" />
    <HandcamLayout :apiResult="apiResult" v-else />
  </div>
</template>

