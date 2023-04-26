<template>
  <div>
    <h2
      class="flex justify-center mb-4 text-3xl tracking-tight font-extrabold text-gray-900 py-16"
    >
      Спортивные услуги
    </h2>

    <!-- <FormServiceAdd /> -->

    <GridServices :services="services" />
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
