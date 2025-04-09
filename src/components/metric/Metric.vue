<script setup>
defineProps(['label', 'value', 'text'])
</script>

<template>
  <div class="metric">
    <div :class="'metric-value text-' + (text ? text : 'average')">
      <Transition duration="500">
          <span :key="value">{{ value }}</span>
      </Transition>
    </div>
    <div class="metric-label">
      {{ label }}<br>
    </div>
  </div>
</template>