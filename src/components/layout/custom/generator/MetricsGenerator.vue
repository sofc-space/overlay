<script setup>
import ContentGenerator from "@/components/layout/custom/generator/ContentGenerator.vue";

defineProps(["layoutJson", "apiResult"]);
</script>

<template>
  <ContentGenerator v-for="element in layoutJson" :value="element" :apiResult="apiResult"></ContentGenerator>
</template>