<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import {useI18n} from "vue-i18n";
const {tm} = useI18n();

const visibleIndex = ref(0);
const unmounted = ref(false);

const activeIndex = ref(0);
const preActiveIndex = ref(0);

function goNextSlogan() {
  unmounted.value = false;
  visibleIndex.value++;
  const totalItems = tm("pages.home.slogans").length;
  activeIndex.value = visibleIndex.value%totalItems;
  preActiveIndex.value = visibleIndex.value%totalItems - 1;
  if(preActiveIndex.value < 0)
    preActiveIndex.value = totalItems - 1;
  setTimeout(() => {
    if(unmounted.value)
      return;
    goNextSlogan();
  }, 8000);
}

onMounted(goNextSlogan);
onUnmounted(() => unmounted.value = true);
</script>

<template>
  <div class="slogan-cycle">
    <div :class="'slogan ' + (activeIndex === index ? 'active' : (preActiveIndex === index ? 'pre' : ''))" v-for="(item, index) in $tm('pages.home.slogans')" :key="item">
      <p>{{ item }}</p>
    </div>
  </div>
</template>
