<template>
  <div class="fixed top-0 w-full z-40">
    <header class="wrapper">
      <nav class="bg-white py-2.5">
        <div
          class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
        >
          <div class="flex flex-row items-center gap-4">
            <NuxtLink to="/" class="flex items-center">
              <img
                src="/images/sport_logo.svg"
                class="mr-3 h-10 sm:h-14"
                alt="Flowbite Logo"
              />
            </NuxtLink>

            <!-- navigation -->
            <div class="hidden sm:flex gap-4">
              <PageLink
                v-for="(nav, index) in navs"
                :key="index"
                :to="nav.link"
              >
                {{ nav.title }}
              </PageLink>
            </div>
          </div>

          <div class="hidden sm:flex items-center gap-4 lg:order-2">
            <!-- v-if="currentUser" -->
            <template v-if="authStore.user">
              <template v-if="authStore.user">
                <PageLink v-if="authStore.isAdmin" to="/admin">
                  Админ панель
                </PageLink>

                <PageLink v-if="authStore.isModerator" to="/mod">
                  Панель учреждения
                </PageLink>

                <!-- v-if="isAdmin" -->
              </template>

              <template v-else>
                <PageLink to="/guest"> Public </PageLink>
              </template>

              <button
                id="user-menu-button"
                type="button"
                class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
                @click="dropdownOpened = !dropdownOpened"
              >
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" alt="user photo" />
                <!-- :src="currentUser.image" -->
              </button>

              <!-- Dropdown menu -->
              <div
                v-show="dropdownOpened"
                id="dropdown"
                class="z-50 absolute top-10 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow"
              >
                <div class="py-3 px-4">
                  <span class="block text-sm font-semibold text-gray-900">
                    <!-- {{ currentUser.name }} -->
                    {{ authStore.user.name }}
                    <!-- name -->
                    <!-- Neil sims -->
                  </span>
                  <span class="block text-sm font-light text-gray-500 truncate">
                    <!-- {{ currentUser.email }} -->
                    {{ authStore.user.email }}
                    <!-- email -->
                    <!-- name@flowbite.com -->
                  </span>
                </div>
                <ul
                  class="py-1 font-light text-gray-500"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <nuxt-link
                      to="/profile"
                      class="block py-2 px-4 text-sm hover:bg-gray-100"
                    >
                      Мой профиль</nuxt-link
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm hover:bg-gray-100"
                      >Карта рекомендаций</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm hover:bg-gray-100"
                      >Настройки</a
                    >
                  </li>
                </ul>
                <ul
                  class="py-1 font-light text-gray-500"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <a
                      href="#"
                      class="flex items-center py-2 px-4 text-sm hover:bg-gray-100"
                      ><svg
                        class="mr-2 w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Избранное</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center py-2 px-4 text-sm hover:bg-gray-100"
                      ><svg
                        class="mr-2 w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                        ></path>
                      </svg>
                      Мои услуги
                    </a>
                  </li>
                </ul>
                <ul
                  class="py-1 font-light text-gray-500"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm hover:bg-gray-100"
                      @click="authStore.handleLogout"
                      >Выход</a
                    >
                  </li>
                </ul>
              </div>

              <button
                class="text-gray-800 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                @click="authStore.handleLogout"
              >
                Выход
              </button>
            </template>

            <template v-else>
              <PageLink to="/guest" class="text-gray-800"> Public </PageLink>
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

          <div class="flex sm:hidden items-center lg:order-2">
            <template v-if="authStore.user">
              <button
                id="user-menu-button"
                type="button"
                class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
                @click="dropdownOpened = !dropdownOpened"
              >
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" alt="user photo" />
                <!-- :src="currentUser.image" -->
              </button>
              <button
                class="text-gray-800 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                @click="authStore.handleLogout"
              >
                Выход
              </button>
            </template>
            <template v-else>
              <div class="flex flex-row gap-1">
                <NuxtLink
                  to="/login"
                  class="text-gray-800 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                >
                  Вход
                </NuxtLink>

                <NuxtLink
                  to="/register"
                  class="text-gray-800 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                >
                  Регистрация
                </NuxtLink>
              </div>
            </template>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              @click="modalOpened = !modalOpened"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
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

          <template v-else>
            <PageLink
              to="/guest"
              class="text-3xl text-black"
              @click="modalOpened = !modalOpened"
            >
              Public
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

<script setup lang="ts">
import { initModals } from "flowbite";
import { mdiClose } from "@mdi/js";

import { useUserStore } from "~~/stores/user";
const authStore = useUserStore();

const navs = ref([
  { id: 1, title: "Главная", link: "/" },
  { id: 2, title: "О нас", link: "/about" },
  { id: 3, title: "Учреждения", link: "/institution" },
  { id: 4, title: "Услуги", link: "/service" },
  { id: 5, title: "Виды спорта", link: "/sport" },
]);

// states
const dropdownOpened = ref(false);
const modalOpened = ref(false);

onMounted(() => {
  initModals();
});
</script>
