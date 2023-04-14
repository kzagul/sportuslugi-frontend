<template>
  <div>
    <h2
      class="flex justify-center mb-4 text-3xl tracking-tight font-extrabold text-gray-900 py-16"
    >
      Cпортивные учреждения
    </h2>

    <GridInstitutions :institutions="institutions" />

    <!-- <div class="flex flex-col">
      <p v-for="(institution, index) in institutions" :key="index">
        {{ institution.name }}
      </p>
    </div> -->
  </div>
</template>

<script setup>
import { useInstitutionStore } from "~~/stores/institution";

const institutionStore = useInstitutionStore();

await institutionStore.fetchInstitutions();

const institutions = computed(() => {
  return institutionStore.getInstitutions;
});
</script>
