<script setup>
import {getCurrentInstance} from "vue";

defineProps(["metric", "metricDefinition"]);

const {uid} = getCurrentInstance()

function editProps() {
  document.getElementById('editor-metric-prop-' + uid).showModal();
}
</script>

<template>
  <button @click="editProps" class="text-average" :title="$t('editor.metric.props.edit')">
    <i-material-symbols-edit-square-rounded />
  </button>
  <dialog :id="'editor-metric-prop-' + uid">
      <div class="dialog-header">
        <h2>{{ $t("editor.metric.props.edit_title", {title: $t("editor.metric.types." + metricDefinition.label + ".label")}) }}</h2>
        <form method="dialog">
          <button class="text-poor"><i-material-symbols-close-rounded /></button>
        </form>
      </div>
      <div class="dialog-body">
        <div v-for="(prop, label) in metricDefinition.props">
          <label>{{ $t("editor.metric.types." + metricDefinition.label + ".props." + label) }}</label><br>
          <select v-if="Array.isArray(prop)" v-model="metric.props[label]">
            <option v-for="v in prop" :value="v">
              {{ $t("editor.metric.types." + metricDefinition.label + ".props." + label + "_values." + v) }}
            </option>
          </select>
          <input :type="prop" v-model="metric.props[label]" v-else />
        </div>
      </div>
  </dialog>
</template>

<style scoped>
</style>