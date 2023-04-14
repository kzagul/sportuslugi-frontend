<template>
  <div>
    <h2
      class="flex justify-center mb-4 text-3xl tracking-tight font-extrabold text-gray-900 py-16"
    >
      Виды спорта
    </h2>

    <GridSports :sports="sports" />
  </div>
</template>

<script setup>
import { useSportStore } from "~~/stores/sport";

const sportStore = useSportStore();

await sportStore.fetchSports();

const sports = computed(() => {
  return sportStore.getSports;
});
</script>
