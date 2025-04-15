<script setup>
import EditorBlockContentItem from "@/components/editor/blocks/EditorBlockContentItem.vue";
import {updateMetric} from "@/definition.js";
import EditorDropzone from "@/components/editor/blocks/EditorDropzone.vue";

const props = defineProps(["group", "definition", "pointer"]);
defineEmits(["deleteGroup"]);

function addMetric() {
  props.group.push("adr");
}

function onDrag(evt) {
  evt.dataTransfer.dropEffect = 'move';
  evt.dataTransfer.effectAllowed = 'move';
  evt.dataTransfer.setData('pointer', props.pointer);
  evt.dataTransfer.setData('type', 'group');
}
</script>

<template>
  <div class="editor-block-group">
    <div class="editor-block-group-metrics">
      <EditorDropzone :container="group" index="0" :definition="definition" :neighbour="pointer + '-'" />
      <EditorBlockContentItem v-for="(group_child, index) in group" :item="group_child" :index="index" :container="group" :definition="definition" :pointer="pointer + '-' + index" @deleteItem="() => group.splice(index, 1)" @changeMetric="target => updateMetric(group, index, target)" />
    </div>
    <div class="editor-block-group-controls">
      <div class="editor-block-group-actions">
        <button @click="() => $emit('deleteGroup')" class="text-poor" :title="$t('editor.actions.delete_group')">
          <i-material-symbols-delete-rounded />
        </button>
        <button @click="addMetric" class="text-great" :title="$t('editor.actions.add_metric')">
          <i-material-symbols-stacked-line-chart-rounded />
        </button>
      </div>
      <div class="editor-block-group-draganddrop" draggable="true" @dragstart="onDrag($event)">
        <i-material-symbols-drag-pan-rounded />
      </div>
    </div>
  </div>
</template>
