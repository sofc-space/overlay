<script setup>
import LayoutMGroup from "@/components/layout/custom/custom-layout/LayoutMGroup.vue";
import MetricsGenerator from "@/components/layout/custom/generator/MetricsGenerator.vue";

defineProps(["apiResult", "value"]);
</script>

<template>
<LayoutMGroup>
  <MetricsGenerator :apiResult="apiResult" :layoutJson="value" />
</LayoutMGroup>
</template>