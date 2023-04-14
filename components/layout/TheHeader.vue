<template>
  <div>
    <header class="wrapper relative">
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div
          class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
        >
          <div class="flex flex-row items-center gap-4">
            <NuxtLink to="/" class="flex items-center">
              <img
                src="/images/sport_logo.svg"
                class="mr-3 h-4 sm:h-14"
                alt="Flowbite Logo"
              />
            </NuxtLink>

            <!-- navigation -->
            <div class="flex gap-4">
              <PageLink
                v-for="(nav, index) in navs"
                :key="index"
                :to="nav.link"
              >
                {{ nav.title }}
              </PageLink>

              <template v-if="authStore.user">
                <!-- <PageLink to="/private"> Private </PageLink> -->
                <!-- <PageLink v-if="authStore.isAdmin" to="/admin">
                  Admin
                </PageLink> -->
                <PageLink v-if="authStore.isAdmin" to="/admin">
                  Admin composables
                </PageLink>
                <!-- v-if="isAdmin" -->
              </template>

              <!-- <template v-if="currentUser">
                <PageLink to="/private"> Private </PageLink>
                <PageLink v-if="isAdmin" to="/admin"> Admin </PageLink>
              </template> -->

              <template v-else>
                <PageLink to="/guest"> Public </PageLink>
              </template>
            </div>
          </div>

          <div class="flex items-center gap-4 lg:order-2">
            <!-- v-if="currentUser" -->
            <template v-if="authStore.user">
              <PageLink to="/private" class="text-gray-800"> Private </PageLink>

              <!-- <PageLink v-if="authStore.isAdmin" to="/admin"> Admin </PageLink> -->
              <!-- <PageLink v-if="isAdmin" to="/admin"> Admin </PageLink> -->

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
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm hover:bg-gray-100"
                      >Мой профиль</a
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
        </div>
      </nav>
      <hr
        class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
    </header>
  </div>
</template>

<script setup lang="ts">
import { initModals } from "flowbite";
import { useAuthUser, useAdmin, useAuth } from "~~/composables/auth";
import { User } from "~~/types/user";

import { useUserStore } from "~~/stores/user";
const authStore = useUserStore();

const currentUser = useAuthUser();
const isAdmin = ref();
// onMounted(() => {
isAdmin.value = useAdmin();
// })
// const isAdmin = await useAdmin();
const { logout } = useAuth();

const form = reactive({
  pending: false,
});

const navs = ref([
  { id: 1, title: "Главная", link: "/" },
  { id: 2, title: "О нас", link: "/about" },
  { id: 3, title: "Учреждения", link: "/institution" },
  { id: 4, title: "Услуги", link: "/service" },
  { id: 5, title: "Виды спорта", link: "/sport" },
]);

// states
const dropdownOpened = ref(false);

async function onLogoutClick() {
  try {
    form.pending = true;

    // await logout();
    // await authStore.handleLogout();

    await navigateTo("/");
  } catch (error) {
    console.error(error);
  } finally {
    form.pending = false;
  }
}

onMounted(() => {
  initModals();
  console.log(useAdmin());
});
</script>
