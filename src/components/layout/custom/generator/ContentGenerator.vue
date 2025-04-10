<script setup>
import MetricGenerator from "@/components/layout/custom/generator/MetricGenerator.vue";
import MGroupGenerator from "@/components/layout/custom/generator/MGroupGenerator.vue";

defineProps(["value", "apiResult"]);
</script>

<template>
  <MetricGenerator :apiResult="apiResult" :value="value" v-if="!Array.isArray(value)" />
  <MGroupGenerator :apiResult="apiResult" :value="value" v-else />
</template>
