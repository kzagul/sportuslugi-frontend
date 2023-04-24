<script setup lang="ts">
import {
  mdiRunFast,
  mdiBasketball,
  mdiHome,
  mdiAccountMultiple,
} from "@mdi/js";
import { useUserStore } from "~~/stores/user";
import { useSportStore } from "~~/stores/sport";
import { useServiceStore } from "~/stores/service";
import { useInstitutionStore } from "~~/stores/institution";

definePageMeta({
  middleware: ["admin-only"],
  layout: false,
});

const authStore = useUserStore();

// sports
const sportStore = useSportStore();
await sportStore.fetchSports();

const sports = computed(() => {
  return sportStore.getSports;
});

const amountSports = computed(() => (sports.value ? sports?.value.length : 0));

// services
const serviceStore = useServiceStore();
await serviceStore.fetchServices();

const services = computed(() => {
  return serviceStore.getServices;
});

const amountServices = computed(() =>
  services.value ? services?.value.length : 0
);

// institutions
const institutionStore = useInstitutionStore();
await institutionStore.fetchInstitutions();

const institutions = computed(() => {
  return institutionStore.getInstitutions;
});

const amountInstitutions = computed(() =>
  institutions.value ? institutions?.value.length : 0
);

// users
const userStore = useUserStore();
await userStore.getAllUsers();

const users = computed(() => {
  return userStore.users;
  // return userStore.users.users;
});

const amountAllUsers = computed(() => (users.value ? users?.value.length : 0));
</script>

<template>
  <NuxtLayout name="admin">
    <div class="grid gap-4">
      <div v-if="authStore.isAdmin" class="text-2xl py-12">Админ панель</div>
      <div v-else>Нет доступа</div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <div class="flex justify-between w-full mb-3">
            <div>
              <span class="block font-medium mb-3">Всего видов спорта</span>
              <div class="font-medium text-xl">{{ amountSports }}</div>
            </div>
            <div
              class="flex items-center justify-center bg-blue-100 rounded-full w-10 h-10"
            >
              <BaseIcon
                :path="mdiBasketball"
                :size="32"
                class="flex justify-center items-center"
              />
            </div>
          </div>
          <span class="text-green-500 font-medium">24 new </span>
          <span class="text-sm">since last visit</span>
        </div>

        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <div class="flex justify-between w-full mb-3">
            <div>
              <span class="block font-medium mb-3">Всего услуг</span>
              <div class="font-medium text-xl">{{ amountServices }}</div>
            </div>
            <div
              class="flex items-center justify-center bg-yellow-100 rounded-full w-10 h-10"
            >
              <BaseIcon
                :path="mdiRunFast"
                :size="32"
                class="flex justify-center items-center"
              />
            </div>
          </div>
          <span class="text-green-500 font-medium"
            >{{ amountServices / amountInstitutions }} услуг</span
          >
          <span class="text-sm">В среднем на одно учреждение</span>
        </div>

        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <div class="flex justify-between w-full mb-3">
            <div>
              <span class="block font-medium mb-3">Всего учреждений</span>
              <div class="font-medium text-xl">{{ amountInstitutions }}</div>
            </div>
            <div
              class="flex items-center justify-center bg-green-100 rounded-full w-10 h-10"
            >
              <BaseIcon
                :path="mdiHome"
                :size="32"
                class="flex justify-center items-center"
              />
            </div>
          </div>
          <span class="text-green-500 font-medium">520 </span>
          <span class="text-sm">newly registered</span>
        </div>

        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <div class="flex justify-between w-full mb-3">
            <div>
              <span class="block font-medium mb-3">Всего пользователей</span>
              <div class="font-medium text-xl">{{ amountAllUsers }}</div>
            </div>
            <div
              class="flex items-center justify-center bg-violet-100 rounded-full w-10 h-10"
            >
              <BaseIcon
                :path="mdiAccountMultiple"
                :size="32"
                class="flex justify-center items-center"
              />
            </div>
          </div>
          <span class="text-green-500 font-medium">85 </span>
          <span class="text-sm">responded</span>
        </div>
      </div>

      <!-- top uslugi -->
      <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <div class="flex justify-content-between align-items-center mb-5">
            <h5>Best Selling Products</h5>
            <div>
              <Button
                icon="pi pi-ellipsis-v"
                class="p-button-text p-button-plain p-button-rounded"
              />
              <ClientOnly>
                <Menu ref="menu2" :popup="true" :model="items" />
              </ClientOnly>
            </div>
          </div>
          <ul class="list-none p-0 m-0">
            <li
              class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"
            >
              <div>
                <span class="text-900 font-medium mr-2 mb-1 md:mb-0"
                  >Space T-Shirt</span
                >
                <div class="mt-1 text-600">Clothing</div>
              </div>
              <div class="mt-2 md:mt-0 flex align-items-center">
                <div
                  class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                  style="height: 8px"
                >
                  <div class="bg-orange-500 h-full" style="width: 50%" />
                </div>
                <span class="text-orange-500 ml-3 font-medium">%50</span>
              </div>
            </li>
            <li
              class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"
            >
              <div>
                <span class="text-900 font-medium mr-2 mb-1 md:mb-0"
                  >Portal Sticker</span
                >
                <div class="mt-1 text-600">Accessories</div>
              </div>
              <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div
                  class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                  style="height: 8px"
                >
                  <div class="bg-cyan-500 h-full" style="width: 16%" />
                </div>
                <span class="text-cyan-500 ml-3 font-medium">%16</span>
              </div>
            </li>
            <li
              class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"
            >
              <div>
                <span class="text-900 font-medium mr-2 mb-1 md:mb-0"
                  >Supernova Sticker</span
                >
                <div class="mt-1 text-600">Accessories</div>
              </div>
              <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div
                  class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                  style="height: 8px"
                >
                  <div class="bg-pink-500 h-full" style="width: 67%" />
                </div>
                <span class="text-pink-500 ml-3 font-medium">%67</span>
              </div>
            </li>
            <li
              class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"
            >
              <div>
                <span class="text-900 font-medium mr-2 mb-1 md:mb-0"
                  >Wonders Notebook</span
                >
                <div class="mt-1 text-600">Office</div>
              </div>
              <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div
                  class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                  style="height: 8px"
                >
                  <div class="bg-green-500 h-full" style="width: 35%" />
                </div>
                <span class="text-green-500 ml-3 font-medium">%35</span>
              </div>
            </li>
            <li
              class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"
            >
              <div>
                <span class="text-900 font-medium mr-2 mb-1 md:mb-0"
                  >Mat Black Case</span
                >
                <div class="mt-1 text-600">Accessories</div>
              </div>
              <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div
                  class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                  style="height: 8px"
                >
                  <div class="bg-purple-500 h-full" style="width: 75%" />
                </div>
                <span class="text-purple-500 ml-3 font-medium">%75</span>
              </div>
            </li>
            <li
              class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"
            >
              <div>
                <span class="text-900 font-medium mr-2 mb-1 md:mb-0"
                  >Robots T-Shirt</span
                >
                <div class="mt-1 text-600">Clothing</div>
              </div>
              <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div
                  class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                  style="height: 8px"
                >
                  <div class="bg-teal-500 h-full" style="width: 40%" />
                </div>
                <span class="text-teal-500 ml-3 font-medium">%40</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- uslugi -->
      <div
        class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
      >
        <div class="flow-root">
          <h3 class="text-xl font-semibold dark:text-white">
            Избранные услуги
          </h3>
          <ul class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <svg
                    class="w-6 h-6 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-base font-semibold text-gray-900 truncate dark:text-white"
                  >
                    Йога
                  </p>
                  <p
                    class="text-sm font-normal text-gray-500 truncate dark:text-gray-400"
                  >
                    Good balance
                  </p>
                </div>
                <div class="inline-flex items-center">
                  <a
                    href="#"
                    class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >Перейти</a
                  >
                </div>
              </div>
            </li>
            <li class="pt-4 pb-6">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <svg
                    class="w-6 h-6 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-base font-semibold text-gray-900 truncate dark:text-white"
                  >
                    Фитнес
                  </p>
                  <p
                    class="text-sm font-normal text-gray-500 truncate dark:text-gray-400"
                  >
                    Flex
                  </p>
                </div>
                <div class="inline-flex items-center">
                  <a
                    href="#"
                    class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >Перейти</a
                  >
                </div>
              </div>
            </li>
          </ul>
          <div>
            <button
              class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Все услуги
            </button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
