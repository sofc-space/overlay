<script setup>
defineProps(["globals"]);

const langMap = {
  "en": "English",
  "de": "Deutsch",
};
</script>

<template>
  <div class="editor-globals">
    <div class="editor-steam64id">
      <label>Steam64 ID</label>
      <input type="text" v-model="globals.steam64Id" />
      <small>
        <a href="https://www.steamidfinder.com/" target="_blank">how to find this</a>
      </small>
    </div>
    <div class="editor-scaling">
      <label>Scaling</label>
      <select v-model="globals.scaling">
        <option v-for="scale in Array.from({ length: 18 }, (value, index) => index < 9 ? ((index+1)/10) : index-8)" :value="(scale < 1 ? ('0' + scale*10) : scale)" :key="scale">{{ scale }}</option>>
      </select>
      <small>
        size of your text
      </small>
    </div>
    <div class="editor-lang">
      <label>Language</label>
      <select v-model="globals.lang">
        <option v-for="(value, key) in langMap" :value="key" :key="key">{{ value }}</option>>
      </select>
      <small>
        language of your text
      </small>
    </div>
    <div class="editor-showTimespan">
      <input type="checkbox" v-model="globals.definition.showTimeRange" id="showTimeRange"> <label for="showTimeRange">show time range</label>
    </div>
  </div>
</template>