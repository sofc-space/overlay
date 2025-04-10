<script setup>
import Credit from "@/components/Credit.vue";
import getRelativeDate from "@/relativeDate.js";

defineProps(["apiResult", "showRange"]);
</script>

<template>
  <div>
    <div class="footer bg-transparent">
      <div v-if="showRange" class="timespan">
        <div>
          {{ $t('footer.timespan.from') }} {{ getRelativeDate(apiResult.firstMatch, $i18n.locale) }}
        </div>
        <div>
          {{ $t('footer.timespan.to') }} {{ getRelativeDate(apiResult.lastMatch, $i18n.locale) }}
        </div>
      </div>
      <Credit />
    </div>
  </div>
</template>