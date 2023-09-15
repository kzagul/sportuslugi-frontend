<script setup lang="ts">
import { useRoute } from "vue-router";
import { useSportStore } from "~~/stores/sport";

// await sportStore.fetchSports();

const currentDataLayout = ref("services");

function changeDataLayout(layoutType) {
  currentDataLayout.value = layoutType;
}

const route = useRoute();
const routeID = String(route.params.id);

const sportStore = useSportStore();
await sportStore.fetchSportByID(routeID);

const sport = computed(() => {
  return sportStore.getCurrentSport;
});

const sportServices = ref(sport.value.services);
const sportInstitutions = ref(sport.value.institutions);
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
      <TabView class="flex flex-col w-full justify-center items-center">
        <TabPanel header="Услуги">
          <h2
            class="flex justify-center mb-4 text-3xl tracking-tight font-extrabold text-gray-900 py-4"
          >
            Спортивные услуги
          </h2>
          <div>
            <GridServices :services="sportServices" />
          </div>
        </TabPanel>
        <TabPanel header="Учреждения">
          <h2
            class="flex justify-center mb-4 text-3xl tracking-tight font-extrabold text-gray-900 py-4"
          >
            Cпортивные учреждения
          </h2>
          <GridInstitutions :institutions="sportInstitutions" />
        </TabPanel>
      </TabView>
      <!-- <button
        class="flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        @click="changeDataLayout('services')"
      >
        Услуги
      </button>
      <button
        class="flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        @click="changeDataLayout('institutions')"
      >
        Учреждения
      </button> -->
    </div>
    <!-- 
    <div class="flex flex-col gap-12">
      <div v-show="currentDataLayout === `services`">
        <h2
          class="flex justify-center mb-4 text-3xl tracking-tight font-extrabold text-gray-900 py-4"
        >
          Спортивные услуги
        </h2>
        <div>
          <GridServices :services="sportServices" />
        </div>
      </div>

      <div v-show="currentDataLayout === `institutions`">
        <h2
          class="flex justify-center mb-4 text-3xl tracking-tight font-extrabold text-gray-900 py-4"
        >
          Cпортивные учреждения
        </h2>
        <GridInstitutions :institutions="sportInstitutions" />
      </div>
    </div> -->
  </div>
</template>
