<script setup>
import EditorBlockContentItem from "@/components/editor/blocks/EditorBlockContentItem.vue";
import {updateMetric} from "@/definition.js";

const props = defineProps(["group"]);
defineEmits(["deleteGroup"]);

function addMetric() {
  props.group.push("adr");
}
</script>

<template>
  <div class="editor-block-group">
    <div class="editor-block-group-metrics">
        <EditorBlockContentItem v-for="(group_child, index) in group" :item="group_child" @deleteItem="() => group.splice(index, 1)" @changeMetric="target => updateMetric(group, index, target)" />
    </div>
    <div class="editor-block-group-actions">
      <button @click="() => $emit('deleteGroup')" class="text-poor" title="delete group">
        <i-material-symbols-delete-rounded />
      </button>
      <button @click="addMetric" class="text-great" title="add single metric">
        <i-material-symbols-stacked-line-chart-rounded />
      </button>
    </div>
  </div>
</template>
