<script setup>
import MContainer from "@/components/metric/MContainer.vue";

defineProps(["scheme", "scaling"])
</script>

<template>
  <MContainer :class="'custom-mcontainer custom-mcontainer-' + scheme" :scaling="scaling">
    <slot></slot>
  </MContainer>
</template>