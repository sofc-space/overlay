<script setup>
defineProps(['label', 'value', 'text', 'labelColor']);


</script>

<template>
  <div class="metric">
    <div :class="'metric-value ' + (text ? (text.startsWith('#') ? '' : ' text-' + text) : ' text-average')" :style="(text && text.startsWith('#') ? 'color: ' + text + '; ' : '')">
      <Transition duration="500">
          <span :key="value">{{ value }}</span>
      </Transition>
    </div>
    <div :class="'metric-label ' + (labelColor ? (labelColor.startsWith('#') ? '' : ' text-' + labelColor) : '')" :style="(labelColor && labelColor.startsWith('#') ? 'color: ' + labelColor + '; ' : '')">
      {{ label }}<br>
    </div>
  </div>
</template>