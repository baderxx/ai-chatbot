<script lang="ts" setup>
definePageMeta({
  title: "pages.title.top",
});
const { locale, locales, t } = useI18n();
</script>
<template>
  <div>
    <p>{{ t("pages.top.description") }}</p>
    <p>{{ t("pages.top.languages") }}</p>
  </div>
</template>
