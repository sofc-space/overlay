<script setup>
import EditorBlockContentGroup from "@/components/editor/blocks/EditorBlockContentGroup.vue";
import EditorBlockContentMetric from "@/components/editor/blocks/EditorBlockContentMetric.vue";
import EditorDropzone from "@/components/editor/blocks/EditorDropzone.vue";

defineProps(["item", "index", "container", "definition", "pointer"]);
defineEmits(["deleteItem", "changeMetric"]);
</script>

<template>
  <EditorBlockContentGroup v-if="Array.isArray(item)" :group="item" :definition="definition" :pointer="pointer" @deleteGroup="() => $emit('deleteItem')" />
  <EditorBlockContentMetric v-else :metric="item" @deleteItem="() => $emit('deleteItem')" :pointer="pointer" @changeMetric="target => $emit('changeMetric', target)" />
  <EditorDropzone :index="index+1" :container="container" :definition="definition" :neighbour="pointer" />
</template>