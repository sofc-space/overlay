<script setup>
import availableMetrics from '@/assets/metric/metrics_description.json';
import EditorMetricProps from "@/components/editor/blocks/EditorMetricProps.vue";
import {ref, watch} from "vue";

const props = defineProps(["metric"]);
const emits = defineEmits(["deleteItem", "changeMetric"]);

const isObject = typeof props.metric === "object";
const metricKey = ref(isObject ? props.metric.metric : props.metric);

watch(metricKey, v => {
  emits('changeMetric', v);
});


const availableMetricsSorted = Object.keys(availableMetrics).sort((a, b) => availableMetrics[a].label.localeCompare(availableMetrics[b].label));
</script>

<template>
  <div class="editor-block-metric">
    <div class="editor-block-metric-selector">
      <select v-model="metricKey">
        <option v-for="k in availableMetricsSorted" :key="k" :value="k">{{ $t('editor.metric.types.' + availableMetrics[k].label + ".label") }}</option>
      </select>
    </div>
    <div class="editor-block-metric-actions">
      <EditorMetricProps v-if="props.metric.props" :metric="props.metric" :metricDefinition="availableMetrics[metricKey]" />
      <button @click="() => $emit('deleteItem')" class="text-poor" :title="$t('editor.actions.delete_metric')">
        <i-material-symbols-delete-rounded />
      </button>
    </div>
  </div>
</template>