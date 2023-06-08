<script setup lang="ts">
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from "@headlessui/vue";
import { mdiMagnify, mdiGestureTap, mdiMapMarkerRadius } from "@mdi/js";
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
    : sports.value.filter((sport: any) =>
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
            <span class="text-sm font-regular">
              Присоединяйтесь к нам на Спорт-услуги!
            </span>
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
            <span class="text-sm font-regular">Узнайте о нас больше!</span>
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
            v-if="authStore.user"
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
        <div class="flex flex-row gap-4 justify-center items-center">
          <BaseIcon
            :path="mdiMagnify"
            :size="32"
            class="flex justify-center items-center"
          />
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
        <div class="flex flex-row gap-4 justify-center items-center">
          <BaseIcon
            :path="mdiGestureTap"
            :size="32"
            class="flex justify-center items-center"
          />
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
        <div class="flex flex-row gap-4 justify-center items-center">
          <BaseIcon
            :path="mdiMapMarkerRadius"
            :size="32"
            class="flex justify-center items-center"
          />
          <div>
            <h3
              class="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white"
            >
              Интерактивный подход в выборе, посмотрите на карте!
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
