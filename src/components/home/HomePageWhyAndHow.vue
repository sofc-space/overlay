<script setup lang="ts">
import PageContentContainers from "@/components/home/PageContentContainers.vue";
import PageContentContainersItem from "@/components/home/PageContentContainersItem.vue";
</script>
<template>
  <PageContentContainers>
    <PageContentContainersItem>
      <h2>{{ $t('pages.home.how_and_why.section1.title') }}</h2>
      <p v-html="$t('pages.home.how_and_why.section1.description')"></p>

      <h3>{{ $t('pages.home.how_and_why.section1.featuresTitle') }}</h3>
      <ul>
        <li>{{ $t('pages.home.how_and_why.section1.features.realtime') }}</li>
        <li>{{ $t('pages.home.how_and_why.section1.features.stylish') }}</li>
        <li>{{ $t('pages.home.how_and_why.section1.features.automated') }}</li>
      </ul>

      <h3>{{ $t('pages.home.how_and_why.section1.whyTitle') }}</h3>
      <p>{{ $t('pages.home.how_and_why.section1.whyDescription') }}</p>
    </PageContentContainersItem>

    <PageContentContainersItem>
      <h2>{{ $t('pages.home.how_and_why.section2.title') }}</h2>
      <p>{{ $t('pages.home.how_and_why.section2.intro') }}</p>

      <dl>
        <dt v-html="$t('pages.home.how_and_why.section2.steps.steamId.title')"></dt>
        <dd v-html="$t('pages.home.how_and_why.section2.steps.steamId.description')"></dd>

        <dt v-html="$t('pages.home.how_and_why.section2.steps.leetifyAccount.title')"></dt>
        <dd>{{ $t('pages.home.how_and_why.section2.steps.leetifyAccount.description') }}</dd>

        <dt v-html="$t('pages.home.how_and_why.section2.steps.privacy.title')"></dt>
        <dd v-html="$t('pages.home.how_and_why.section2.steps.privacy.description')"></dd>

        <dt>
          <router-link to="/editor" v-html="$t('pages.home.how_and_why.section2.steps.addSteamId.title')"></router-link>
        </dt>
        <dd>{{ $t('pages.home.how_and_why.section2.steps.addSteamId.description') }}</dd>

        <dt>{{ $t('pages.home.how_and_why.section2.steps.editOverlay.title') }}</dt>
        <dd>{{ $t('pages.home.how_and_why.section2.steps.editOverlay.description') }}</dd>

        <dt>{{ $t('pages.home.how_and_why.section2.steps.addToOBS.title') }}</dt>
        <dd>{{ $t('pages.home.how_and_why.section2.steps.addToOBS.description') }}</dd>
      </dl>
    </PageContentContainersItem>
  </PageContentContainers>
</template>