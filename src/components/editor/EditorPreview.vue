<script setup>
import {copy} from "@/clipboard.js";
import {ref, watch} from "vue";
import {encodeBase64} from "@/base64.js";

const props = defineProps(["steam64Id", "scaling", "definition", "lang", "globals"]);

let url = "";
function getUrl() {
  return url = window.location.origin + "/stats/" + props.steam64Id + '?scaling=' + props.scaling + '&lang=' + props.lang + '&layout=custom&definition=' + getDefinitionBase64();
}

async function copyUrl() {
  await copy(url);
}

function getDefinitionBase64() {
  return encodeBase64(JSON.stringify(props.definition))
}

const ratio = ref(props.globals.ratioH / props.globals.ratioW * 100)

watch(() => props.globals.ratioH, calcRatio);
watch(() => props.globals.ratioW, calcRatio);

function calcRatio() {
  console.log("calcRatio");
  ratio.value = props.globals.ratioH / props.globals.ratioW * 100;
}
</script>

<template>
<div class="editor-preview">
  <div class="editor-preview-input-wrapper">
    <div class="url-wrapper">
      <label>{{ $t('editor.preview.url_label') }}:</label>
      <div class="input-button-group">
        <input type="text" :value="getUrl()" disabled/>
        <button @click="copyUrl" class="text-primary" :title="$t('editor.preview.url_copy')">
          <i-material-symbols-content-copy-rounded />
        </button>
      </div>
    </div>
    <div class="ratio-wrapper">
      <label>{{ $t('editor.preview.ratio_label') }}:</label><br>
      <input type="number" v-model="props.globals.ratioW" @input="calcRatio" />
      /
      <input type="number" v-model="props.globals.ratioH" @input="calcRatio" />
    </div>
  </div>
  <div class="preview-canvas">
    <div class="preview" :style="'padding-bottom: ' + ratio + '%;'">
      <iframe :src="url" frameborder="0" />
    </div>
  </div>
</div>
</template>

<style scoped>

</style>