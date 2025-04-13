<script setup>
import availableMetrics from '@/assets/metric/metrics_description.json';
import EditorMetricProps from "@/components/editor/blocks/EditorMetricProps.vue";

const props = defineProps(["metric"]);
defineEmits(["deleteItem", "changeMetric"]);

const isObject = typeof props.metric === "object";
const metricKey = isObject ? props.metric.metric : props.metric;

const sortable = Object.keys(availableMetrics).sort((a, b) => availableMetrics[a].label.localeCompare(availableMetrics[b].label));

</script>

<template>
  <div class="editor-block-metric">
    <div class="editor-block-metric-selector">
      <select v-model="metricKey" @change="() => $emit('changeMetric', metricKey)">
        <option v-for="k in sortable" :value="k">{{ availableMetrics[k].label }}</option>
      </select>
    </div>
    <div class="editor-block-metric-actions">
      <EditorMetricProps v-if="props.metric.props" :metric="props.metric" :metricDefinition="availableMetrics[metricKey]" />
      <button @click="() => $emit('deleteItem')" class="text-poor" title="delete single metric">
        <i-material-symbols-delete-rounded />
      </button>
    </div>
  </div>
</template>