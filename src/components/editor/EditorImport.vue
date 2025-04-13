<script setup>
import {getCurrentInstance, ref} from "vue";
import {findParameterValue, findSteamId} from "@/parameter.js";
import {readDefinition} from "@/definition.js";
import {useI18n} from "vue-i18n";
const { t } = useI18n()

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
      props.globals.lang = findParameterValue(str, "editor_lang", findParameterValue(str, "lang", "en"));
      props.globals.steam64Id = findSteamId(str, "76561199388500493");
      props.globals.scaling = findParameterValue(str, "scaling", "1");
      str = findParameterValue(str, "definition", "eyJjb250YWluZXJzIjpbXSwic2hvd1RpbWVSYW5nZSI6dHJ1ZX0=");
    }
    props.globals.definition = readDefinition(str);
    document.getElementById('editor-import-dialog-' + uid).close();
  } catch (error) {
    importError.value = t("editor.actions.import.error_msg", {msg: error.message});
  }
}

</script>

<template>
  <button @click="openImportDialog" class="text-average" :title="$t('editor.actions.import.button')">
    <i-material-symbols-upload-file-rounded />
  </button>
  <dialog :id="'editor-import-dialog-' + uid">
    <div class="dialog-header">
      <div>
        <h2>{{ $t('editor.actions.import.title') }}</h2>
        <small>{{ $t('editor.actions.import.description') }}</small>
      </div>
      <form method="dialog">
        <button class="text-poor"><i-material-symbols-close-rounded /></button>
      </form>
    </div>
    <div class="dialog-body">
      <label>{{ $t('editor.actions.import.label') }}:</label>
      <div class="input-button-group">
        <input type="text" v-model="importString" />
        <button @click="runImport">
          {{ $t('editor.actions.import.button') }}
        </button>
      </div>
      <div v-if="importError" class="text-poor">
        {{importError}}
      </div>
    </div>
  </dialog>
</template>