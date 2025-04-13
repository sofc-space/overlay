<script setup>
import EditorBlockContentGroup from "@/components/editor/blocks/EditorBlockContentGroup.vue";
import EditorBlockContentMetric from "@/components/editor/blocks/EditorBlockContentMetric.vue";

defineProps(["item"]);
defineEmits(["deleteItem", "changeMetric"]);
</script>

<template>
  <EditorBlockContentGroup v-if="Array.isArray(item)" :group="item" @deleteGroup="() => $emit('deleteItem')" />
  <EditorBlockContentMetric v-else :metric="item" @deleteItem="() => $emit('deleteItem')" @changeMetric="target => $emit('changeMetric', target)" />
</template>