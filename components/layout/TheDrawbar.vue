<script setup>
// import { initDrawers } from "flowbite";
import { useUserStore } from "~~/stores/user";
const authStore = useUserStore();
// initialize components based on data attribute selectors
const isDrawbarOpened = ref(false);
</script>

<template>
  <div>
    <button
      data-drawer-target="sidebar-user"
      data-drawer-toggle="sidebar-user"
      aria-controls="sidebar-user"
      type="button"
      class="fixed top-0 left-0 flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      @click="isDrawbarOpened = !isDrawbarOpened"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>

    <aside
      id="sidebar-user"
      class="hidden sm:flex z-40 sm:w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div
        class="overflow-y-auto py-4 px-3 w-full h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="text-center text-gray-500 dark:text-gray-400">
          <NuxtLink to="/" class="flex justify-center items-center mb-12">
            <img
              src="/images/sport_logo2.svg"
              class="h-10 sm:h-14"
              alt="Спорт услуги лого"
            />
          </NuxtLink>
          <img
            class="mx-auto mb-4 w-20 h-20 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            alt="Micheal Avatar"
          />
          <h3
            class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <a href="#">{{ authStore.user?.name }}</a>
          </h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            {{ authStore.user?.email }}
          </p>

          <button
            class="w-full group flex justify-center items-center py-2 px-4 text-sm transition-colors duration-100 hover:text-error hover:bg-gray-100"
          >
            <nuxt-link to="/" @click="authStore.handleLogout">
              Выход
            </nuxt-link>
          </button>

          <div class="flex justify-center mb-4 space-x-1">
            <div>
              <a
                href="#"
                class="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              >
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
                </svg>
              </a>
            </div>
            <div>
              <a
                href="#"
                class="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              >
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                  ></path>
                </svg>
              </a>
            </div>
            <div>
              <a
                href="#"
                class="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              >
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700"
        >
          <button
            class="w-full group flex items-center py-2 px-4 text-sm transition-colors duration-100 hover:text-primary-600 hover:bg-gray-100"
          >
            <nuxt-link to="/admin"> Дашборд </nuxt-link>
          </button>

          <button
            class="w-full group flex items-center py-2 px-4 text-sm transition-colors duration-100 hover:text-primary-600 hover:bg-gray-100"
          >
            <nuxt-link to="/profile"> Мой профиль </nuxt-link>
          </button>

          <button
            class="w-full group flex items-center py-2 px-4 text-sm transition-colors duration-100 hover:text-primary-600 hover:bg-gray-100"
          >
            <nuxt-link to="/"> Статистика </nuxt-link>
          </button>
        </div>

        <div
          class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700"
        >
          <p class="text-sm">Управление</p>
          <button
            class="w-full group flex items-center py-2 px-4 text-sm transition-colors duration-100 hover:text-primary-600 hover:bg-gray-100"
          >
            <nuxt-link to="/"> Пользователи </nuxt-link>
          </button>

          <button
            class="w-full group flex items-center py-2 px-4 text-sm transition-colors duration-100 hover:text-primary-600 hover:bg-gray-100"
          >
            <nuxt-link to="/"> Учреждения </nuxt-link>
          </button>

          <button
            class="w-full group flex items-center py-2 px-4 text-sm transition-colors duration-100 hover:text-primary-600 hover:bg-gray-100"
          >
            <nuxt-link to="/"> Услуги </nuxt-link>
          </button>

          <button
            class="w-full group flex items-center py-2 px-4 text-sm transition-colors duration-100 hover:text-primary-600 hover:bg-gray-100"
          >
            <nuxt-link to="/"> Виды спорта </nuxt-link>
          </button>
        </div>

        <div
          class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700"
        >
          <button
            class="w-full group flex items-center py-2 px-4 text-sm transition-colors duration-100 hover:text-primary-600 hover:bg-gray-100"
          >
            <nuxt-link to="/"> Контакты </nuxt-link>
          </button>
        </div>
      </div>
    </aside>
  </div>
</template>
