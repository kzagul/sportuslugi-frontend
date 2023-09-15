<script setup>
import { mdiViewGridOutline, mdiTableColumn } from "@mdi/js";
import { useSportStore } from "~~/stores/sport";

const sportStore = useSportStore();

await sportStore.fetchSports();

const sports = computed(() => {
  return sportStore.getSports;
});

const currentDataLayout = ref("table");

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
        Виды спорта
      </h2>
      <p class="mb-4 text-gray-500 sm:text-xl dark:text-gray-400 w-1/2">
        Выберите подходящий вам вариант и перейдите на раздел учреждений и услуг
        по соответствующему виду спорта
      </p>
    </div>
    <div class="flex flex-row gap-4 py-4">
      <!-- <button
        class="flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        @click="changeDataLayout('table')"
      >
        <BaseIcon :path="mdiTableColumn" :size="20" />
        Таблица
      </button> -->
      <!-- <button
        class="flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        @click="changeDataLayout('grid')"
      >
        <BaseIcon :path="mdiViewGridOutline" :size="20" />
        Сетка
      </button> -->
    </div>
    <div v-show="currentDataLayout === `grid`" class="flex flex-col gap-4">
      <ToolbarForGrid />

      <GridSports :sports="sports" />
    </div>

    <div v-show="currentDataLayout === `table`" class="flex flex-col gap-4">
      <TableSport />
    </div>
  </div>
</template>
