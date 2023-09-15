<template>
  <section class="bg-white">
    <div class="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="grid gap-8 sm:grid-cols-3 lg:grid-cols-3">
        <CardStandart
          v-for="(service, index) in services"
          :key="index"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { ISport } from "@/types/sport";
// import { IService } from "~/types/service";
// import { useServiceStore } from "~/stores/service";

// const serviceStore = useServiceStore();

// await serviceStore.fetchServices();

// const services = computed(() => {
//   return serviceStore.getServices;
// });

// defineProps<{
//   services: ISport;
//   // {
//   //   type: ISport,
//   //   default: {} as ISport
//   // }
// }>();

defineProps({
  services: {
    type: Object,
    default: null,
    // type: ISport,
    // default: {} as ISport,
  },
});

// defineProps({
//   services: {
//     type: Object,
//     default: null,
//   },
//   rounded: {
//     type: String,
//     default: "rounded-2xl",
//   },
//   flex: {
//     type: String,
//     default: "flex-col",
//   },
//   hasComponentLayout: Boolean,
//   hasTable: Boolean,
//   isForm: Boolean,
//   isHoverable: Boolean,
//   isModal: Boolean,
// });
</script>
