<script setup>
import availableMetrics from '@/assets/metric/metrics_description.json';
import EditorMetricProps from "@/components/editor/blocks/EditorMetricProps.vue";
import {ref, watch} from "vue";

const props = defineProps(["metric", "pointer"]);
const emits = defineEmits(["deleteItem", "changeMetric"]);

const isObject = typeof props.metric === "object";
const metricKey = ref(isObject ? props.metric.metric : props.metric);

watch(metricKey, v => {
  emits('changeMetric', v);
});

function onDrag(evt) {
  evt.dataTransfer.dropEffect = 'move';
  evt.dataTransfer.effectAllowed = 'move';
  evt.dataTransfer.setData('pointer', props.pointer);
  evt.dataTransfer.setData('type', 'metric');
}


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
      <div class="editor-block-metric-actions-draganddrop" draggable="true" @dragstart="onDrag($event)">
        <i-material-symbols-drag-pan-rounded />
      </div>
      <EditorMetricProps v-if="props.metric.props" :metric="props.metric" :metricDefinition="availableMetrics[metricKey]" />
      <button @click="() => $emit('deleteItem')" class="text-poor" :title="$t('editor.actions.delete_metric')">
        <i-material-symbols-delete-rounded />
      </button>
    </div>
  </div>
</template>