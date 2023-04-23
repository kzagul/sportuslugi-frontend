<template>
  <div class="relative">
    <nuxt-link
      :to="`/sport/${sport.id}`"
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl h-36 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 z-10"
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
    <!-- <div
      v-if="authStore.user && isAdmin"
      class="absolute right-0 bottom-0 flex flex-row gap-4 text-black"
    >
      <button class="max-w-max h-10 z-20">Изменить</button>
      <button class="max-w-max h-10">Удалить</button>
    </div> -->
  </div>
</template>

<script setup>
import { useAdmin } from "~~/composables/auth";
// import { User } from "~~/types/user";

import { useUserStore } from "~~/stores/user";

defineProps({
  sport: {
    type: Object,
    default: null,
  },
});
const authStore = useUserStore();

// const currentUser = useAuthUser();
const isAdmin = ref();
// onMounted(() => {
isAdmin.value = useAdmin();
</script>
