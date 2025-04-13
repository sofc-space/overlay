<script setup>

</script>

<template>
<div class="page-simple">
  <h1>{{ $t('pages.data_protection.title') }}</h1>

  <h2>{{ $t('pages.data_protection.preamble_title') }}</h2>
  <p>{{ $t('pages.data_protection.preamble_text1') }}</p>
  <p>{{ $t('pages.data_protection.preamble_text2') }}</p>
  <p>{{ $t('pages.data_protection.preamble_date') }}</p>

  <h2>{{ $t('pages.data_protection.index_title') }}</h2>

  <h2>{{ $t('pages.data_protection.responsible_title') }}</h2>
  <p>
    {{ $t('pages.data_protection.responsible_info.name') }}<br />
    {{ $t('pages.data_protection.responsible_info.street') }}<br />
    {{ $t('pages.data_protection.responsible_info.city') }}<br />
    {{ $t('pages.data_protection.responsible_info.country') }}
  </p>
  <p>{{ $t('pages.data_protection.responsible_info.email') }}</p>
  <p>{{ $t('pages.data_protection.responsible_info.phone') }}</p>
  <p>
    {{ $t('pages.data_protection.imprint') }}:
    <router-link to="/imprint">{{ $t('pages.data_protection.responsible_info.imprint') }}</router-link>
  </p>

  <h2>{{ $t('pages.data_protection.overview_title') }}</h2>
  <p>{{ $t('pages.data_protection.overview_intro') }}</p>

  <h3>{{ $t('pages.data_protection.overview_data_types_title') }}</h3>
  <ul>
    <li v-for="(item, index) in $tm('pages.data_protection.overview_data_types', item)" :key="index">{{ item }}</li>
  </ul>

  <h3>{{ $t('pages.data_protection.overview_subjects_title') }}</h3>
  <ul>
    <li v-for="(subject, index) in $tm('pages.data_protection.overview_subjects', subject)" :key="index">{{ subject }}</li>
  </ul>

  <h3>{{ $t('pages.data_protection.overview_purposes_title') }}</h3>
  <ul>
    <li v-for="(purpose, index) in $tm('pages.data_protection.overview_purposes', purpose)" :key="index">{{ purpose }}</li>
  </ul>

  <h2>{{ $t('pages.data_protection.legal_basis_title') }}</h2>
  <p>{{ $t('pages.data_protection.legal_basis_dsgvo') }}</p>
  <p>{{ $t('pages.data_protection.legal_basis_legit_interest') }}</p>
  <p>{{ $t('pages.data_protection.legal_basis_germany') }}</p>
  <p>{{ $t('pages.data_protection.legal_basis_switzerland') }}</p>

  <h2>{{ $t('pages.data_protection.security_measures_title') }}</h2>
  <p>{{ $t('pages.data_protection.security_measures_intro') }}</p>
  <ul>
    <li v-for="(measure, index) in $tm('pages.data_protection.security_measures_details', measure)" :key="index">{{ measure }}</li>
  </ul>

  <h2>{{ $t('pages.data_protection.data_storage_title') }}</h2>
  <ul>
    <li v-for="(text, index) in $tm('pages.data_protection.data_storage_texts', text)" :key="index">{{ text }}</li>
  </ul>
  <p>{{ $t('pages.data_protection.data_storage_additional') }}</p>

  <h3>Retention Periods</h3>
  <ul>
    <li><strong>10 years:</strong> {{ $t('pages.data_protection.data_storage_retention.10_years') }}</li>
    <li><strong>8 years:</strong> {{ $t('pages.data_protection.data_storage_retention.8_years') }}</li>
    <li><strong>6 years:</strong> {{ $t('pages.data_protection.data_storage_retention.6_years') }}</li>
    <li><strong>3 years:</strong> {{ $t('pages.data_protection.data_storage_retention.3_years') }}</li>
  </ul>

  <h2>{{ $t('pages.data_protection.data_subject_rights_title') }}</h2>
  <ul>
    <li v-for="(right, index) in $tm('pages.data_protection.data_subject_rights', right)" :key="index">{{ right }}</li>
  </ul>

  <h2>{{ $t('pages.data_protection.hosting_title') }}</h2>
  <p>{{ $t('pages.data_protection.hosting_text') }}</p>

  <h2>{{ $t('pages.data_protection.cookies_title') }}</h2>
  <p>{{ $t('pages.data_protection.cookies_text') }}</p>
  <h3>Cookie Types</h3>
  <ul>
    <li><strong>Temporary:</strong> {{ $t('pages.data_protection.cookies_types.temporary') }}</li>
    <li><strong>Permanent:</strong> {{ $t('pages.data_protection.cookies_types.permanent') }}</li>
  </ul>

  <h2>{{ $t('pages.data_protection.social_media_title') }}</h2>
  <p>{{ $t('pages.data_protection.social_media_text') }}</p>
  <h3>{{ $t('pages.data_protection.social_media_youtube.title') }}</h3>
  <p>
    <strong>Provider:</strong> {{ $t('pages.data_protection.social_media_youtube.provider') }}<br />
    <strong>Privacy Policy:</strong>
    <a :href="$t('pages.data_protection.social_media_youtube.privacy_policy')" target="_blank">
      {{ $t('pages.data_protection.social_media_youtube.privacy_policy') }}
    </a><br />
    <strong>Opt-Out:</strong>
    <a :href="$t('pages.data_protection.social_media_youtube.opt_out')" target="_blank">
      {{ $t('pages.data_protection.social_media_youtube.opt_out') }}
    </a>
  </p>

  <h2>{{ $t('pages.data_protection.updates_title') }}</h2>
  <p>{{ $t('pages.data_protection.updates_text') }}</p>
</div>
</template>