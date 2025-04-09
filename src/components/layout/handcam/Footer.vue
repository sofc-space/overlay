<script setup>
import Credit from "@/components/Credit.vue";
import getRelativeDate from "../../../relativeDate.js";

defineProps(["apiResult"]);
</script>

<template>
  <div class="footer">
    <div>
      <span>{{ $t('footer.timespan.from') }} {{ getRelativeDate(apiResult.firstMatch, $i18n.locale) }} {{ $t('footer.timespan.to') }} {{ getRelativeDate(apiResult.lastMatch, $i18n.locale) }}</span>
    </div>
    <Credit />
  </div>
</template>