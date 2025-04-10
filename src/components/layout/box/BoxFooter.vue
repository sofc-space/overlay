<script setup>
import getRelativeDate from "@/relativeDate.js";
import Credit from "@/components/Credit.vue";

defineProps(["apiResult"]);
</script>

<template>
  <div>
    <div class="footer bg-transparent">
      <div class="timespan">
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