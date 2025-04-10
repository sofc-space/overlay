<script setup>
defineProps(["scheme"])
</script>

<template>
  <div :class="'mcontainer custom-mcontainer custom-mcontainer-' + scheme">
    <slot></slot>
  </div>
</template>