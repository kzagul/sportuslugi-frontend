<script setup>
import { mdiEyeOutline, mdiCheck } from "@mdi/js";
import { useRoute } from "vue-router";
import { useToast } from "primevue/usetoast";
import { useGeolocation } from "@vueuse/core";
import { useInstitutionStore } from "~~/stores/institution";
import { useServiceStore } from "~~/stores/service";

import { useUserStore } from "~~/stores/user";
const authStore = useUserStore();

await authStore.getUser();

const serviceStore = useServiceStore();
const institutionStore = useInstitutionStore();

const route = useRoute();
const routeID = String(route.params.id);

await serviceStore.fetchServiceByID(routeID);

const service = computed(() => {
  return serviceStore.getCurrentService;
});

await institutionStore.fetchInstitutionByID(service.value?.institutions[0]?.id);

const institution = computed(() => {
  return institutionStore.getCurrentInstitution;
});

const { coords } = useGeolocation();

const visible = ref(false);

const toast = useToast();

const { sendServiceRequestMail } = useSendMail();

const selectedEmailTopic = ref();

const serviceData = ref({
  name: service.value.name,
  isFree: service.value.isFree,
  // email: service.value?.email,
  // image: "новоефото",
});

const emailTopics = ref([
  { name: "Насколько подходит мне данная услуга?" },
  { name: "Свяжитесь со мной" },
  { name: "Необходима консультация" },
  { name: "Выбрал услугу, запишите меня" },
]);

const user = computed(() => {
  return authStore.user;
});

const emailPhoneValue = ref("");

const textAreaValue = ref();

const { getAge } = useFormatDate();

const userAge = ref(getAge(user.value.birth_date));

const contactInstitutionEmail = computed(() => {
  return institution.value?.contact_users[0]?.email
    ? institution.value?.contact_users[0]?.email
    : institution.value?.email;
});

function sendRequest() {
  sendServiceRequestMail(
    user.value.name, // name
    user.value.gender, // gender
    userAge.value, // age
    selectedEmailTopic.value.name, // title
    emailPhoneValue, // phone
    user.value.email,
    contactInstitutionEmail.value, // institution email
    service.value.name, // institution name
    `http://localhost:3000/service/${service.value.id}`, // institution id
    textAreaValue // body
  );

  // Добавить метод на добавление услуги в мои услуги
  // TODO
  // TODO

  visible.value = false;
  toast.add({
    severity: "success",
    summary: "Успешно",
    detail: "Заявка отправлена",
    life: 3000,
  });
}

const { getNowFormatDate } = useFormatDate();
const { visitedService } = useStatistics();

// СТАТИСТИКА ПОСЕЩЕНИЙ
visitedService(
  user.value.id,
  service.value.id,
  institution.value.id,
  getNowFormatDate()
);

console.log(getNowFormatDate());
</script>

<template>
  <div>
    <section
      v-if="!service"
      class="flex flex-col gap-4 items-center justify-center h-screen"
    >
      К сожалению, такой услуги не существует :(

      <nuxt-link
        to="/institution"
        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
      >
        Все услуги
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
            Услуга: {{ service?.name || "не найден" }}
          </h1>
          <nuxt-link
            to="/service"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Все услуги
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
                  src="https://api.360tv.ru/get_resized/LNr9OUGZJCqiu5RWRocZDSrZmtzKmG4rEZrN_dqAcTc/rs:fill-down:1440:810/g:fp:0.5:0.5/aHR0cHM6Ly8yNTc4MjQuc2VsY2RuLnJ1L2JhYnlsb24tbWVkaWEvYXJ0aWNsZXMvaW1hZ2UvMjAyMi8yL2VmLzk1LzE3MDM3Mi01MTEyODhiM2Y1NWY2YmVlM2RiZjhkOWRlOGZkNGIxNjljYjJiZDcxLmpwZw.webp"
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
                  {{ service?.name }}
                </h3>
                <!-- <h2
                  v-if="institution.website"
                  class="px-4 mb-4 text-xl font-bold text-gray-900 hover:text-primary-700 hover:underline cursor-pointer"
                >
                  {{ institution?.website }}
                </h2> -->
              </div>
            </div>
          </div>

          <!-- ВИДЫ СПОРТА -->
          <div
            class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 sm:p-6"
          >
            <div class="flow-root">
              <h3 class="text-xl font-semibold dark:text-white mb-2">
                Виды спорта
              </h3>

              <div
                v-if="service.sports.length > 0"
                class="flex flex-row flex-wrap gap-3 mt-4"
              >
                <button
                  v-for="(sport, index) in service.sports"
                  :key="index"
                  class="text-white bg-primary-400 focus:ring-4 focus:ring-primary-300 font-medium rounded-xl text-sm px-2 py-1 text-center"
                >
                  {{ sport.name }}
                </button>
              </div>

              <div v-else>Не относится к каким-либо видам спорта</div>
            </div>
          </div>

          <!-- ЗАЯВКА -->
          <div
            class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <div class="flow-root">
              <h3 class="text-xl font-semibold dark:text-white">
                Заинтересовались в услуге? Свяжитесь с нами!
              </h3>
              <div class="py-4">
                Отправьте нам заявку на данную услугу, мы вас проконсультируем и
                если Вам понравится, то запишем на занятие
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
                :header="`${service?.name}`"
                :style="{ width: '50vw' }"
              >
                <div class="flex flex-col gap-8">
                  <h3 class="text-lg font-semibold dark:text-white w-8/12">
                    Вы отправляете заявку на данную услугу! К данному письму
                    будут подкреплены данные вашего профиля
                    <span class="text-lg">(Пол, возраст, ФИО)</span>
                  </h3>

                  <div class="flex flex-col">
                    <label
                      for="first-name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >С чем вам помочь?</label
                    >

                    <Dropdown
                      v-model="selectedEmailTopic"
                      editable
                      :options="emailTopics"
                      option-label="name"
                      placeholder="Напишите"
                      class="w-full md:w-14rem"
                    />
                  </div>

                  <div class="flex flex-col">
                    <label for="phone">Телефон</label>
                    <InputMask
                      v-model="emailPhoneValue"
                      date="phone"
                      mask="+7(999) 999-99-99"
                      placeholder="Ваш контактный телефон"
                    />
                  </div>

                  <div class="flex flex-col">
                    <label>Что бы вы хотели дополнительно сообщить?</label>
                    <Textarea
                      v-model="textAreaValue"
                      auto-resize
                      rows="5"
                      cols="30"
                    />
                  </div>
                </div>

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

          <!-- УЧРЕЖДЕНИЕ -->
          <div
            class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <div
              class="flex flex-row flex-wrap items-center gap-4 text-2xl mb-4"
            >
              <h3 class="dark:text-white">Учреждение:</h3>

              <div
                class="hover:text-primary-700 font-semibold hover:underline cursor-pointer"
              >
                {{ service?.institutions[0]?.name }}
              </div>
            </div>

            <div>
              <nuxt-link
                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                :to="`/institution/${service?.institutions[0]?.id}`"
              >
                Перейти
              </nuxt-link>
            </div>
          </div>

          <!-- КОНТАКТЫ УЧРЕЖДЕНИЯ -->
          <div
            class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <h3 class="mb-4 text-xl font-semibold dark:text-white">
              Контакты учреждения
            </h3>

            <!-- service?.institutions[0]?.email -->

            <div class="flex flex-row gap-4">
              <div class="mb-4">Почта:</div>
              <div
                v-if="service?.institutions[0]?.email"
                class="hover:text-primary-700 hover:underline cursor-pointer"
              >
                {{ service?.institutions[0]?.email }}
              </div>
              <div v-else>нет данных</div>
            </div>

            <div class="flex flex-row gap-4">
              <div class="mb-4">Телефон:</div>
              <div
                v-if="service?.institutions[0]?.phone"
                class="hover:text-primary-700 hover:underline cursor-pointer"
              >
                {{ service?.institutions[0]?.phone }}
              </div>
              <div v-else>нет данных</div>
            </div>

            <div class="flex flex-row gap-4">
              <div class="mb-4">Адрес:</div>
              <div
                v-if="service?.institutions[0]?.address"
                class="hover:text-primary-700 hover:underline cursor-pointer"
              >
                {{ service?.institutions[0]?.address }}
              </div>
              <div v-else>нет данных</div>
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
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Название услуги
                  </label>
                  <InputText
                    v-model="service.name"
                    type="text"
                    disabled
                    class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Длительность
                  </label>
                  <InputText
                    v-model="service.duration"
                    type="text"
                    disabled
                    class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </div>

                <!-- <div class="col-span-6 sm:col-span-3">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Расписание
                  </label>
                  <InputText
                    v-model="service.schedule"
                    type="text"
                    disabled
                    class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </div> -->

                <div v-if="service.difficulty" class="col-span-6 sm:col-span-3">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Сложность
                  </label>
                  <InputText
                    v-model="service.difficulty"
                    type="text"
                    disabled
                    class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Цена
                  </label>
                  <InputText
                    v-if="service.price"
                    v-model="service.price"
                    type="text"
                    disabled
                    class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                  <InputText
                    v-else
                    type="text"
                    placeholder="Бесплатная"
                    disabled
                    class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </div>
              </div>
            </form>
          </div>

          <div
            class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <div class="flex flex-col gap-4">
              <h3 class="text-xl font-semibold dark:text-white">
                Описание услуги
              </h3>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                {{ service?.description }}
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

      <div v-if="false" class="grid grid-cols-1 px-4 xl:grid-cols-1 xl:gap-4">
        <div
          class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 xl:mb-0"
        >
          Контент
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
