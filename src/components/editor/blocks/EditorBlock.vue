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
      <div class="editor-block-actions-scheme">
        <label>scheme: </label>
        <select v-model="container.scheme">
          <option value="dark">dark</option>
          <option value="darker">darker</option>
          <option value="darkest">darkest</option>
          <option value="thedark">the dark.</option>
          <option value="semi">semi transparent</option>
          <option value="transparent">transparent</option>
        </select>
      </div>
      <div class="editor-block-actions-buttons">
        <button @click="() => $emit('removeContainer')" class="text-poor" title="delete row">
          <i-material-symbols-delete-rounded />
        </button>
        <button @click="addGroup" class="text-great" title="add metric group">
          <i-material-symbols-insert-chart-outline-rounded />
        </button>
        <button @click="addMetric" class="text-great" title="add single metric">
          <i-material-symbols-stacked-line-chart-rounded />
        </button>
      </div>
    </div>
    <div class="editor-block">
      <EditorBlockContentItem v-for="(child, index) in container.content" :key="child" :item="child" @deleteItem="() => container.content.splice(index, 1)" @changeMetric="target => updateMetric(container.content, index, target)" />
    </div>
  </div>
</template>