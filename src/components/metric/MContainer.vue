<script setup>
const props = defineProps(["class", "scaling"]);
</script>

<template>
<div :class="'mcontainer ' + props.class + (props.scaling ? ' scale-' + props.scaling : '')">
  <slot/>
</div>
</template>