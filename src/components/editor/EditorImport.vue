<script setup>
import {getCurrentInstance, ref} from "vue";
import {findParameterValue, findSteamId} from "@/parameter.js";
import {decodeBase64} from "@/base64.js";
import {readDefinition} from "@/definition.js";

const props = defineProps(["globals"])

const {uid} = getCurrentInstance();

function openImportDialog() {
  document.getElementById('editor-import-dialog-' + uid).showModal();
}

const importString = ref("");
const importError = ref("");
function runImport() {
  importError.value = "";
  try {
    let str = importString.value;
    if(str.includes("?") || str.includes("&")) {
      props.globals.lang = findParameterValue(str, "lang", "en");
      props.globals.steam64Id = findSteamId(str, "76561199388500493");
      props.globals.scaling = findParameterValue(str, "scaling", "1");
      str = findParameterValue(str, "definition", "eyJjb250YWluZXJzIjpbXSwic2hvd1RpbWVSYW5nZSI6dHJ1ZX0=");
    }
    props.globals.definition = readDefinition(str);
    document.getElementById('editor-import-dialog-' + uid).close();
  } catch (error) {
    importError.value = "error while importing: " + error.message;
  }
}

</script>

<template>
  <button @click="openImportDialog" class="text-average">
    <i-material-symbols-upload-file-rounded />
  </button>
  <dialog :id="'editor-import-dialog-' + uid">
    <div class="dialog-header">
      <h2>import configuration</h2>
      <form method="dialog">
        <button class="text-poor"><i-material-symbols-close-rounded /></button>
      </form>
    </div>
    <div class="dialog-body">
      <label>Configuration:</label>
      <div class="input-button-group">
        <input type="text" v-model="importString" />
        <button @click="runImport">import</button>
      </div>
      <div v-if="importError" class="text-poor">
        {{importError}}
      </div>
    </div>
  </dialog>
</template>