<script setup>
defineProps({
  coords: {
    type: Object,
    default: () => {},
  },
  name: {
    type: Object,
    default: () => {},
  },
  type: {
    type: String,
    default: "checkbox",
    validator: (value) => ["checkbox", "radio", "switch"].includes(value),
  },
  componentClass: {
    type: String,
    default: null,
  },
  isColumn: Boolean,
  modelValue: {
    type: [Array, String, Number, Boolean],
    default: null,
  },
});
</script>

<template>
  <YandexMap :coordinates="[coords.latitude, coords.longitude]" :zoom="14">
    <YandexMarker
      :coordinates="[coords.latitude, coords.longitude]"
      :marker-id="123"
    >
      <template #component>
        <CustomBalloon ref="userMarker" v-model="name" />
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
</template>
