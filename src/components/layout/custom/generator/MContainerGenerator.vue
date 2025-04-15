 <script setup>
import LayoutMContainer from "@/components/layout/custom/custom-layout/LayoutMContainer.vue";
import MetricsGenerator from "@/components/layout/custom/generator/MetricsGenerator.vue";

defineProps(["layoutJson", "apiResult"]);
</script>

<template>
  <LayoutMContainer v-for="element in layoutJson" :scheme="element.scheme" :scaling="element.scaling">
    <MetricsGenerator :layoutJson="element.content" :apiResult="apiResult" />
  </LayoutMContainer>
</template>