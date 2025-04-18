<script setup>
const props = defineProps(["picture", "title", "description", "text", "editor_config"]);
</script>

<template>
<div class="example">
  <div class="example-image">
    <div class="image-wrapper">
      <router-link :to="'/editor' + editor_config">
        <img :src="picture" :alt="title" />
      </router-link>
    </div>
  </div>
  <div class="example-content">
    <h3>{{ title }}</h3>
    <small>{{ description }}</small>
    <p>{{ text }}</p>
    <router-link :to="'/editor' + editor_config" class="button">
      {{ $t("pages.home.examples.button") }}
    </router-link>
  </div>
</div>
</template>