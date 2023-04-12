<template>
  <article class="p-4 bg-white rounded-lg border border-gray-200 shadow-md">
    <a href="#">
      <img
        class="mb-5 rounded-lg"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
        alt="office laptop working"
      />
    </a>
    <span
      v-for="(sport, index) in service.sports"
      :key="index"
      class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
      >{{ sport.name }}</span
    >
    <h2 class="my-2 text-2xl font-bold tracking-tight text-gray-900">
      <a href="#">{{ service.name }}</a>
    </h2>
    <p class="mb-4 font-light text-gray-500">
      Описание услуги: беговые тренировки, отработка силовых приемов, коучинг, а
      также распитие кофейных напитков
    </p>
    <div class="flex items-center space-x-4">
      <!-- <img
        class="w-10 h-10 rounded-full"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
        alt="Jese Leos avatar"
      /> -->
      <div class="font-medium">
        <div class="text-xl">{{ service.institutions[0].name }}</div>
        <div class="text-sm font-normal text-gray-500">Aug 15, 2021</div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps({
  service: {
    type: Object,
    default: null,
  },
});
</script>
