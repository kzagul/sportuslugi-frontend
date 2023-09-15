<script setup lang="ts">
import { initModals } from "flowbite";
import { mdiClose, mdiForwardburger, mdiBackburger } from "@mdi/js";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

import { useUserStore } from "~~/stores/user";
const authStore = useUserStore();

await authStore.getAllUsers();

const user = computed(() => {
  return authStore.user;
});

const users = computed(() => {
  return authStore.users;
});

const getInstitutionOfCurrentUser = computed(() => {
  const currentUser = users.value?.find(
    (item: any) => item.id === user.value?.id
  );
  return currentUser?.contact_user_of[0];
});

console.log(users.value);
console.log(getInstitutionOfCurrentUser.value);

const navs = ref([
  { id: 1, title: "Главная", link: "/" },
  { id: 2, title: "О нас", link: "/about" },
  { id: 3, title: "Учреждения", link: "/institution" },
  { id: 4, title: "Услуги", link: "/service" },
  { id: 5, title: "Виды спорта", link: "/sport" },
  { id: 6, title: "Карта", link: "/ymap" },
]);

// states
const dropdownOpened = ref(false);
const modalOpened = ref(false);

onMounted(() => {
  initModals();
});

const emit = defineEmits(["response"]);
const isDrawbarOpened = ref<boolean>(true);

function changeDrawbarOpenStatus() {
  isDrawbarOpened.value = !isDrawbarOpened.value;
  emit("response", isDrawbarOpened.value);
}
</script>

<template>
  <div class="fixed top-0 w-full z-40">
    <header class="">
      <nav class="bg-white py-2.5">
        <div
          class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
        >
          <div class="flex flex-row items-center gap-4">
            <button
              id="toggleSidebar"
              aria-expanded="true"
              aria-controls="sidebar"
              class="flex justify-center items-center p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
              @click="changeDrawbarOpenStatus"
            >
              <BaseIcon
                v-if="!isDrawbarOpened"
                :path="mdiForwardburger"
                :size="32"
                class="w-full"
              />
              <BaseIcon
                v-if="isDrawbarOpened"
                :path="mdiBackburger"
                :size="32"
                class="w-full"
              />
            </button>
            <NuxtLink to="/" class="flex items-center">
              <img
                src="/images/sport_logo2.svg"
                class="mr-3 h-10 sm:h-14"
                alt="Спорт услуги лого"
              />
            </NuxtLink>

            <div v-if="authStore.isAdmin" class="text-2xl">
              Панель администратора
            </div>
            <div
              v-if="authStore.isModerator"
              class="flex flex-row gap-2 items-center text-xl"
            >
              Спортивное учреждение:
              <span class="text-2xl">
                {{ getInstitutionOfCurrentUser?.name }}
              </span>
            </div>
          </div>

          <div class="hidden md:flex items-center gap-4 lg:order-2">
            <!-- v-if="currentUser" -->
            <template v-if="authStore.user">
              <button
                class="text-gray-800 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                @click="authStore.handleLogout"
              >
                Выход
              </button>
            </template>

            <template v-else>
              <div class="flex flex-row gap-2">
                <NuxtLink
                  to="/login"
                  class="text-gray-800 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Вход
                </NuxtLink>

                <NuxtLink
                  to="/register"
                  class="text-gray-800 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Регистрация
                </NuxtLink>
              </div>
            </template>
          </div>
        </div>
      </nav>
    </header>
    <hr class="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

    <div
      v-if="modalOpened === true"
      class="fixed z-40 flex justify-center inset-0 bg-gray-300 bg-opacity-40 backdrop-blur-[24px] overflow-hidden overflow-y-auto h-full w-full"
      :style="modalOpened ? `body {height: 100%; overflow-y: fixed;}` : ``"
    >
      <div class="flex flex-col gap-[22px] w-full z-30">
        <button
          class="flex justify-end items-center"
          @click="modalOpened = !modalOpened"
        >
          <span class="sr-only">Open main menu</span>
          <BaseIcon
            :path="mdiClose"
            h="h-16"
            w="w-16"
            :size="42"
            class="fill-blue-500"
          />
        </button>

        <div class="flex justify-center items-center flex-col gap-4">
          <button
            class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <span class="sr-only">Open user menu</span>
            <img class="w-24 h-24 rounded-full" alt="user photo" />
          </button>

          <template v-if="authStore.user">
            <PageLink
              v-if="authStore.isAdmin"
              to="/admin"
              class="text-3xl text-black"
              @click="modalOpened = !modalOpened"
            >
              Админ панель
            </PageLink>

            <PageLink
              v-if="authStore.isModerator"
              to="/mod"
              class="text-3xl text-black"
              @click="modalOpened = !modalOpened"
            >
              Панель учреждения
            </PageLink>
          </template>

          <hr
            class="border-white w-full sm:mx-auto dark:border-gray-700 lg:my-8"
          />

          <PageLink
            v-for="(nav, index) in navs"
            :key="index"
            :to="nav.link"
            class="text-2xl text-black"
            @click="modalOpened = !modalOpened"
          >
            {{ nav.title }}
          </PageLink>
        </div>
      </div>
    </div>
  </div>
</template>
