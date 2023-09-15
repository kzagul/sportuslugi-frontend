<script setup lang="ts">
import { useGeolocation } from "@vueuse/core";
// import { IInstitution } from "~/types/institution";
import { useTestStore } from "~~/stores/testdata";
// import CustomBalloon from "~~/components/ymap/CustomBalloon.vue";
import CustomBalloonInstitution from "~~/components/ymap/CustomBalloonInstitution.vue";
import CustomBalloonService from "~~/components/ymap/CustomBalloonService.vue";
import UserBalloon from "~~/components/ymap/UserBalloon.vue";
const testStore = useTestStore();
definePageMeta({ pageTransition: false });

const { coords, locatedAt, error, resume, pause } = useGeolocation();
// await resume();
// console.log(coords.value);

// function getCoords() {
//   return [coords.latitude, coords.longitude];
// }

const userMarker = ref(null);

const institutions = computed(() => {
  return testStore.institutions;
});

const services = computed(() => {
  return testStore.services;
});

const currentDataLayout = ref("services");

function changeDataLayout(layoutType) {
  currentDataLayout.value = layoutType;
}

const name = ref("Custom");

// function getDistance() {
//   // const
//   // coords.latitude, coords.longitude
// }
</script>

<template>
  <div>
    <div class="flex flex-row gap-4 py-4">
      <button
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
      </button>
    </div>
    <ClientOnly
      v-if="currentDataLayout === `institutions`"
      fallback-tag="span"
      fallback="Загрузка карты ..."
    >
      <YandexMap :coordinates="[coords.latitude, coords.longitude]" :zoom="14">
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
            v-for="(institution, index) in institutions"
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

    <ClientOnly
      v-if="currentDataLayout === `services`"
      fallback-tag="span"
      fallback="Загрузка карты ..."
    >
      <YandexMap :coordinates="[coords.latitude, coords.longitude]" :zoom="14">
        <YandexMarker
          :coordinates="[coords.latitude, coords.longitude]"
          :marker-id="123"
        >
          <template #component>
            <UserBalloon ref="userMarker" v-model="name" />
          </template>
        </YandexMarker>

        <YandexMarker
          v-for="(service, index) in services"
          :key="index"
          :coordinates="[
            service.institutions[0].coordinates.latitude,
            service.institutions[0].coordinates.longitude,
          ]"
          :marker-id="index"
        >
          <template #component>
            <CustomBalloonService v-model="name" :service-name="service.name" />
          </template>
        </YandexMarker>
      </YandexMap>
    </ClientOnly>
    <div>
      <pre lang="json">{{
        JSON.stringify(
          {
            coords: {
              accuracy: coords.accuracy,
              latitude: coords.latitude,
              longitude: coords.longitude,
              altitude: coords.altitude,
              altitudeAccuracy: coords.altitudeAccuracy,
              heading: coords.heading,
              speed: coords.speed,
            },
            locatedAt,
            error: error ? error.message : error,
          },
          null,
          2
        )
      }}</pre>
      <button @click="pause">Pause watch</button>
      <button @click="resume">Start watch</button>
    </div>
  </div>
</template>

<style>
.yandex-container {
  height: 600px;
}
.yandex-balloon {
  height: 60px;
  width: 60px;
  border-radius: 100px;
}
</style>
