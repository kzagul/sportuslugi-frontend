<script setup>
import { mdiMagnify, mdiFilterOutline, mdiCogOutline } from "@mdi/js";
import { initDropdowns } from "flowbite";
// import { useUserStore } from "~~/stores/user";
// const authStore = useUserStore();
onMounted(() => {
  initDropdowns();
});
</script>

<template>
  <section class="flex items-center">
    <div class="w-full px-4 mx-auto lg:px-12">
      <div class="relative px-4 bg-white shadow dark:bg-gray-800 sm:rounded-lg">
        <div class="flex items-center justify-between pt-4 md:pb-4">
          <div class="flex items-center flex-1 space-x-2">
            <h5>
              <span class="dark:text-white">Фильтрация видов спорта</span>
            </h5>
          </div>
        </div>

        <div
          class="flex flex-col-reverse items-stretch justify-between pb-4 space-y-3 md:flex-row md:items-center md:space-y-0"
        >
          <div
            class="flex flex-col w-full space-y-3 lg:w-2/3 md:space-y-0 md:flex-row md:items-center"
          >
            <form class="flex-1 w-full md:max-w-sm md:mr-4">
              <label
                for="default-search"
                class="text-sm font-medium text-gray-900 sr-only dark:text-white"
                >Search</label
              >
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <BaseIcon :path="mdiMagnify" :size="20" />
                </div>
                <input
                  id="default-search"
                  type="search"
                  class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-10 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search..."
                  required=""
                />
                <button
                  type="submit"
                  class="absolute top-0 bottom-0 right-0 px-4 py-2 text-sm font-medium text-white rounded-r-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Поиск
                </button>
              </div>
            </form>

            <div class="flex items-center space-x-4">
              <div>
                <button
                  id="filterDropdownButton"
                  data-dropdown-toggle="filterDropdown"
                  type="button"
                  class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <BaseIcon :path="mdiFilterOutline" :size="20" />
                  Filter
                </button>
                <div
                  id="filterDropdown"
                  class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
                >
                  <h6
                    class="mb-3 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category
                  </h6>
                  <ul
                    class="space-y-2 text-sm"
                    aria-labelledby="dropdownDefault"
                  >
                    <li class="flex items-center">
                      <input
                        id="apple"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="apple"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Apple (56)
                      </label>
                    </li>
                    <li class="flex items-center">
                      <input
                        id="fitbit"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="fitbit"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Fitbit (56)
                      </label>
                    </li>
                    <li class="flex items-center">
                      <input
                        id="dell"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="dell"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Dell (56)
                      </label>
                    </li>
                    <li class="flex items-center">
                      <input
                        id="asus"
                        type="checkbox"
                        value=""
                        checked
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="asus"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Asus (97)
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <button
                  id="configurationDropdownButton"
                  data-dropdown-toggle="configurationDropdown"
                  type="button"
                  class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <BaseIcon :path="mdiCogOutline" :size="20" />
                  Configurations
                </button>
                <div
                  id="configurationDropdown"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="configurationDropdownButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Категория
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Сезонность
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Отменить
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div
            v-if="authStore.isAdmin"
            class="flex flex-col items-stretch justify-end flex-shrink-0 w-full pb-4 md:pb-0 md:w-auto md:flex-row md:items-center md:space-x-3"
          >
            <button
              type="button"
              class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              <BaseIcon :path="mdiPlus" :size="20" />
              Добавить
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>
