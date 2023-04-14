<template>
  <div>институт: {{ institution?.name || "не найден" }}</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useInstitutionStore } from "~~/stores/institution";

const institutionStore = useInstitutionStore();

const route = useRoute();
const routeName = String(route.params.name);
await institutionStore.fetchInstitutionByName(routeName);

const institution = computed(() => {
  return institutionStore.getCurrentInstitution;
});
onMounted(() => {
  console.log(route.params.name);
});
</script>
