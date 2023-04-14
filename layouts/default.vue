<template>
  <div min-h-screen flex flex-col bg-slate-900>
    <LayoutTheHeader />
    <!-- <main class="wrapper"> -->
    <main class="wrapper">
      <slot />
    </main>
    <LayoutTheFooter />
  </div>
</template>

<script lang="ts" setup>
// import { useAuthUser, useAdmin, useAuth } from "~~/composables/auth";

// const currentUser = useAuthUser();
// const isAdmin = useAdmin();

import { useUserStore } from "~~/stores/user";

const authStore = useUserStore();

// const { getUser } = authStore;
// await getUser();

// onMounted(async () => {
//   await authStore.getUser();
//   await authStore.getUserRoles();
// });
// await authStore.getUser();
// await authStore.getUser();
await authStore.getUser();
await authStore.getUserRoles();
// onBeforeMount(async () => {
//   await authStore.getUser();
//   await authStore.getUserRoles();
// });
// onBeforeMount(() => {
//   authStore.getUser();
//   authStore.getUserRoles();
// });
// authStore.getUser();
// authStore.getUserRoles();

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
