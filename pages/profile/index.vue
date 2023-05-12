<script setup lang="ts">
import { mdiEyeOutline } from "@mdi/js";
import { useUserStore } from "~~/stores/user";
definePageMeta({
  middleware: ["user-only"],
});

const isRedactingModOpened = ref(false);

const authStore = useUserStore();

await authStore.getUser();

const userData = ref({
  name: authStore.user?.name as string,
});

function updateUser(user: any) {
  authStore.putUser(user?.id, userData?.value.name, user?.verified_moderator);
  isRedactingModOpened.value = false;
}
</script>

<template>
  <section>
    <div
      class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900"
    >
      <div class="mb-4 col-span-full xl:mb-2">
        <h1
          class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
        >
          Личный профиль
        </h1>
      </div>
      <!-- Right Content -->
      <div class="col-span-full xl:col-auto">
        <div
          class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
        >
          <div
            class="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4"
          >
            <div class="relative rounded-full">
              <!-- <img
                class="mb-4 rounded-full w-40 h-40 sm:mb-0 xl:mb-4 2xl:mb-0"
                src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
                alt="Jese picture"
              /> -->
              <Image
                src="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png"
                alt="Image"
                preview
                class="mb-4 w-1/2 rounded-full h-auto sm:mb-0 xl:mb-4 2xl:mb-0"
              >
                <template #indicator>
                  <BaseIcon :path="mdiEyeOutline" :size="20" />
                </template>
              </Image>
            </div>
            <div>
              <h3 class="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                {{ authStore.user?.name }}
              </h3>
              <h2 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                {{ authStore.user?.email }}
              </h2>
              <div class="flex flex-col items-center md:items-start gap-4">
                <button
                  type="button"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <nuxt-link to="/profile/edit" class="flex flex-row">
                    <svg
                      class="w-4 h-4 mr-2 -ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
                      ></path>
                      <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
                    </svg>
                    Изменить фото
                  </nuxt-link>
                </button>
                <button
                  type="button"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <nuxt-link to="/profile/edit" class="flex flex-row">
                    <svg
                      class="w-4 h-4 mr-2 -ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
                      ></path>
                      <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
                    </svg>
                    Изменить данные профиля
                  </nuxt-link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
        >
          <div class="flex flex-col gap-4">
            <h3 class="text-xl font-semibold dark:text-white">
              Карта рекомендаций
            </h3>

            <div>
              <nuxt-link to="/profile/recommendation">
                <button
                  class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Перейти
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>

        <div
          class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
        >
          <h3 class="mb-4 text-xl font-semibold dark:text-white">Контент</h3>
          <div class="mb-4">Какой-то контент</div>
        </div>
      </div>
      <div class="col-span-2">
        <div
          class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
        >
          <h3 class="mb-4 text-xl font-semibold dark:text-white">Мои данные</h3>
          <!-- form -->
          <div>
            <div class="grid grid-cols-6 gap-6">
              <!-- <div class="col-span-6 sm:col-span-3">
                <label
                  for="first-name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Имя</label
                >
                <p
                  id="first-name"
                  class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  {{ authStore.user?.name }}
                </p>
              </div> -->
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first-name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Имя</label
                >
                <input
                  v-if="!isRedactingModOpened"
                  v-model="userData.name"
                  type="text"
                  class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  :placeholder="authStore.user?.name"
                  disabled
                />
                <input
                  v-if="isRedactingModOpened"
                  v-model="userData.name"
                  type="text"
                  class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  :placeholder="authStore.user?.name"
                />
              </div>

              <!-- <div class="col-span-6 sm:col-span-3">
                <label
                  for="country"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Страна</label
                >
                <input
                  id="country"
                  type="text"
                  name="country"
                  class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Российская федерация"
                  required=""
                />
              </div> -->

              <!-- <div class="col-span-6 sm:col-span-3">
                <label
                  for="city"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Город</label
                >
                <input
                  id="city"
                  type="text"
                  name="city"
                  class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Тюмень"
                />
              </div> -->

              <!-- <div class="col-span-6 sm:col-span-3">
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
              </div> -->

              <!-- <div class="col-span-6 sm:col-span-3">
                <label
                  for="phone-number"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Phone Number</label
                >
                <input
                  id="phone-number"
                  type="phone"
                  name="phone-number"
                  class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="e.g. +(12)3456 789"
                  required=""
                />
              </div> -->

              <!-- <div class="col-span-6 sm:col-span-3">
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
              </div> -->

              <div class="flex flex-row gap-4 col-span-6 sm:col-full">
                <button
                  class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  @click="isRedactingModOpened = !isRedactingModOpened"
                >
                  Редактировать
                </button>

                <button
                  v-if="isRedactingModOpened"
                  class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  @click="updateUser(authStore.user)"
                >
                  Сохранить изменения
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
        >
          <h3 class="mb-4 text-xl font-semibold dark:text-white">Контент</h3>
          Maecenas ut velit vitae mauris congue sodales. Integer vitae rutrum
          augue, eget bibendum nunc. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Curabitur ornare vitae
          velit et egestas. Vivamus vestibulum in lacus id dictum. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
        </div>
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
    </div>
    <div class="grid grid-cols-1 px-4 xl:grid-cols-2 xl:gap-4">
      <div
        class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 xl:mb-0"
      >
        <div class="flow-root">
          <h3 class="text-xl font-semibold dark:text-white">Контент</h3>
          <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
            Какой-то контент
          </p>
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
            Maecenas vehicula, nibh at hendrerit ullamcorper, purus magna tempus
            urna, non blandit lectus felis id tortor. Mauris a justo vitae nibh
            imperdiet rutrum. Proin ultrices nibh a interdum lobortis. Fusce
            massa diam, dapibus eget ligula a, faucibus tristique est. Nullam
            sapien massa, eleifend at laoreet volutpat, fringilla nec urna. Ut
            ut risus eleifend, posuere augue id, vulputate mauris. Sed ac
            finibus metus, quis eleifend nibh. Aenean vitae sapien faucibus ex
            tempor laoreet in non lectus. Maecenas urna lectus, ullamcorper et
            elit ut, porttitor vulputate erat. Aliquam erat volutpat. Proin
            vulputate ullamcorper facilisis. Nulla aliquet, libero in molestie
            feugiat, urna arcu consequat ex, sit amet vulputate metus enim id
            libero.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
