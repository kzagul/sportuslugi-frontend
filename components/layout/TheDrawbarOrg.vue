<script setup>
// import { initDrawers } from "flowbite";
import { mdiClose, mdiCheck } from "@mdi/js";
import { useUserStore } from "~~/stores/user";
const authStore = useUserStore();

const isDrawbarOpened = ref(false);

const exitDialog = ref(false);

function confirmExitAccount() {
  exitDialog.value = false;
  authStore.handleLogout();
}
function cancelExitAccount() {
  exitDialog.value = false;
}

const menuNavsAdmin = ref([
  { name: "Дашборд", path: "/organization" },
  { name: "Профиль учреждения", path: "/organization/profile" },
  { name: "Мой профиль", path: "/profile" },
  { name: "Заявки на услуги", path: "/organization/request" },
]);

const menuNavsManaging = ref([
  { name: "Учреждение", path: "/organization/profile" },
  { name: "Услуги учреждения", path: "/organization/edit/services" },
]);
</script>

<template>
  <div>
    <!-- <button
      data-drawer-target="sidebar-user"
      data-drawer-toggle="sidebar-user"
      aria-controls="sidebar-user"
      type="button"
      class="fixed top-0 left-0 flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      @click="isDrawbarOpened = !isDrawbarOpened"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button> -->

    <aside
      id="sidebar-user"
      class="fixed top-0 left-0 z-20 sm:w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 mt-24"
      aria-label="Sidebar"
    >
      <!-- hidden sm:flex -->
      <div
        class="overflow-y-auto py-4 px-3 w-full h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="text-center text-gray-500 dark:text-gray-400">
          <!-- <NuxtLink to="/" class="flex justify-center items-center mb-12">
            <img
              src="/images/sport_logo2.svg"
              class="h-10 sm:h-14"
              alt="Спорт услуги лого"
            />
          </NuxtLink> -->

          <!-- <div
            class="flex justify-center items-center mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 w-16 h-16"
          > -->
          <span
            class="flex justify-center items-center text-white text-3xl bg-gray-800 rounded-full w-16 h-16 mx-auto"
          >
            {{ Array.from(authStore.user.name)[0] }}
          </span>
          <!-- </div> -->
          <!-- <img
            class="mx-auto mb-4 w-20 h-20 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            alt="Micheal Avatar"
          /> -->
          <h3
            class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <a href="#">{{ authStore.user?.name }}</a>
          </h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            {{ authStore.user?.email }}
          </p>

          <button
            class="w-full group flex justify-center items-center py-2 px-4 text-sm transition-colors duration-100 hover:text-error hover:bg-gray-100"
            @click="exitDialog = !exitDialog"
          >
            <!-- @click="authStore.handleLogout" -->
            Выход
          </button>
        </div>

        <div
          class="pt-5 mt-5 space-y-1 border-t border-gray-200 dark:border-gray-700"
        >
          <nuxt-link
            v-for="(menuNav, index) in menuNavsAdmin"
            :key="index"
            :to="menuNav.path"
            class="w-full group flex items-center py-2 px-4 text-base transition-colors duration-100 hover:text-primary-600 hover:bg-gray-100"
          >
            {{ menuNav.name }}
          </nuxt-link>
        </div>

        <div
          class="pt-5 mt-5 space-y-1 border-t border-gray-200 dark:border-gray-700"
        >
          <p class="text-lg pb-2">Управление</p>
          <nuxt-link
            v-for="(menuNav, index) in menuNavsManaging"
            :key="index"
            :to="menuNav.path"
            class="w-full group flex items-center py-2 px-4 text-base transition-colors duration-100 hover:text-primary-600 hover:bg-gray-100"
          >
            {{ menuNav.name }}
          </nuxt-link>
        </div>
      </div>
    </aside>

    <Dialog
      v-model:visible="exitDialog"
      :style="{ width: '450px' }"
      header="Выход"
      :modal="true"
    >
      <div class="flex align-items-center justify-content-center">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span>
          {{ authStore.user.name }}, вы действительно хотите выйти из аккаунта?
        </span>
      </div>
      <template #footer>
        <Button class="flex flex-row gap-3" @click="cancelExitAccount">
          <BaseIcon :path="mdiClose" :size="24" />
          Отменить
        </Button>
        <Button
          severity="danger"
          class="flex flex-row gap-3"
          @click="confirmExitAccount"
        >
          <BaseIcon :path="mdiCheck" :size="24" />
          Выйти
        </Button>
      </template>
    </Dialog>
  </div>
</template>
