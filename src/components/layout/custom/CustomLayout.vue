<script setup>
import LayoutMContainer from "@/components/layout/custom/custom-layout/LayoutMContainer.vue";
import StaticMetric from "@/components/layout/custom/custom-statics/StaticMetric.vue";
import LayoutMGroup from "@/components/layout/custom/custom-layout/LayoutMGroup.vue";
import {onUpdated} from "vue";
import {colorScheme, scaling} from "@/layoutChooser.js";
import getParameterValue from "@/parameter.js";

defineProps(["apiResult"]);

onUpdated(() => {
  colorScheme(getParameterValue("scheme", "regular"));
  scaling(getParameterValue("scaling", 1));
});
</script>

<template>
  <LayoutMContainer>
    <LayoutMGroup>
      <StaticMetric label="Bla" value="12.12" />
    </LayoutMGroup>
  </LayoutMContainer>
</template>
