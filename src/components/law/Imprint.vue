<script setup>
import {useI18n} from "vue-i18n";
const i18n = useI18n();
</script>

<template>
<div class="page-simple">
  <h1>{{ $t("pages.imprint.title") }}</h1>

  <p>{{ $t("pages.imprint.title_sub") }}</p>
  <p>{{ $t("pages.imprint.name") }}<br><br>
    {{ $t("pages.imprint.address.street") }}<br>
    {{ $t("pages.imprint.address.city") }}<br>
    {{ $t("pages.imprint.address.country") }}
  </p>
  <p><strong>{{ $t("pages.imprint.contact.title") }}</strong><br>
    {{ $t("pages.imprint.contact.phoneLabel") }}: {{ $t("pages.imprint.contact.phone") }}<br>
    {{ $t("pages.imprint.contact.emailLabel") }}:  {{ $t("pages.imprint.contact.email_address") }}
  </p>

  <h2>{{ $t("pages.imprint.disclaimer.title") }}</h2><br>
  <h3>{{ $t("pages.imprint.disclaimer.linksTitle") }}</h3>
  <p>{{ $t("pages.imprint.disclaimer.linksText") }}</p>

  <h3>{{ $t("pages.imprint.privacy.title") }}</h3>
  <p>{{ $t("pages.imprint.privacy.text1") }}</p>
  <p>{{ $t("pages.imprint.privacy.text2") }}</p>
  <p>{{ $t("pages.imprint.privacy.text3") }}</p>

</div>
</template>