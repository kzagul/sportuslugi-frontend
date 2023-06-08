<script setup>
import { mdiViewGridOutline, mdiTableColumn } from "@mdi/js";
import { useGeolocation } from "@vueuse/core";
import { useInstitutionStore } from "~~/stores/institution";
import { useTestStore } from "~~/stores/testdata";
import CustomBalloonInstitution from "~~/components/ymap/CustomBalloonInstitution.vue";
import UserBalloon from "~~/components/ymap/UserBalloon.vue";

const institutionStore = useInstitutionStore();
const testStore = useTestStore();

await institutionStore.fetchInstitutions();

const institutions = computed(() => {
  return institutionStore.getInstitutions;
});

const { coords } = useGeolocation();
// await resume();
// console.log(coords.value);

// function getCoords() {
//   return [coords.latitude, coords.longitude];
// }

const institutionsTest = computed(() => {
  return testStore.institutions;
});

const currentDataLayout = ref("table");

function changeDataLayout(layoutType) {
  currentDataLayout.value = layoutType;
}
const userMarker = ref(null);
const name = ref("Custom");

const visible = ref(false);
</script>

<template>
  <div>
    <div class="py-8">
      <h2
        class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        Cпортивные учреждения
      </h2>
      <p class="mb-4 text-gray-500 sm:text-xl dark:text-gray-400 w-1/2">
        Выберите подходящее вам спортивное учреждение
      </p>
    </div>
    <div class="flex flex-row gap-4 py-4">
      <button
        class="flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium text-black hover:text-white rounded-lg hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        :class="
          currentDataLayout === `table`
            ? `text-white bg-primary-600 focus:ring-4 focus:ring-primary-300`
            : ``
        "
        @click="changeDataLayout('table')"
      >
        <BaseIcon :path="mdiTableColumn" :size="20" />
        Таблица
      </button>
      <button
        class="flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium text-black hover:text-white rounded-lg hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        :class="
          currentDataLayout === `grid`
            ? `text-white bg-primary-600 focus:ring-4 focus:ring-primary-300`
            : ``
        "
        @click="changeDataLayout('grid')"
      >
        <BaseIcon :path="mdiViewGridOutline" :size="20" />
        Сетка
      </button>
      <button
        class="flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium text-black hover:text-primary-600 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        @click="visible = true"
      >
        <BaseIcon :path="mdiViewGridOutline" :size="20" />
        Показать на карте
      </button>
    </div>

    <div v-show="currentDataLayout === `grid`" class="flex flex-col gap-4">
      <ToolbarForGrid />

      <GridInstitutions :institutions="institutions" />
    </div>

    <div v-show="currentDataLayout === `table`" class="flex flex-col gap-4">
      <TableInstitution />
    </div>

    <Dialog
      v-model:visible="visible"
      modal
      header="Спортивные учреждения на карте"
      :style="{ width: '80vw' }"
    >
      <ClientOnly fallback-tag="span" fallback="Загрузка карты ...">
        <YandexMap
          :coordinates="[coords.latitude, coords.longitude]"
          :zoom="14"
        >
          <YandexMarker
            :coordinates="[coords.latitude, coords.longitude]"
            :marker-id="123"
            radius="100"
          >
            <template #component>
              <UserBalloon ref="userMarker" v-model="name" />
            </template>
          </YandexMarker>

          <YandexClusterer :options="{ preset: 'islands#nightClusterIcons' }">
            <YandexMarker
              v-for="(institution, index) in institutionsTest"
              :key="index"
              :coordinates="[
                institution.coordinates.latitude,
                institution.coordinates.longitude,
              ]"
              :marker-id="index"
            >
              <template #component>
                <CustomBalloonInstitution
                  v-model="name"
                  :institution-name="institution.name"
                />
              </template>
            </YandexMarker>
          </YandexClusterer>
        </YandexMap>
      </ClientOnly>
    </Dialog>

    <!-- <div class="flex flex-col">
      <p v-for="(institution, index) in institutions" :key="index">
        {{ institution.name }}
      </p>
    </div> -->
  </div>
</template>

<style>
.yandex-container {
  height: 800px;
}
.yandex-balloon {
  height: 60px;
  width: 60px;
  border-radius: 100px;
}
</style>
