<script setup>
import {getCurrentInstance, ref, watch} from "vue";

const {uid} = getCurrentInstance()

const props = defineProps(["metric", "group", "metricDescription"]);
//props.metric = "session.adr";

function editProps() {
  document.getElementById('editor-metric-prop-' + uid).showModal();
}

const general = ref({
  label: "",
  label_color: "",
  color: "",
});

if(typeof props.metric === "object") {
  console.log(props.metric);
  general.value.label = props.metric.label ? props.metric.label : "";
  general.value.label_color = props.metric.label_color ? props.metric.label_color : "";
  general.value.color = props.metric.color ? props.metric.color : "";
}

watch(general.value, () => {
  props.metric.label = general.value.label;
  props.metric.label_color = general.value.label_color;
  props.metric.color = general.value.color;
});

const availableColors = [
    "great",
    "good",
    "semi",
    "average",
    "subpar",
    "poor",
    "t",
    "ct"
];
</script>

<template>
  <button @click="editProps" class="text-average" :title="$t('editor.metric.props.edit')">
    <i-material-symbols-edit-square-rounded />
  </button>
  <dialog :id="'editor-metric-prop-' + uid">
      <div class="dialog-header">
        <h2>{{ $t("editor.metric.props.edit_title", {title: $t("editor.metric.types." + group + "." + metricDescription.label + ".label")}) }}</h2>
        <form method="dialog">
          <button class="text-poor"><i-material-symbols-close-rounded /></button>
        </form>
      </div>
      <div class="dialog-body">
        <div v-if="metricDescription.props && metric.props">
          <h3>{{ $t("editor.metric.props.parameters") }}</h3>
          <div v-for="(prop, label) in metricDescription.props">
            <label>{{ $t("editor.metric.types." + group + "." + metricDescription.label + ".props." + label) }}</label><br>
            <select v-if="Array.isArray(prop)" v-model="metric.props[label]">
              <option v-for="v in prop" :value="v">
                {{ $t("editor.metric.types." + group + "." + metricDescription.label + ".props." + label + "_values." + v) }}
              </option>
            </select>
            <input :type="prop" v-model="metric.props[label]" v-else />
          </div>
        </div>
        <div class="editor-metric-defaults" v-else>
          <h3>{{ $t("editor.metric.props.general.title") }}</h3>
          <div>
            <label>{{ $t("editor.metric.props.general.label.label") }}</label><br>
            <input type="text" v-model="general.label" :placeholder="$t('metrics.' + props.group + '.' + metricDescription.label)">
          </div>
          <div>
            <label>{{ $t("editor.metric.props.general.label_color.label") }}</label><br>
            <select v-model="general.label_color">
              <option value="">- {{ $t("editor.metric.props.general.label_color.default") }} -</option>
              <option v-for="color in availableColors" :key="color" :value="color">{{ $t("editor.metric.props.colors." + color) }}</option>
            </select>
          </div>
          <div>
            <label>{{ $t("editor.metric.props.general.color.label") }}</label><br>
            <select v-model="general.color">
              <option value="">- {{ $t("editor.metric.props.general.color.default") }} -</option>
              <option v-for="color in availableColors" :key="color" :value="color">{{ $t("editor.metric.props.colors." + color) }}</option>
            </select>
          </div>
        </div>
      </div>
  </dialog>
</template>

<style scoped>
</style>