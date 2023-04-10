<template>
  <section class="bg-white py-8 sm:py-16">
    <h2
      class="flex justify-center mb-4 text-3xl tracking-tight font-extrabold text-gray-900"
    >
      Спортивные учреждения
    </h2>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="grid gap-8 sm:grid-cols-3 lg:grid-cols-3">
        <article
          v-for="(service, index) in services"
          :key="index"
          class="p-4 bg-white rounded-lg border border-gray-200 shadow-md"
        >
          <a href="#">
            <img
              class="mb-5 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
              alt="office laptop working"
            />
          </a>
          <span
            class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >Вид спорта</span
          >
          <h2 class="my-2 text-2xl font-bold tracking-tight text-gray-900">
            <a href="#">{{ service.name }}</a>
          </h2>
          <p class="mb-4 font-light text-gray-500">
            Описание услуги: беговые тренировки, отработка силовых приемов,
            коучинг, а также распитие кофейных напитков
          </p>
          <div class="flex items-center space-x-4">
            <img
              class="w-10 h-10 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="Jese Leos avatar"
            />
            <div class="font-medium">
              <div>Фитнес клуб 'Жизнь март'</div>
              <div class="text-sm font-normal text-gray-500">Aug 15, 2021</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useServiceStore } from "~/stores/service";

const serviceStore = useServiceStore();

await serviceStore.fetchServices();

const services = computed(() => {
  return serviceStore.getServices;
});
</script>
