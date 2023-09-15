<script setup>
import { mdiLifebuoy, mdiCheck } from "@mdi/js";
import { useUserStore } from "~~/stores/user";

const visible = ref(false);

const inputTextValue = ref(null);
const textAreaValue = ref("");

const userStore = useUserStore();

const user = computed(() => {
  return userStore.user;
  // return userStore.users.users;
});

const { sendTechMail } = useSendMail();

function sendTechMailfunction() {
  visible.value = !visible.value;
  sendTechMail(inputTextValue, textAreaValue, user.value.email);
}
</script>

<template>
  <footer class="wrapper p-4 bg-white sm:p-6 sm:px-4 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl">
      <!-- <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <div class="flex items-center">
            <NuxtLink to="/" class="flex items-center">
              <img
                src="/images/sport_logo2.svg"
                class="mr-3 h-10 sm:h-14"
                alt="Спорт услуги лого"
              />
            </NuxtLink>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Ресурсы
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="https://flowbite.com" class="hover:underline"
                  >Flowbite</a
                >
              </li>
              <li>
                <a href="https://tailwindcss.com/" class="hover:underline"
                  >Tailwind CSS</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Подпишитесь на нас
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  class="hover:underline"
                  >Github</a
                >
              </li>
              <li>
                <a href="https://discord.gg/4eeurUVvTy" class="hover:underline"
                  >Discord</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Legal
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div> -->
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex flex-row gap-4 items-center">
          <NuxtLink to="/" class="flex items-center">
            <img
              src="/images/sport_logo2.svg"
              class="mr-3 h-10 sm:h-14"
              alt="Спорт услуги лого"
            />
          </NuxtLink>
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023
            <nuxt-link to="/" class="hover:underline"> Спорт-услуги</nuxt-link>
            . Все права защищены
          </span>
          <span
            class="text-sm text-gray-800 text-bold sm:text-center dark:text-gray-400"
          >
            <nuxt-link to="/confident" class="hover:underline">
              Политика конфиденциальности
            </nuxt-link>
          </span>
        </div>

        <div class="flex mt-4 space-x-4 sm:justify-center sm:mt-0">
          <Button
            v-tooltip.top="{
              value: `<h4 class='text-white text-xs'>Отправьте форму</h4>`,
              escape: true,
            }"
            class="flex gap-1 bg-white"
            type="text"
            placeholder="Top"
            severity="secondary"
            label="Link"
            link
            @click="visible = true"
          >
            <BaseIcon
              :path="mdiLifebuoy"
              :size="20"
              class="flex justify-center items-center"
            />
            <span
              class="flex items-center text-sm text-gray-800 text-bold sm:text-center dark:text-gray-400 hover:underline cursor-pointer"
            >
              Техподдержка
            </span>

            <Dialog
              v-model:visible="visible"
              modal
              header="Сообщение в техподдержку"
              :style="{ width: '40vw' }"
            >
              <div class="flex flex-col gap-8">
                <div class="flex flex-col">
                  <label
                    for="first-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Тема сообщения</label
                  >
                  <InputText v-model="inputTextValue" type="text" />
                </div>

                <div class="flex flex-col">
                  <label
                    for="first-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Основная информация</label
                  >
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
                  @click="sendTechMailfunction"
                >
                  <BaseIcon :path="mdiCheck" :size="24" />
                  Отправить
                </Button>
                <!-- @click="deleteProduct" -->
              </template>
            </Dialog>
          </Button>
          <a href="https://legacystudio.ru/" class="flex">
            <span
              class="flex items-center text-sm text-gray-800 text-bold sm:text-center dark:text-gray-400 hover:underline"
            >
              Разработано в Legacy
            </span>
            <!-- <div
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div> -->
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
