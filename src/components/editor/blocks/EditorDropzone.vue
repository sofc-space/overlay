<script setup>
import {ref} from "vue";

const props = defineProps(["definition", "container", "index", "neighbour"]);

const dragover = ref(false);

function onDrop(evt) {
  dragover.value = false;
  const pointer = evt.dataTransfer.getData('pointer')

  let path = pointer.split("-");
  let container = props.definition.containers[path[0]].content;
  let metric = container[path[1]];
  let metricIndex = path[1];
  if(path.length > 2){
    container = metric;
    metric = container[path[2]];
    metricIndex = path[2];
  }

  if(Array.isArray(metric)) {
    if(isGroup())
      return;
  }

  container.splice(metricIndex, 1);
  if(container === props.container && props.index > metricIndex) {
    props.container.splice(props.index-1, 0, metric);
    return;
  }

  props.container.splice(props.index, 0, metric);
}

function onDragover(evt) {
  if(isDragGroup(evt) && isGroup()) {
    evt.dataTransfer.dropEffect = 'none';
    return;
  }
  dragover.value = true;
}

function onDragleave(evt) {
  evt.dataTransfer.dropEffect = 'move';
  dragover.value = false;
}

function isGroup() {
  return props.neighbour.split("-").length > 2;
}

function isDragGroup(evt) {
  return evt.dataTransfer.getData('type') === 'group';
}
</script>

<template>
  <div :class="'editor-block-dropzone ' + (dragover ? 'active' : '')"
       @drop="onDrop($event)"
       @dragover="onDragover($event)"
       @dragleave="onDragleave($event)"
       @dragover.prevent
       @dragenter.prevent><div></div></div>
</template>