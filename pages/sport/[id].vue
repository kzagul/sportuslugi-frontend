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

const currentDataLayout = ref("services");

function changeDataLayout(layoutType) {
  currentDataLayout.value = layoutType;
}
</script>

<template>
  <div>
    <div class="py-8">
      <h2
        class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        Вид спорта: {{ sport?.name || "не найден" }}
      </h2>
      <p class="text-gray-500 sm:text-xl dark:text-gray-400 w-1/2">
        Выберите ниже спортивные учреждения где по данному виду спорта
        предоставляют услуги, или просмотрите весь список спортивных услуг.
      </p>
    </div>

    <div class="flex flex-row gap-4 py-4">
      <button
        class="flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        @click="changeDataLayout('services')"
      >
        <BaseIcon :path="mdiTableColumn" :size="20" />
        Услуги
      </button>
      <button
        class="flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        @click="changeDataLayout('institutions')"
      >
        <BaseIcon :path="mdiViewGridOutline" :size="20" />
        Учреждения
      </button>
    </div>

    <div class="flex flex-col gap-12">
      <div v-show="currentDataLayout === `services`">
        <div>Услуги по данному виду спорта</div>
        <div v-for="(service, index) in sport.services" :key="index">
          {{ service?.name }}
        </div>
      </div>

      <div v-show="currentDataLayout === `institutions`">
        <div>Учреждения по данному виду спорта</div>
        <div v-for="(institution, index) in sport.institutions" :key="index">
          {{ institution?.name }}
        </div>
      </div>
    </div>
  </div>
</template>
