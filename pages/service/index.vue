<template>
  <div>
    все Услуги
    <br />

    <div>
      <p v-for="(service, index) in services" :key="index">
        {{ service.name }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useServiceStore } from "~/stores/service";

const serviceStore = useServiceStore();

await serviceStore.fetchServices();

const services = computed(() => {
  return serviceStore.getServices;
});
</script>
