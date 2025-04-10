<script setup>
import {onUpdated, ref} from "vue";
import {colorScheme, scaling} from "@/layoutChooser.js";
import getParameterValue from "@/parameter.js";
import MContainerGenerator from "@/components/layout/custom/generator/MContainerGenerator.vue";
import CustomFooter from "@/components/layout/custom/custom-layout/CustomFooter.vue";

defineProps(["apiResult"]);

const json = ref()

onUpdated(() => {
  colorScheme(getParameterValue("scheme", "regular"));
  scaling(getParameterValue("scaling", 1));
  json.value = JSON.parse(atob(getParameterValue("definition", "W10=")));
});

</script>

<template>
  <MContainerGenerator :layoutJson="json" :apiResult="apiResult" />
  <CustomFooter />
</template>
