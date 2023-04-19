<script setup>
// import { YandexMap, YandexMarker } from "vue-yandex-maps";
import { useGeolocation } from "@vueuse/core";
import CustomBalloon from "~/components/CustomBalloon.vue";
import CustomBalloonInstitution from "~/components/CustomBalloonInstitution.vue";
definePageMeta({ pageTransition: false });

const { coords, locatedAt, error, resume, pause } = useGeolocation();
// await resume();
// console.log(coords.value);

// function getCoords() {
//   return [coords.latitude, coords.longitude];
// }

const userMarker = ref(null);

const coordinates = [
  { latitude: 57.1351831, longitude: 65.5165347 },
  { latitude: 57.1324513, longitude: 65.5465347 },
  { latitude: 57.1392911, longitude: 65.5665347 },
];

// onMounted(() => {
//   const userMarkerHTML = userMarker.value.innerHTML;
//   console.log(userMarkerHTML);
// });

const name = ref("Custom");
</script>

<template>
  <ClientOnly>
    <YandexMap :coordinates="[coords.latitude, coords.longitude]" :zoom="14">
      <YandexMarker
        :coordinates="[coords.latitude, coords.longitude]"
        :marker-id="123"
      >
        <template #component>
          <CustomBalloon v-model="name" />
        </template>
      </YandexMarker>
      <YandexMarker :coordinates="[57.1371831, 65.5615347]" :marker-id="1234">
        <template #component>
          <CustomBalloonInstitution v-model="name" />
        </template>
      </YandexMarker>
      <YandexMarker
        v-for="(coordinate, index) in coordinates"
        :key="index"
        :coordinates="[coordinate.latitude, coordinate.longitude]"
        :marker-id="index"
      >
        <template #component>
          <CustomBalloon v-model="name" />
        </template>
      </YandexMarker>
    </YandexMap>
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
  </ClientOnly>
</template>

<style>
.yandex-container {
  height: 600px;
}

.yandex-balloon {
  height: 200px;
  width: 200px;
}
</style>
