<template>
  <div min-h-screen flex flex-col bg-slate-900>
    <LayoutTheHeader />
    <!-- <main class="wrapper"> -->
    <main class="wrapper">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
// import { useAuthUser, useAdmin, useAuth } from "~~/composables/auth";

// const currentUser = useAuthUser();
// const isAdmin = useAdmin();
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
