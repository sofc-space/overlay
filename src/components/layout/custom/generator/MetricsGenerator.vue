<script setup>
import ContentGenerator from "@/components/layout/custom/generator/ContentGenerator.vue";

defineProps(["layoutJson", "apiResult"]);
</script>

<template>
  <ContentGenerator v-for="(element, index) in layoutJson" :key="index" :value="element" :apiResult="apiResult"></ContentGenerator>
</template>