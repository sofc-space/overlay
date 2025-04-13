<script setup>
import i18n, {setupI18n, setLocale, getLocale} from "@/i18n.js";
import {inject, ref, watch} from "vue";
const $cookies = inject('$cookies');

const availableLocales = i18n.global.availableLocales;
const selectedLanguage = ref(getLocale());
watch(selectedLanguage, (locale) => {
  setLocale(locale)
})

setupI18n();

</script>

<template>
<div class="language-selector">
  <label>
    {{ $t("locale.selector.label") }}:
    <select v-model="selectedLanguage">
      <option v-for="locale in availableLocales" :key="locale" :value="locale">{{ $t("locale." + locale) }}</option>
    </select>
  </label>
</div>
</template>