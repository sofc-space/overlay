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
const { currentRoute, push } = useRouter();

const steam64Id = ref("");
const scaling = ref("");
const lang = ref("");
const ratioW = ref(5);
const ratioH = ref(3);
const definition = ref({});

const globals = ref({
  steam64Id: steam64Id,
  scaling: scaling,
  lang: lang,
  definition: definition,
  ratioW: ratioW,
  ratioH: ratioH
});

steam64Id.value = getParameterValue("steam64Id", "76561199388500493");
scaling.value = getParameterValue("scaling", "1");
lang.value = getParameterValue("editor_lang", getParameterValue("lang", "en"));
definition.value = readDefinition(getParameterValue("definition", writeDefinition(defaultDefinition)));
ratioW.value = getParameterValue("ratio_w", 5);
ratioH.value = getParameterValue("ratio_h", 3);

watch(globals.value, (value) => {
  push({
    query: {
      ...currentRoute.value.query,
      ["steam64Id"]: value.steam64Id,
      ["scaling"]: value.scaling,
      ["editor_lang"]: value.lang,
      ["definition"]: writeDefinition(value.definition),
      ["ratio_w"]: ratioW.value,
      ["ratio_h"]: ratioH.value,
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
    <EditorPreview :steam64Id="steam64Id" :scaling="scaling" :lang="lang" :definition="definition" :globals="globals" />
  </div>
</template>

<style lang="scss">
@use "@/assets/editor";
</style>