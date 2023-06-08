<script setup lang="ts">
import { mdiEyeOutline, mdiPencilOutline, mdiClose, mdiCheck } from "@mdi/js";
import { useToast } from "primevue/usetoast";
import { usePrimeVue } from "primevue/config";
import { useUserStore } from "~~/stores/user";

definePageMeta({
  middleware: ["user-only"],
});

const isRedactingModOpened = ref(false);

const isRedactingPhotoModOpened = ref(false);

const authStore = useUserStore();

await authStore.getUser();

const userData = ref({
  name: authStore.user?.name as string,
  image: authStore.user?.image as any,
  email: authStore.user?.email as any,
  last_name: authStore.user?.last_name as any,
  father_name: authStore.user?.father_name as any,
  gender: authStore.user?.gender as any,
  birth_date: authStore.user?.birth_date as any,
  // image: "новоефото",
});

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
</script>

<template>
  <section>
    <Toast />
    <div
      class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900"
    >
      <div class="mb-4 col-span-full xl:mb-2">
        <h1
          class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
        >
          Личный профиль
        </h1>
        <button @click="testClick">click</button>
      </div>
      <!-- Right Content -->
      <div class="col-span-full xl:col-auto">
        <div
          class="flex justify-center items-center p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
        >
          <div class="flex flex-row justify-around items-center gap-8">
            <div
              class="flex justify-center items-center mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 w-16 h-16"
            >
              <!-- <img
                class="mb-4 rounded-full w-40 h-40 sm:mb-0 xl:mb-4 2xl:mb-0"
                src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
                alt="Jese picture"
              /> -->
              <!-- src="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png" -->

              <span class="text-white text-3xl">
                {{ Array.from(authStore.user!.name)[0] }}
              </span>

              <!-- <Image
                :src="
                  authStore.user?.image
                    ? authStore.user?.image
                    : `/images/user.png`
                "
                alt="Image"
                preview
                class="mb-4 w-1/2 rounded-full h-auto sm:mb-0 xl:mb-4 2xl:mb-0"
              >
                <template #indicator>
                  <BaseIcon :path="mdiEyeOutline" :size="20" />
                </template>
              </Image> -->
            </div>
            <div>
              <h3 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                {{ authStore.user?.name }}
              </h3>
              <h2 class="mb-1 text-lg font-bold text-gray-900 dark:text-white">
                {{ authStore.user?.email }}
              </h2>

              <div
                v-if="authStore.user?.birth_date"
                class="flex flex-row gap-4"
              >
                <span>Возраст:</span>
                <span>{{ getAge(formatDate(userData.birth_date)) }}</span>
              </div>

              <!-- <button
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 my-4"
                @click="isRedactingPhotoModOpened = !isRedactingPhotoModOpened"
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
              </button> -->

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
                      <p class="mt-4 mb-0">Перетащите файл сюда для загрузки</p>
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
          <div class="flex flex-col gap-4">
            <div class="flex flex-row items-center gap-3">
              <h3 class="text-xl font-semibold dark:text-white">
                Карта рекомендаций
              </h3>
              <span
                class="bg-primary-100 text-primary-800 text-xs max-w-max font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
              >
                Chat GPT
              </span>
            </div>

            <div>
              Выберите услугу воспользовавшись нашим функционалом
              индивидуального подбора
            </div>

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

              <!-- ИМЯ -->
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first-name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Имя</label
                >
                <InputText
                  v-if="!isRedactingModOpened"
                  v-model="userData.name"
                  type="text"
                  class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  disabled
                />

                <InputText
                  v-if="isRedactingModOpened"
                  v-model="userData.name"
                  class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  type="text"
                />
              </div>

              <!-- Фамилия -->
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first-name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Фамилия</label
                >
                <InputText
                  v-if="!isRedactingModOpened"
                  v-model="userData.last_name"
                  type="text"
                  class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  disabled
                />

                <InputText
                  v-if="isRedactingModOpened"
                  v-model="userData.last_name"
                  class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  type="text"
                />
              </div>

              <!-- ОТЧЕСТВО -->
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first-name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Отчество</label
                >
                <InputText
                  v-if="!isRedactingModOpened"
                  v-model="userData.father_name"
                  type="text"
                  disabled
                  class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
                <InputText
                  v-if="isRedactingModOpened"
                  v-model="userData.father_name"
                  type="text"
                  class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>

              <!-- ПОЛ -->
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first-name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Пол</label
                >
                <Dropdown
                  v-if="!isRedactingModOpened"
                  v-model="userData.gender"
                  :options="genders"
                  option-label="name"
                  option-value="name"
                  disabled
                  placeholder="Выберите пол"
                  class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />

                <Dropdown
                  v-if="isRedactingModOpened"
                  v-model="userData.gender"
                  :options="genders"
                  option-label="name"
                  option-value="name"
                  show-clear
                  placeholder="Выберите пол"
                  class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>

              <!-- ДАТА РОЖДЕНИЯ -->
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first-name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Дата рождения</label
                >
                <Calendar
                  v-if="!isRedactingModOpened"
                  v-model="userData.birth_date"
                  date-format="yy-mm-dd"
                  class="shadow-md bg-gray-10 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  disabled
                />
                <!-- date-format="dd/mm/yy" -->
                <Calendar
                  v-if="isRedactingModOpened"
                  v-model="userData.birth_date"
                  date-format="yy-mm-dd"
                  class="shadow-md bg-gray-10 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>

              <!-- EMAIL -->
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first-name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Email</label
                >
                <InputText
                  v-if="!isRedactingModOpened"
                  v-model="userData.email"
                  type="text"
                  disabled
                  class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
                <InputText
                  v-if="isRedactingModOpened"
                  v-model="userData.email"
                  type="text"
                  disabled
                  class="shadow-md bg-gray-10 border-0 border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
            </div>
          </div>
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
