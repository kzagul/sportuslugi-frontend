<script setup>
import { mdiEyeOutline, mdiCheck } from "@mdi/js";
import { useRoute } from "vue-router";
import { useToast } from "primevue/usetoast";
import { useGeolocation } from "@vueuse/core";
import { useInstitutionStore } from "~~/stores/institution";

import { useUserStore } from "~~/stores/user";
const authStore = useUserStore();

await authStore.getUser();

const institutionStore = useInstitutionStore();

const route = useRoute();
const routeID = String(route.params.id);
await institutionStore.fetchInstitutionByID(routeID);

const institution = computed(() => {
  return institutionStore.getCurrentInstitution;
});

const { coords } = useGeolocation();

const visible = ref(false);

const toast = useToast();

function sendRequest() {
  visible.value = false;
  toast.add({
    severity: "success",
    summary: "Успешно",
    detail: "Заявка отправлена",
    life: 3000,
  });
}

onMounted(() => {
  console.log("visited");
});
</script>

<template>
  <div>
    <section
      v-if="!institution"
      class="flex flex-col gap-4 items-center justify-center h-screen"
    >
      К сожалению, данного учреждения не существует :(

      <nuxt-link
        to="/institution"
        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
      >
        Все учреждения
      </nuxt-link>
    </section>
    <section v-else>
      <Toast />
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
            class="p-1 mb-4 rounded-lg 2xl:col-span-2 dark:border-gray-700 sm:p-1 dark:bg-gray-800"
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
                  class="px-4 mb-4 text-2xl font-bold text-gray-900 dark:text-white"
                >
                  {{ institution?.name }}
                </h3>
                <h2
                  v-if="institution.website"
                  class="px-4 mb-4 text-xl font-bold text-gray-900 hover:text-primary-700 hover:underline cursor-pointer"
                >
                  {{ institution?.website }}
                </h2>
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
              <div class="py-4">
                Отправьте нам заявку, мы вас проконсультируем и поможем вам с
                выбором услуги
              </div>

              <div>
                <button
                  class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  @click="visible = true"
                >
                  Связаться
                </button>
              </div>

              <Dialog
                v-model:visible="visible"
                modal
                :header="`Сообщение в учреждение - ${institution?.name}`"
                :style="{ width: '50vw' }"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>

                <template #footer>
                  <Button
                    severity="success"
                    class="flex flex-row gap-3"
                    @click="sendRequest"
                  >
                    <BaseIcon :path="mdiCheck" :size="24" />
                    Отправить
                  </Button>
                  <!-- @click="deleteProduct" -->
                </template>
              </Dialog>
            </div>
          </div>

          <div
            class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <h3 class="mb-4 text-xl font-semibold dark:text-white">Контакты</h3>

            <div class="flex flex-row gap-4">
              <div class="mb-4">Почта:</div>
              <div
                v-if="institution.email"
                class="hover:text-primary-700 hover:underline cursor-pointer"
              >
                {{ institution.email }}
              </div>
              <div v-else>нет данных</div>
            </div>

            <div class="flex flex-row gap-4">
              <div class="mb-4">Телефон:</div>
              <div
                v-if="institution.phone"
                class="hover:text-primary-700 hover:underline cursor-pointer"
              >
                {{ institution.phone }}
              </div>
              <div v-else>нет данных</div>
            </div>

            <div class="flex flex-row gap-4">
              <div class="mb-4">Адрес:</div>
              <div
                v-if="institution.address"
                class="hover:text-primary-700 hover:underline cursor-pointer"
              >
                {{ institution.address }}
              </div>
              <div v-else>нет данных</div>
            </div>
          </div>

          <div
            class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 sm:p-6"
          >
            <div class="flow-root">
              <h3 class="text-xl font-semibold dark:text-white">Виды спорта</h3>

              <div class="flex flex-row flex-wrap gap-3 mt-4">
                <button
                  v-for="(sport, index) in institution.sports"
                  :key="index"
                  class="text-white bg-primary-400 focus:ring-4 focus:ring-primary-300 font-medium rounded-xl text-sm px-2 py-1 text-center"
                >
                  {{ sport.name }}
                </button>
              </div>
            </div>
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
                <!-- Название -->
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Название учреждения</label
                  >
                  <input
                    v-if="institution.name"
                    v-model="institution.name"
                    type="text"
                    class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    :placeholder="institution?.name"
                    disabled
                  />
                  <input
                    v-else
                    type="text"
                    class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    :placeholder="`нет данных`"
                    disabled
                  />
                </div>

                <!-- ИНН -->
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >ИНН</label
                  >
                  <input
                    v-if="institution.inn"
                    v-model="institution.inn"
                    type="text"
                    class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    :placeholder="institution?.inn"
                    disabled
                  />
                  <input
                    v-else
                    type="text"
                    class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    :placeholder="`нет данных`"
                    disabled
                  />
                </div>

                <!-- Рабочее время -->
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Рабочее время</label
                  >
                  <input
                    v-if="institution.workingTime"
                    v-model="institution.workingTime"
                    type="text"
                    class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    :placeholder="institution?.workingTime"
                    disabled
                  />
                  <input
                    v-else
                    type="text"
                    class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    :placeholder="`нет данных`"
                    disabled
                  />
                </div>

                <!--  -->
              </div>
            </form>
          </div>

          <div
            class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <div class="flow-root">
              <h3 class="text-xl font-semibold dark:text-white">
                Описание учреждения
              </h3>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                {{ institution?.description }}
              </p>
            </div>
          </div>

          <div
            class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <h3 class="mb-4 text-xl font-semibold dark:text-white">
              Местоположение на карте
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
            <h3 class="text-xl font-semibold dark:text-white py-4">
              Все спортивные услуги учреждения
            </h3>
            <TableService />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.yandex-container {
  height: 500px;
}
.yandex-balloon {
  height: 60px;
  width: 60px;
  border-radius: 100px;
}
</style>
