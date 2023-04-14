<template>
  <nuxt-link
    :to="`/institution/${institution.name}`"
    class="p-4 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 shadow-md"
  >
    <a href="#">
      <img
        class="mb-5 rounded-lg"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
        alt="office laptop working"
      />
    </a>
    <div class="flex flex-row overflow-scroll scrollbar-hide">
      <span
        v-for="(sport, index) in institution?.sports"
        :key="index"
        class="max-w-max bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
        >{{ sport.name }}</span
      >
    </div>
    <h2 class="my-2 text-2xl font-bold tracking-tight text-gray-900">
      <a href="#">{{ institution?.name }}</a>
    </h2>
    <p class="mb-4 font-light text-gray-500">
      Описание услуги: беговые тренировки, отработка силовых приемов, коучинг, а
      также распитие кофейных напитков
    </p>
    <!-- <div class="flex items-center space-x-4">
      <div class="font-medium">
        <div class="text-xl">{{ institution?.services[0]?.name }}</div>
        <div class="text-sm font-normal text-gray-500">Aug 15, 2021</div>
      </div>
    </div> -->
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps({
  institution: {
    type: Object,
    default: null,
  },
});
</script>
