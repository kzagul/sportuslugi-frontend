<script setup>
import { useRoute } from "vue-router";
import { useSportStore } from "~~/stores/sport";

const sportStore = useSportStore();

// await sportStore.fetchSports();

const route = useRoute();
const routeID = String(route.params.id);

await sportStore.fetchSportByID(routeID);

const sport = computed(() => {
  return sportStore.getCurrentSport;
});
</script>

<template>
  <div>
    <div>Вид спорта: {{ sport?.name || "не найден" }}</div>

    <div>Услуги по данному виду спорта</div>
    <div v-for="(service, index) in sport.services" :key="index">
      {{ service?.name }}
    </div>
  </div>
</template>
