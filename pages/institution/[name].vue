<script setup>
import { mdiEyeOutline } from "@mdi/js";
import { useRoute } from "vue-router";
import { useGeolocation } from "@vueuse/core";
import { useInstitutionStore } from "~~/stores/institution";

import { useUserStore } from "~~/stores/user";
const authStore = useUserStore();

await authStore.getUser();

const institutionStore = useInstitutionStore();

const route = useRoute();
const routeName = String(route.params.name);
await institutionStore.fetchInstitutionByName(routeName);

const institution = computed(() => {
  return institutionStore.getCurrentInstitution;
});

const { coords } = useGeolocation();
onMounted(() => {
  console.log(route.params.name);
});
</script>

<template>
  <div>
    <section>
      <div
        class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900"
      >
        <div class="flex justify-between mb-4 col-span-full xl:mb-2">
          <h1
            class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
          >
            Учреждение: {{ institution?.name || "не найден" }}
          </h1>
          <nuxt-link
            to="/institution"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Все учреждения
          </nuxt-link>
        </div>
        <!-- Right Content -->
        <div class="col-span-full xl:col-auto">
          <div
            class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <div
              class="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4"
            >
              <div class="relative">
                <!-- <img
                  class="mb-4 w-full rounded-lg h-auto sm:mb-0 xl:mb-4 2xl:mb-0"
                  src="https://csp72.ru/images/facility/big/2021/2021-10-05/615c357b8eaed.jpeg"
                  alt="Jese picture"
                /> -->
                <Image
                  src="https://csp72.ru/images/facility/big/2021/2021-10-05/615c357b8eaed.jpeg"
                  alt="Image"
                  preview
                  class="mb-4 w-full rounded-lg h-auto sm:mb-0 xl:mb-4 2xl:mb-0"
                >
                  <template #indicator>
                    <BaseIcon :path="mdiEyeOutline" :size="20" />
                  </template>
                </Image>
              </div>
              <div>
                <h3
                  class="mb-1 text-2xl font-bold text-gray-900 dark:text-white"
                >
                  {{ institution?.name }}
                </h3>
              </div>
            </div>
          </div>
          <div
            class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <div class="flow-root">
              <h3 class="text-xl font-semibold dark:text-white">
                Свяжитесь с нами
              </h3>
              <div class="mb-4 py-4">
                Отправьте нам заявку и мы с вами свяжемся, поможем,
                проконсультируем
              </div>

              <div>
                <button
                  class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Связаться
                </button>
              </div>
            </div>
          </div>
          <div
            class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <h3 class="mb-4 text-xl font-semibold dark:text-white">Контакты</h3>
            <div class="mb-4">Почта</div>
            <div class="mb-4">Телефон</div>
            <div class="mb-4">Адрес</div>
          </div>
        </div>
        <div class="col-span-2">
          <div
            class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <h3 class="mb-4 text-xl font-semibold dark:text-white">
              Основная информация
            </h3>
            <form action="#">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Имя</label
                  >
                  <p
                    id="first-name"
                    class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    {{ institution?.name }}
                  </p>
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Last Name</label
                  >
                  <input
                    id="last-name"
                    type="text"
                    name="last-name"
                    class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Green"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="country"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Country</label
                  >
                  <input
                    id="country"
                    type="text"
                    name="country"
                    class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="United States"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="city"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >City</label
                  >
                  <input
                    id="city"
                    type="text"
                    name="city"
                    class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="e.g. San Francisco"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="address"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Address</label
                  >
                  <input
                    id="address"
                    type="text"
                    name="address"
                    class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="e.g. California"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Email</label
                  >
                  <input
                    id="email"
                    type="email"
                    name="email"
                    class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="example@company.com"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="phone-number"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Phone Number</label
                  >
                  <input
                    id="phone-number"
                    type="number"
                    name="phone-number"
                    class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="e.g. +(12)3456 789"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="birthday"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Birthday</label
                  >
                  <input
                    id="birthday"
                    type="number"
                    name="birthday"
                    class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="15/08/1990"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="organization"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Organization</label
                  >
                  <input
                    id="organization"
                    type="text"
                    name="organization"
                    class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Company Name"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="role"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Role</label
                  >
                  <input
                    id="role"
                    type="text"
                    name="role"
                    class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="React Developer"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="department"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Department</label
                  >
                  <input
                    id="department"
                    type="text"
                    name="department"
                    class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Development"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="zip-code"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Zip/postal code</label
                  >
                  <input
                    id="zip-code"
                    type="number"
                    name="zip-code"
                    class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="123456"
                    required=""
                  />
                </div>
              </div>
            </form>
          </div>

          <div
            class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <div class="flow-root">
              <h3 class="text-xl font-semibold dark:text-white">
                Спортивные услуги учреждения
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

          <div
            class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <h3 class="mb-4 text-xl font-semibold dark:text-white">
              Местоположение
            </h3>
            <ClientOnly fallback-tag="span" fallback="Загрузка карты ...">
              <YandexMap
                :coordinates="[coords.latitude, coords.longitude]"
                :zoom="16"
              >
                <YandexMarker
                  :coordinates="[coords.latitude, coords.longitude]"
                  :marker-id="123"
                >
                  <template #component>
                    <UserBalloon ref="userMarker" v-model="name" />
                  </template>
                </YandexMarker>
              </YandexMap>
            </ClientOnly>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 px-4 xl:grid-cols-1 xl:gap-4">
        <div
          class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 xl:mb-0"
        >
          <div class="flow-root">
            <h3 class="text-xl font-semibold dark:text-white">
              Все спортивные услуги учреждения
            </h3>
            <TableService />
          </div>
        </div>
        <div
          class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 xl:mb-0"
        >
          <div class="flow-root">
            <h3 class="text-xl font-semibold dark:text-white">Lorem ipsum</h3>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              imperdiet ante risus, ut varius elit posuere et. Maecenas vel eros
              at erat tincidunt molestie ut id velit. Etiam a condimentum purus.
              Maecenas vehicula, nibh at hendrerit ullamcorper, purus magna
              tempus urna, non blandit lectus felis id tortor. Mauris a justo
              vitae nibh imperdiet rutrum. Proin ultrices nibh a interdum
              lobortis. Fusce massa diam, dapibus eget ligula a, faucibus
              tristique est. Nullam sapien massa, eleifend at laoreet volutpat,
              fringilla nec urna. Ut ut risus eleifend, posuere augue id,
              vulputate mauris. Sed ac finibus metus, quis eleifend nibh. Aenean
              vitae sapien faucibus ex tempor laoreet in non lectus. Maecenas
              urna lectus, ullamcorper et elit ut, porttitor vulputate erat.
              Aliquam erat volutpat. Proin vulputate ullamcorper facilisis.
              Nulla aliquet, libero in molestie feugiat, urna arcu consequat ex,
              sit amet vulputate metus enim id libero.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
