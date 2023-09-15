<script setup lang="ts">
import { mdiEyeOutline, mdiPencilOutline, mdiClose, mdiCheck } from "@mdi/js";
import { useToast } from "primevue/usetoast";

import { useRoute } from "vue-router";
import { useGeolocation } from "@vueuse/core";
import { useUserStore } from "~~/stores/user";
import { useInstitutionStore } from "~~/stores/institution";

definePageMeta({
  middleware: ["user-only"],
  layout: false,
});

const isRedactingModOpened = ref(false);

const isRedactingPhotoModOpened = ref(false);

const authStore = useUserStore();

await authStore.getUser();

const genders = ref([{ name: "Мужской" }, { name: "Женский" }]);

function updateUser(user: any) {
  authStore.putUser(
    user?.id,
    userData?.value.name,
    user?.verified_moderator,
    // userData?.value.image,
    userData?.value.last_name,
    userData?.value.father_name,
    userData?.value.gender,
    // userData?.value.birth_date
    formatDate(userData.value.birth_date)
  );
  isRedactingModOpened.value = false;

  toast.add({
    severity: "success",
    summary: "Успешно",
    detail: "Профиль обновлен",
    life: 3000,
  });
}

// function updateUserImage(user: any) {
//   authStore.putUserPhoto(
//     user?.id,
//     userData?.value.name,
//     // user?.verified_moderator,
//     userData?.value.image
//   );
//   isRedactingModOpened.value = false;
// }

const ageComputed = computed(() => {
  return userData.value.birth_date;
});

const toast = useToast();

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = ref([]);

const onRemoveTemplatingFile = (
  file: any,
  removeFileCallback: any,
  index: any
) => {
  removeFileCallback(index);
  totalSize.value -= parseInt(formatSize(file.size));
  totalSizePercent.value = totalSize.value / 10;
};

const onClearTemplatingUpload = (clear: any) => {
  clear();
  totalSize.value = 0;
  totalSizePercent.value = 0;
};

const onSelectedFiles = (event: any) => {
  files.value = event.files;
  // userData.value.image = event.files[0];
  userData.value.image = files.value[0];

  files.value.forEach((file) => {
    totalSize.value += parseInt(formatSize(file.size));
  });
};

const uploadEvent = (callback: any) => {
  totalSizePercent.value = totalSize.value / 10;
  updateUserImage(authStore.user);
  // callback();
};

const onTemplatedUpload = () => {
  toast.add({
    severity: "info",
    summary: "Success",
    detail: "File Uploaded",
    life: 3000,
  });
};

const formatSize = (bytes: any) => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

// function formatDate(date: any) {
//   const d = new Date(date);
//   let month = "" + (d.getMonth() + 1);
//   let day = "" + d.getDate();
//   const year = d.getFullYear();

//   if (month.length < 2) month = "0" + month;
//   if (day.length < 2) day = "0" + day;

//   return [year, month, day].join("-");
// }

const { formatDate, getAge } = useFormatDate();

function testClick() {
  // console.log(formatDate("Sun May 11,2014"));
  const formatted = formatDate(userData.value.birth_date);
  console.log("formatted");
  console.log(formatted);

  const age = getAge(formatted);
  console.log("age");
  console.log(age);
}

const user = computed(() => {
  return authStore.user;
});

const users = computed(() => {
  return authStore.users;
});

const institutionStore = useInstitutionStore();

// const routeID = String(route.params.id);

const getInstitutionOfCurrentUser = computed(() => {
  const currentUser = users.value?.find(
    (item: any) => item.id === user.value?.id
  );
  return currentUser?.contact_user_of[0];
});

console.log(users.value);
console.log(getInstitutionOfCurrentUser.value?.id);

const institutionId = String(getInstitutionOfCurrentUser.value?.id);
// const userInstitution = authStore.user?.contact_user_of?.shift();

// console.log("userInstitution");
// console.log(userInstitution?.name);
// contact_user_of

console.log(institutionId);

// await institutionStore.fetchInstitutionByID(institutionId as string);

// await institutionStore.fetchInstitutionByID(routeID);

// const institution = computed(() => {
//   return institutionStore.getCurrentInstitution;
// });

const time_start = ref();
const time_end = ref();

const institution = computed(() => {
  return getInstitutionOfCurrentUser.value;
});

const institutionData = ref({
  name: institution.value?.name as string,
  inn: institution.value?.inn as string,

  //   image: authStore.user?.image as any,
  //   email: authStore.user?.email as any,
  //   last_name: authStore.user?.last_name as any,
  //   father_name: authStore.user?.father_name as any,
  //   gender: authStore.user?.gender as any,
  //   birth_date: authStore.user?.birth_date as any,
  // image: "новоефото",
});

const { coords } = useGeolocation();

const visible = ref(false);

function sendRequest() {
  visible.value = false;
  toast.add({
    severity: "success",
    summary: "Успешно",
    detail: "Заявка отправлена",
    life: 3000,
  });
}
</script>

<template>
  <NuxtLayout name="moderator">
    <section>
      <Toast />

      <div class="flex justify-between mb-4 col-span-full xl:mb-2">
        <h1 class="text-xl text-gray-900 sm:text-2xl dark:text-white p-4">
          Профиль учреждения
        </h1>
      </div>

      <div
        class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900"
      >
        <!-- Right Content -->
        <div class="col-span-full xl:col-auto">
          <!-- LOGO AND NAME -->
          <div
            class="relative flex justify-center items-center p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <div
              class="p-1 mb-4 rounded-lg 2xl:col-span-2 dark:border-gray-700 sm:p-1 dark:bg-gray-800"
            >
              <div
                class="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4"
              >
                <div class="relative">
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

                  <!-- <Image
                    alt="Image"
                    preview
                    class="mb-4 w-full rounded-lg h-auto sm:mb-0 xl:mb-4 2xl:mb-0"
                    :src="
                      institution?.image
                        ? `https://csp72.ru/images/facility/big/2021/2021-10-05/615c357b8eaed.jpeg`
                        : `/images/user.png`
                    "
                  >
                    <template #indicator>
                      <BaseIcon :path="mdiEyeOutline" :size="20" />
                    </template>
                  </Image> -->
                </div>

                <div>
                  <h3
                    class="px-4 mb-4 text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    {{ institution?.name }}
                  </h3>
                  <h2
                    v-if="institution?.website"
                    class="px-4 mb-4 text-xl font-bold text-gray-900 hover:text-primary-700 hover:underline cursor-pointer"
                  >
                    {{ institution?.website }}
                  </h2>
                </div>

                <button
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 my-4"
                  @click="
                    isRedactingPhotoModOpened = !isRedactingPhotoModOpened
                  "
                >
                  <div class="flex flex-row">
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
                  </div>
                </button>

                <div
                  v-if="isRedactingPhotoModOpened"
                  class="flex flex-col items-center md:items-start gap-4"
                >
                  <Toast />
                  <!-- url="./upload.php" -->
                  <FileUpload
                    name="demo[]"
                    accept="image/*"
                    file-limit="1"
                    :max-file-size="1000000"
                    class="w-full"
                    @upload="onTemplatedUpload($event)"
                    @select="onSelectedFiles"
                  >
                    <template
                      #header="{
                        chooseCallback,
                        uploadCallback,
                        clearCallback,
                        files,
                      }"
                    >
                      <div
                        class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2"
                      >
                        <div class="flex gap-2">
                          <Button
                            icon="pi pi-images"
                            rounded
                            outlined
                            @click="chooseCallback()"
                          ></Button>
                          <Button
                            icon="pi pi-cloud-upload"
                            rounded
                            outlined
                            severity="success"
                            :disabled="!files || files.length === 0"
                            @click="uploadEvent(uploadCallback)"
                          ></Button>
                          <Button
                            icon="pi pi-times"
                            rounded
                            outlined
                            severity="danger"
                            :disabled="!files || files.length === 0"
                            @click="clearCallback()"
                          ></Button>
                        </div>
                      </div>
                    </template>
                    <template
                      #content="{
                        files,
                        uploadedFiles,
                        removeUploadedFileCallback,
                        removeFileCallback,
                      }"
                    >
                      <div v-if="files.length > 0">
                        <div class="flex flex-row flex-wrap p-0 sm:p-5 gap-5">
                          <div
                            v-for="(file, index) of files"
                            :key="file.name + file.type + file.size"
                            class="card m-0 px-6 flex flex-col border-1 surface-border items-center gap-3"
                          >
                            <div>
                              <img
                                role="presentation"
                                :alt="file.name"
                                :src="file.objectURL"
                                width="100"
                                height="50"
                                class="shadow-2"
                              />
                            </div>
                            <span class="font-semibold">{{ file.name }}</span>
                            <div>{{ formatSize(file.size) }}</div>
                            <Badge value="Pending" severity="warning" />
                            <!-- <Button
                            icon="pi pi-times"
                            outlined
                            rounded
                            severity="danger"
                            @click="
                              onRemoveTemplatingFile(
                                file,
                                removeFileCallback,
                                index
                              )
                            "
                          /> -->
                          </div>
                        </div>
                      </div>

                      <div v-if="uploadedFiles.length > 0">
                        <h5>Файл загружен</h5>
                        <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                          <div
                            v-for="(file, index) of uploadedFiles"
                            :key="file.name + file.type + file.size"
                            class="flex flex-col card m-0 px-6 border-1 surface-border align-items-center gap-3"
                          >
                            <div>
                              <img
                                role="presentation"
                                :alt="file.name"
                                :src="file.objectURL"
                                width="100"
                                height="50"
                                class="shadow-2"
                              />
                            </div>
                            <span class="font-semibold">{{ file.name }}</span>
                            <div>{{ formatSize(file.size) }}</div>
                            <Badge
                              value="Completed"
                              class="mt-3"
                              severity="success"
                            />
                            <Button
                              icon="pi pi-times"
                              outlined
                              rounded
                              severity="danger"
                              @click="removeUploadedFileCallback(index)"
                            />
                          </div>
                        </div>
                      </div>
                    </template>
                    <template #empty>
                      <div
                        class="flex flex-col justify-center items-center gap-4"
                      >
                        <i
                          class="pi pi-cloud-upload border-2 border-circle p-5 text-8xl text-400 border-400"
                        />
                        <p class="mt-4 mb-0">
                          Перетащите файл сюда для загрузки
                        </p>
                      </div>
                    </template>
                  </FileUpload>
                </div>
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
                v-if="institution?.email"
                class="hover:text-primary-700 hover:underline cursor-pointer"
              >
                {{ institution?.email }}
              </div>
              <div v-else>нет данных</div>
            </div>

            <div class="flex flex-row gap-4">
              <div class="mb-4">Телефон:</div>
              <div
                v-if="institution?.phone"
                class="hover:text-primary-700 hover:underline cursor-pointer"
              >
                {{ institution?.phone }}
              </div>
              <div v-else>нет данных</div>
            </div>

            <div class="flex flex-row gap-4">
              <div class="mb-4">Адрес:</div>
              <div
                v-if="institution?.address"
                class="hover:text-primary-700 hover:underline cursor-pointer"
              >
                {{ institution?.address }}
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
                  v-for="(sport, index) in institution?.sports"
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
                  <InputText
                    v-if="!isRedactingModOpened"
                    v-model="institutionData.name"
                    type="text"
                    class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    disabled
                  />

                  <InputText
                    v-if="isRedactingModOpened"
                    v-model="institutionData.name"
                    class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    type="text"
                  />
                </div>

                <!-- ИНН -->
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >ИНН</label
                  >
                  <InputText
                    v-if="!isRedactingModOpened"
                    v-model="institutionData.inn"
                    type="text"
                    class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    disabled
                  />

                  <InputText
                    v-if="isRedactingModOpened"
                    v-model="institutionData.inn"
                    class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    type="text"
                  />
                </div>

                <!-- Рабочее время начало -->
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Рабочее время начало</label
                  >
                  <Calendar
                    id="calendar-timeonly"
                    v-model="time_start"
                    time-only
                  />
                </div>

                <!-- Рабочее время конец-->
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Рабочее время конец</label
                  >
                  <Calendar
                    id="calendar-timeonly"
                    v-model="time_end"
                    time-only
                  />
                </div>

                <div class="flex flex-row gap-4 col-span-6 sm:col-full">
                  <button
                    v-if="!isRedactingModOpened"
                    class="flex flex-row gap-2 items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    :class="isRedactingModOpened ? `bg-red-600` : ``"
                    @click="isRedactingModOpened = !isRedactingModOpened"
                  >
                    <div class="flex items-center">
                      <BaseIcon :path="mdiPencilOutline" :size="20" />
                    </div>
                    <span>Редактировать</span>
                  </button>

                  <button
                    v-if="isRedactingModOpened"
                    class="flex flex-row gap-2 items-center text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    @click="isRedactingModOpened = !isRedactingModOpened"
                  >
                    <div class="flex items-center">
                      <BaseIcon :path="mdiClose" :size="20" />
                    </div>
                    <span>Отменить</span>
                  </button>

                  <button
                    v-if="isRedactingModOpened"
                    class="flex flex-row gap-2 items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    @click="updateUser(authStore.user)"
                  >
                    <div class="flex items-center">
                      <BaseIcon :path="mdiCheck" :size="20" />
                    </div>
                    <span>Сохранить изменения</span>
                  </button>
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
                <!-- {{ institution?.description }} -->

                Миссия школы: создавать лучшие условия для развития спорта,
                привлекать к здоровому образу жизни тюменцев, способствовать
                физическому и нравственному совершенствованию жителей областной
                столицы. Наша мечта: стать и быть лучшим учреждением спорта в
                городе Тюмени.
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
  </NuxtLayout>
</template>
