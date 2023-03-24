<template>
  <header class="wrapper">
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <div class="flex flex-row items-center gap-4">
          <NuxtLink to="/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />

            <span class="self-center text-xl font-semibold whitespace-nowrap"
              >Flowbite</span
            >
          </NuxtLink>

          <!-- navigation -->
          <div class="flex gap-4">
            <PageLink to="/"> Главная </PageLink>

            <template v-if="currentUser">
              <PageLink to="/private"> Private </PageLink>
              <PageLink v-if="isAdmin" to="/admin"> Admin </PageLink>
            </template>

            <template v-else>
              <PageLink to="/guest"> Public </PageLink>
            </template>
          </div>
        </div>

        <div class="flex items-center gap-4 lg:order-2">
          <template v-if="currentUser">
            <PageLink to="/private" class="text-gray-800"> Private </PageLink>

            <PageLink v-if="isAdmin" to="/admin"> Admin </PageLink>

            <button
              class="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              :disabled="form.pending"
              @click="onLogoutClick"
            >
              Logout
            </button>
          </template>

          <template v-else>
            <PageLink to="/guest" class="text-gray-800"> Public </PageLink>

            <NuxtLink
              to="/login"
              class="text-gray-800 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Login
            </NuxtLink>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useAuthUser, useAdmin, useAuth } from "~~/composables/auth";

const currentUser = useAuthUser();
const isAdmin = useAdmin();
const { logout } = useAuth();

const form = reactive({
  pending: false,
});

async function onLogoutClick() {
  try {
    form.pending = true;

    await logout();

    await navigateTo("/");
  } catch (error) {
    console.error(error);
  } finally {
    form.pending = false;
  }
}
</script>
