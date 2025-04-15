<script setup>
import availableMetrics from '@/assets/metric/metrics_description.json';
import EditorMetricProps from "@/components/editor/blocks/EditorMetricProps.vue";
import {ref, watch} from "vue";
import {useI18n} from "vue-i18n";

const { t } = useI18n();
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


//const availableMetricsSorted = Object.keys(availableMetrics).sort((a, b) => availableMetrics[a].label.localeCompare(availableMetrics[b].label));
const availableGroupsSorted = Object.keys(availableMetrics).sort((a, b) => t("editor.metric.groups." + a).localeCompare(t("editor.metric.groups." + b)));
const availableGroupsAndMetricsSorted = [];
for (const group of availableGroupsSorted) {
  availableGroupsAndMetricsSorted.push({
    group: group,
    metrics: Object.keys(availableMetrics[group]).sort((a, b) => {
      return t('editor.metric.types.' + group + '.' + availableMetrics[group][a].label + '.label').localeCompare(t('editor.metric.types.' + group + '.' + availableMetrics[group][b].label + '.label'))
    }),
  })
}

</script>

<template>
  <div class="editor-block-metric">
    <div class="editor-block-metric-selector">
      <select v-model="metricKey">
        <optgroup v-for="g in availableGroupsAndMetricsSorted" :label="$t('editor.metric.groups.' + g.group)">
          <option v-for="m in g.metrics" :key="m" :value="g.group + '.' + m">{{ $t('editor.metric.types.' + g.group + '.' + availableMetrics[g.group][m].label + '.label') }}</option>
        </optgroup>
      </select>
    </div>
    <div class="editor-block-metric-actions">
      <div class="editor-block-metric-actions-draganddrop" draggable="true" @dragstart="onDrag($event)">
        <i-material-symbols-drag-pan-rounded />
      </div>
      <EditorMetricProps v-if="props.metric.props" :metric="props.metric" :metricDefinition="availableMetrics[metricKey.split('.')[0]][metricKey.split('.')[1]]" :group="metricKey.split('.')[0]" />
      <button @click="() => $emit('deleteItem')" class="text-poor" :title="$t('editor.actions.delete_metric')">
        <i-material-symbols-delete-rounded />
      </button>
    </div>
  </div>
</template>