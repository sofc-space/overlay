<script setup>
import EditorBlockContentItem from "@/components/editor/blocks/EditorBlockContentItem.vue";
import {updateMetric} from "@/definition.js";

const props = defineProps(["container"])
defineEmits(['removeContainer']);

function addMetric() {
  props.container.content.push("adr");
}

function addGroup() {
  props.container.content.push([])
}
</script>

<template>
  <div class="editor-block-wrapper">
    <div class="editor-block-actions">
      <div class="editor-block-actions-label">
        Container
      </div>
      <div class="editor-block-actions-scaling">
        <label>{{ $t("editor.globals.scaling_label") }}: </label>
        <select v-model="container.scaling">
          <option value="null">{{ $t("editor.globals.inherit") }}</option>
          <option v-for="scale in Array.from({ length: 27 }, (value, index) => index < 9 ? ((index+1)/10) : (index-8+1)/2)" :value="(scale < 1 ? ('0' + scale*10) : scale).toString().replace('.', '-')" :key="scale">{{ scale }}</option>>
        </select>
      </div>
      <div class="editor-block-actions-scheme">
        <label>{{ $t("editor.color.scheme.label") }}: </label>
        <select v-model="container.scheme">
          <option value="dark">{{ $t("editor.color.scheme.dark") }}</option>
          <option value="darker">{{ $t("editor.color.scheme.darker") }}</option>
          <option value="darkest">{{ $t("editor.color.scheme.darkest") }}</option>
          <option value="thedark">{{ $t("editor.color.scheme.thedark") }}</option>
          <option value="semi">{{ $t("editor.color.scheme.semi") }}</option>
          <option value="transparent">{{ $t("editor.color.scheme.transparent") }}</option>
        </select>
      </div>
      <div class="editor-block-actions-buttons">
        <button @click="() => $emit('removeContainer')" class="text-poor" :title="$t('editor.actions.delete_row')">
          <i-material-symbols-delete-rounded />
        </button>
        <button @click="addGroup" class="text-great" :title="$t('editor.actions.add_group')">
          <i-material-symbols-insert-chart-outline-rounded />
        </button>
        <button @click="addMetric" class="text-great" :title="$t('editor.actions.add_metric')">
          <i-material-symbols-stacked-line-chart-rounded />
        </button>
      </div>
    </div>
    <div class="editor-block">
      <EditorBlockContentItem v-for="(child, index) in container.content" :key="child" :item="child" @deleteItem="() => container.content.splice(index, 1)" @changeMetric="target => updateMetric(container.content, index, target)" />
    </div>
  </div>
</template>