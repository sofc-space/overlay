<script setup>
import EditorBlock from "@/components/editor/blocks/EditorBlock.vue";

const props = defineProps(["definition"]);

function addContainer() {
  props.definition.containers.push({
    scheme: "thedark",
    content: [],
  });
}
</script>

<template>
  <div class="editor-blocks">
    <EditorBlock v-for="(container, index) in definition.containers" :key="index" :container="container" @removeContainer="() => props.definition.containers.splice(index, 1)" />
    <div class="editor-blocks-footer">
      <button @click="addContainer" :title="$t('editor.actions.add_row')" class="text-great">
        <i-material-symbols-add-row-below-rounded />
      </button>
    </div>
  </div>
</template>