<script setup>
import i18n from "@/i18n.js";

const availableLocales = i18n.global.availableLocales;

defineProps(["globals"]);
</script>

<template>
  <div class="editor-globals">
    <div class="editor-steam64id">
      <label>
        {{ $t("editor.globals.steam64Id_label") }}:
      </label>
      <input type="text" v-model="globals.steam64Id" />
      <small>
        <a href="https://www.steamidfinder.com/" target="_blank">
          {{ $t("editor.globals.steam64Id_description") }}
        </a>
      </small>
    </div>
    <div class="editor-scaling">
      <label>
        {{ $t("editor.globals.scaling_label") }}:
      </label>
      <select v-model="globals.scaling">
        <option v-for="scale in Array.from({ length: 27 }, (value, index) => index < 9 ? ((index+1)/10) : (index-8+1)/2)" :value="(scale < 1 ? ('0' + scale*10) : scale).toString().replace('.', '-')" :key="scale">{{ scale }}</option>>
      </select>
      <small>
        {{ $t("editor.globals.scaling_description") }}
      </small>
    </div>
    <div class="editor-lang">
      <label>
        {{ $t("editor.globals.language_label") }}:
      </label>
      <select v-model="globals.lang">
        <option v-for="locale in availableLocales" :value="locale" :key="locale">{{ $t("locale." + locale) }}</option>
      </select>
      <small>
        {{ $t("editor.globals.language_description") }}
      </small>
    </div>
    <div class="editor-showTimespan">
      <input type="checkbox" v-model="globals.definition.showTimeRange" id="showTimeRange">&nbsp;<label for="showTimeRange">
      {{ $t("editor.globals.timerange_label") }}
    </label>
    </div>
  </div>
</template>