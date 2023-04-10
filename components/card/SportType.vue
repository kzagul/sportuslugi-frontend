<template>
  <div>
    <nuxt-link
      :to="`/sport/${sport.id}`"
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl h-36 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        class="object-cover w-full rounded-t-lg h-4 md:h-auto md:w-32 md:rounded-none md:rounded-l-lg"
        src="/images/home_logo.png"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ sport.name }}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Описание вида спорта
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
defineProps({
  sport: {
    type: Object,
    default: null,
  },
});
</script>
