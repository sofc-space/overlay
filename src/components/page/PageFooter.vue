<script setup>

import LanguageSelector from "@/components/i18n/LanguageSelector.vue";
</script>

<template>
  <div class="page-footer">
    <div class="page-footer-copyright">
      {{ $t("footer.links.copyright") }}
    </div>
    <div class="page-footer-navigation">
      <router-link to="/editor">{{ $t("footer.links.editor") }}</router-link>
      <router-link to="/imprint">{{ $t("footer.links.imprint") }}</router-link>
      <router-link to="/data-protection">{{ $t("footer.links.data_protection") }}</router-link>
      <a href="https://www.twitch.tv/de_sofc" target="_blank">
        <i-fa6-brands-twitch /> de_sofc
      </a>
      <div>
        {{ $t("credits") }}
        <a href="https://leetify.com/" target="_blank">
          <img src="@/assets/leetify-logo-primary-white.svg" alt="leetify" />
        </a>
      </div>
    </div>
    <LanguageSelector />
  </div>
</template>
