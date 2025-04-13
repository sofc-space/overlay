<script setup>

import EditorPreview from "@/components/editor/EditorPreview.vue";
import {ref, watch} from "vue";
import EditorGlobals from "@/components/editor/EditorGlobals.vue";
import EditorBlocks from "@/components/editor/EditorBlocks.vue";
import defaultDefinition from "@/assets/metric/default_definition.json";
import EditorImport from "@/components/editor/EditorImport.vue";
import {useRouter} from "vue-router";
import getParameterValue, {findParameterValue} from "@/parameter.js";
import {readDefinition, writeDefinition} from "@/definition.js";
import LanguageSelector from "@/components/i18n/LanguageSelector.vue";
import PageFooter from "@/components/page/PageFooter.vue";
const { currentRoute, push } = useRouter();

const steam64Id = ref("");
const scaling = ref("");
const lang = ref("");
const definition = ref({});

const globals = ref({
  steam64Id: steam64Id,
  scaling: scaling,
  lang: lang,
  definition: definition,
});

steam64Id.value = getParameterValue("steam64Id", "76561199388500493");
scaling.value = getParameterValue("scaling", "1");
lang.value = getParameterValue("editor_lang", getParameterValue("lang", "en"));
definition.value = readDefinition(getParameterValue("definition", writeDefinition(defaultDefinition)));

watch(globals.value, (value) => {
  push({
    query: {
      ...currentRoute.value.query,
      ["steam64Id"]: value.steam64Id,
      ["scaling"]: value.scaling,
      ["editor_lang"]: value.lang,
      ["definition"]: writeDefinition(value.definition),
    },
  });
});

</script>

<template>
  <div class="editor-wrapper">
    <div class="editor">
      <div class="editor-header">
        <div class="editor-header-title">
          <h1>
            {{ $t("editor.general.title") }}
          </h1>
          <small>
            {{ $t("editor.general.description") }}
          </small>
        </div>
        <div class="editor-header-actions">
          <EditorImport :globals="globals" />
        </div>
      </div>
      <EditorGlobals :globals="globals"></EditorGlobals>
      <EditorBlocks :definition="definition" />
    </div>
    <EditorPreview :steam64Id="steam64Id" :scaling="scaling" :lang="lang" :definition="definition" />
  </div>
</template>

<style lang="scss">
@use "@/assets/editor";
</style>