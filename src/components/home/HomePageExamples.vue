<script setup>
import {useI18n} from "vue-i18n";

const {t} = useI18n();

import Example from "@/components/home/Example.vue";
import Facecam from "@/assets/examples/Facecam.jpg";
import Handcam from "@/assets/examples/Handcam.jpg";
import Sidebar from "@/assets/examples/Sidebar.jpg";
import Topbar from "@/assets/examples/Topbar.jpg";
</script>

<template>
<div class="examples-wrapper">
  <h2>{{ t("pages.home.examples.title") }}</h2>
  <p>{{ t("pages.home.examples.caption") }}</p>
  <div class="examples">
    <Example :picture="Facecam" :title="t('pages.home.examples.facecam.title')" :description="t('pages.home.examples.facecam.description')" :text="t('pages.home.examples.facecam.text')" editor_config="?steam64Id=76561199388500493&scaling=08&editor_lang=en&definition=eyJjb250YWluZXJzIjpbeyJzY2hlbWUiOiJ0aGVkYXJrIiwic2NhbGluZyI6bnVsbCwiY29udGVudCI6W1sic2Vzc2lvbi5raWxsIiwic2Vzc2lvbi5kZWF0aCJdLCJzZXNzaW9uLmtkIiwic2Vzc2lvbi5hZHIiLCJzZXNzaW9uLmxlZXRpZnlfcmF0aW5nIixbInNlc3Npb24ud2luIix7Im1ldHJpYyI6InN0YXRpYy5kZWxpbWl0ZXIiLCJwcm9wcyI6eyJjaGFyIjoiLyJ9fSwic2Vzc2lvbi50aWUiLHsibWV0cmljIjoic3RhdGljLmRlbGltaXRlciIsInByb3BzIjp7ImNoYXIiOiIvIn19LCJzZXNzaW9uLmxvc3MiXV19XSwic2hvd1RpbWVSYW5nZSI6ZmFsc2V9&ratio_w=3&ratio_h=1" />
    <Example :picture="Handcam" :title="t('pages.home.examples.handcam.title')" :description="t('pages.home.examples.handcam.description')" :text="t('pages.home.examples.handcam.text')" editor_config="?steam64Id=76561199388500493&scaling=1&editor_lang=en&definition=eyJjb250YWluZXJzIjpbeyJzY2hlbWUiOiJ0aGVkYXJrIiwic2NhbGluZyI6IjA5IiwiY29udGVudCI6W1sic2Vzc2lvbi5raWxsIiwic2Vzc2lvbi5kZWF0aCJdLCJzZXNzaW9uLmtkIiwic2Vzc2lvbi5hZHIiLCJzZXNzaW9uLmhzX3JhdGUiLCJzZXNzaW9uLmxlZXRpZnlfcmF0aW5nIiwic2Vzc2lvbi53aW5yYXRlIl19LHsic2NoZW1lIjoic2VtaSIsInNjYWxpbmciOiIxIiwiY29udGVudCI6W1sic2Vzc2lvbi5wcmVtaWVyX3N0YXJ0Iix7Im1ldHJpYyI6InN0YXRpYy5kZWxpbWl0ZXIiLCJwcm9wcyI6eyJjaGFyIjoi4oaSIn19LCJzZXNzaW9uLnByZW1pZXJfY3VycmVudCJdLFsicHJlbWllcl9zZWFzb24uY3VycmVudF9zZWFzb25fd2luIix7Im1ldHJpYyI6InN0YXRpYy5kZWxpbWl0ZXIiLCJwcm9wcyI6eyJjaGFyIjoiLyJ9fSx7Im1ldHJpYyI6InN0YXRpYy5zdGF0aWMiLCJwcm9wcyI6eyJsYWJlbCI6InRhcmdldCIsInZhbHVlIjoiMTI1IiwiY29sb3IiOiJhdmVyYWdlIn19XSwic2Vzc2lvbi5tYXRjaGVzIixbInNlc3Npb24ud2luIix7Im1ldHJpYyI6InN0YXRpYy5kZWxpbWl0ZXIiLCJwcm9wcyI6eyJjaGFyIjoiLyJ9fSwic2Vzc2lvbi50aWUiLHsibWV0cmljIjoic3RhdGljLmRlbGltaXRlciIsInByb3BzIjp7ImNoYXIiOiIvIn19LCJzZXNzaW9uLmxvc3MiXV19XSwic2hvd1RpbWVSYW5nZSI6dHJ1ZX0=&ratio_w=2&ratio_h=1" />
    <Example :picture="Topbar" :title="t('pages.home.examples.topbar.title')" :description="t('pages.home.examples.topbar.description')" :text="t('pages.home.examples.topbar.text')" editor_config="?steam64Id=76561199388500493&scaling=1&editor_lang=en&definition=eyJjb250YWluZXJzIjpbeyJzY2hlbWUiOiJ0aGVkYXJrIiwic2NhbGluZyI6bnVsbCwiY29udGVudCI6W1sic2Vzc2lvbi5raWxsIiwic2Vzc2lvbi5kZWF0aCJdLCJzZXNzaW9uLmtkIiwic2Vzc2lvbi5hZHIiLCJzZXNzaW9uLmxlZXRpZnlfcmF0aW5nIixbInNlc3Npb24ud2luIix7Im1ldHJpYyI6InN0YXRpYy5kZWxpbWl0ZXIiLCJwcm9wcyI6eyJjaGFyIjoiLyJ9fSwic2Vzc2lvbi50aWUiLHsibWV0cmljIjoic3RhdGljLmRlbGltaXRlciIsInByb3BzIjp7ImNoYXIiOiIvIn19LCJzZXNzaW9uLmxvc3MiXV19XSwic2hvd1RpbWVSYW5nZSI6ZmFsc2V9&ratio_w=3&ratio_h=1" />
    <Example :picture="Sidebar" :title="t('pages.home.examples.sidebar.title')" :description="t('pages.home.examples.sidebar.description')" :text="t('pages.home.examples.sidebar.text')" editor_config="?steam64Id=76561199388500493&scaling=2&editor_lang=en&definition=eyJjb250YWluZXJzIjpbeyJzY2hlbWUiOiJ0aGVkYXJrIiwic2NhbGluZyI6Im51bGwiLCJjb250ZW50IjpbWyJzZXNzaW9uLmtpbGwiLCJzZXNzaW9uLmRlYXRoIl0sInNlc3Npb24ua2QiXX0seyJzY2hlbWUiOiJ0aGVkYXJrIiwic2NhbGluZyI6Im51bGwiLCJjb250ZW50IjpbInNlc3Npb24uYWRyIiwic2Vzc2lvbi5oc19yYXRlIiwic2Vzc2lvbi5tYXRjaGVzIl19LHsic2NoZW1lIjoidGhlZGFyayIsInNjYWxpbmciOiJudWxsIiwiY29udGVudCI6WyJzZXNzaW9uLndpbnJhdGUiLFsic2Vzc2lvbi53aW4iLHsibWV0cmljIjoic3RhdGljLmRlbGltaXRlciIsInByb3BzIjp7ImNoYXIiOiIvIn19LCJzZXNzaW9uLnRpZSIseyJtZXRyaWMiOiJzdGF0aWMuZGVsaW1pdGVyIiwicHJvcHMiOnsiY2hhciI6Ii8ifX0sInNlc3Npb24ubG9zcyJdXX0seyJzY2hlbWUiOiJ0aGVkYXJrIiwic2NhbGluZyI6Im51bGwiLCJjb250ZW50IjpbWyJzZXNzaW9uLnByZW1pZXJfc3RhcnQiLHsibWV0cmljIjoic3RhdGljLmRlbGltaXRlciIsInByb3BzIjp7ImNoYXIiOiLihpIifX0sInNlc3Npb24ucHJlbWllcl9zdGFydCJdLCJwcmVtaWVyX3NlYXNvbi5jdXJyZW50X3NlYXNvbl93aW4iXX1dLCJzaG93VGltZVJhbmdlIjp0cnVlfQ==&ratio_w=3&ratio_h=4" />
  </div>
</div>
</template>