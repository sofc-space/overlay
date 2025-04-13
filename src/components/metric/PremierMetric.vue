<script setup>
import IconPremier from "@/components/icons/IconPremier.vue";

const props = defineProps(['label', 'value'])

const mapping = new Map();
mapping.set(4999, "common");
mapping.set(9999, "uncommon");
mapping.set(14999, "rare");
mapping.set(19999, "mythical");
mapping.set(24999, "legendary");
mapping.set(29999, "ancient");
mapping.set(100000, "unusual");


function getCssClass() {
  let lastMapping = "";
  for (const [key, value] of mapping) {
    if (props.value <= key) {
      lastMapping = value;
      break;
    }
  }
  return lastMapping;
}

</script>

<template>
  <div class="metric">
    <div :class="'ranked ' + getCssClass()">
      <div class="ranked-value-wrapper">
        <div class="ranked-value" v-if="props.value > 0">
          {{ Math.floor(props.value / 1000) }}<small>,{{ (props.value % 1000).toString().padStart(3, '0') }}</small>
        </div>
        <div class="ranked-value" v-else>
          ---
        </div>
        <IconPremier />
      </div>
    </div>
    <div class="metric-label">
      {{ props.label }}
    </div>
  </div>
</template>

<style scoped>

</style>