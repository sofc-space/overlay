<script setup>
import Slogan from "@/components/home/Slogan.vue";
import HomePageWhyAndHow from "@/components/home/HomePageWhyAndHow.vue";
import HomePageExamples from "@/components/home/HomePageExamples.vue";
</script>

<template>
  <div class="page-builder">
    <div class="page-greeter">
      <h1>sofc's Stats</h1>
      <Slogan />
      <router-link to="/editor" class="button">{{ $t("pages.home.editor") }}</router-link>
    </div>
    <HomePageWhyAndHow />
    <HomePageExamples />
  </div>
</template>