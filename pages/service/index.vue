<script setup>
import { mdiViewGridOutline, mdiTableColumn } from "@mdi/js";
import { useServiceStore } from "~/stores/service";

const serviceStore = useServiceStore();

await serviceStore.fetchServices();

const services = computed(() => {
  return serviceStore.getServices;
});

const currentDataLayout = ref("table");

function changeDataLayout(layoutType) {
  currentDataLayout.value = layoutType;
}
// const userMarker = ref(null);
// const name = ref("Custom");

const visible = ref(false);
</script>

<template>
  <div>
    <div class="py-8">
      <h2
        class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        Cпортивные услуги
      </h2>
      <p class="mb-4 text-gray-500 sm:text-xl dark:text-gray-400 w-1/2">
        Выберите подходящую вам спортивную услугу
      </p>
    </div>

    <div class="flex flex-row gap-4 py-4">
      <button
        class="flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        @click="changeDataLayout('table')"
      >
        <BaseIcon :path="mdiTableColumn" :size="20" />
        Таблица
      </button>
      <button
        class="flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        @click="changeDataLayout('grid')"
      >
        <BaseIcon :path="mdiViewGridOutline" :size="20" />
        Сетка
      </button>
      <button
        class="flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium text-black hover:text-primary-700 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        @click="visible = true"
      >
        <BaseIcon :path="mdiViewGridOutline" :size="20" />
        Показать на карте
      </button>
    </div>

    <div v-show="currentDataLayout === `grid`" class="flex flex-col gap-4">
      <ToolbarForGrid />

      <GridServices :services="services" />
    </div>

    <div v-show="currentDataLayout === `table`" class="flex flex-col gap-4">
      <TableService />
    </div>
  </div>
</template>
