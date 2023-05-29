<script setup lang="ts">
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from "@headlessui/vue";
import { mdiMagnify } from "@mdi/js";
import { useUserStore } from "~~/stores/user";
import { useSportStore } from "~~/stores/sport";
const authStore = useUserStore();

const sportStore = useSportStore();

await sportStore.fetchSports();

// const sports = ref();
const sports = computed(() => {
  return sportStore.getSports;
});

const selected = ref(sports.value[0]);
const query = ref("");

const pathComputed = (item: any) => {
  return `/sport/` + item.id;
};

const filteredSports = computed(() =>
  query.value === ""
    ? sports.value
    : sports.value.filter((sport) =>
        sport.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
      <div
        class="grid items-center gap-8 mb-8 lg:mb-16 lg:gap-12 lg:grid-cols-12"
      >
        <div class="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
          <NuxtLink
            v-if="!authStore.user"
            to="/register"
            class="inline-flex items-center justify-between px-1 py-1 pr-4 mb-6 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span
              class="px-3 py-1 mr-3 text-xs text-white rounded-full bg-primary-600"
              >New</span
            >
            <span class="text-sm font-regular"
              >Спорт-услуги на бета тесте, присоединяйтесь!</span
            >
            <svg
              class="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </NuxtLink>
          <NuxtLink
            v-else
            to="/about"
            class="inline-flex items-center justify-between px-1 py-1 pr-4 mb-6 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span
              class="px-3 py-1 mr-3 text-xs text-white rounded-full bg-primary-600"
              >New</span
            >
            <span class="text-sm font-regular"
              >Спорт-услуги на бета тесте, узнайте о нас больше!</span
            >
            <svg
              class="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </NuxtLink>
          <h1
            class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white"
          >
            Добро пожаловать на Спорт-услуги!
          </h1>
          <p
            class="max-w-xl mx-auto mb-6 font-light text-gray-500 lg:mx-0 xl:mb-8 md:text-lg xl:text-xl dark:text-gray-400"
          >
            Онлайн сервис для поиска спортивных занятий
          </p>

          <div
            class="flex justify-between bg-surface-default items-center max-w-lg mx-auto gap-4 h-[48px] sm:h-[64px] mt-4 sm:mt-8"
          >
            <Combobox v-model="selected">
              <div class="relative text-black w-full">
                <div class="w-full cursor-default overflow-hidden">
                  <ComboboxInput
                    placeholder="Вид спорта ..."
                    class="block w-full p-4 text-sm text-gray-900 border-1 border-gray-300 rounded-lg bg-white focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    :display-value="(sport: any) => ''"
                    @change="query = $event.target.value"
                  />
                  <BaseIcon
                    :path="mdiMagnify"
                    :size="32"
                    class="flex justify-center items-center absolute right-4 bottom-4"
                  />
                </div>

                <TransitionRoot
                  leave="transition ease-in duration-100"
                  leave-from="opacity-100"
                  leave-to="opacity-0"
                  @after-leave="query = ''"
                >
                  <ComboboxOptions
                    class="absolute w-full mt-4 max-h-60 overflow-auto rounded-lg bg-white border py-4 shadow-lg z-10 sm:z-40"
                  >
                    <div
                      v-if="filteredSports.length === 0 && query !== ''"
                      class="relative cursor-default select-none py-2 px-4"
                    >
                      Ничего не найдено
                    </div>

                    <ComboboxOption
                      v-for="(sport, index) in filteredSports"
                      :key="index"
                      v-slot="{ active }"
                      as="template"
                      :value="sport"
                    >
                      <nuxt-link
                        :to="pathComputed(sport)"
                        class="cursor-default"
                      >
                        <li
                          class="relative flex items-center cursor-default select-none pl-[32px] pr-4 h-[43px]"
                          :class="{
                            'bg-surface-component bg-opacity-5': active,
                            '': !active,
                          }"
                        >
                          <span class="block truncate">
                            {{ sport.name }}
                          </span>
                        </li>
                      </nuxt-link>
                    </ComboboxOption>
                  </ComboboxOptions>
                </TransitionRoot>
              </div>
            </Combobox>

            <!-- <button
                class="absolute right-0 flex justify-center items-center bg-brand-primary border-4 sm:border-8 border-surface-default rounded-[40px] px-6 py-3 h-[48px] sm:w-[100px] sm:h-[64px]"
              >
                <img
                  class="w-6 h-6"
                  src="~/assets/icons/arrow-right.svg"
                  alt=""
                />
              </button> -->
          </div>
        </div>
      </div>
      <div class="grid gap-8 sm:gap-12 md:grid-cols-3">
        <div class="flex justify-center">
          <svg
            class="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div>
            <h3
              class="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white"
            >
              Выбор спортивных услуг и учреждений
            </h3>
            <!-- <p class="font-light text-gray-500 dark:text-gray-400">
              Host code that you don't want to share with the world in private.
            </p> -->
          </div>
        </div>
        <div class="flex justify-center">
          <svg
            class="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div>
            <h3
              class="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white"
            >
              Подбор услуг с помощью умных рекомендаций
            </h3>
            <!-- <p class="font-light text-gray-500 dark:text-gray-400">
              Host code that you don't want to share with the world in private.
            </p> -->
          </div>
        </div>
        <div class="flex justify-center">
          <svg
            class="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div>
            <h3
              class="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white"
            >
              Интерактивный подход в выборе
            </h3>
            <!-- <p class="font-light text-gray-500 dark:text-gray-400">
              Host code that you don't want to share with the world in private.
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
