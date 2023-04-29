<script lang="ts" setup>
import { useUserStore } from "~/stores/user";

const authStore = useUserStore();

await authStore.getToken();
await authStore.getUser();
await authStore.getUserRoles();
</script>

<template>
  <div id="app">
    <LayoutTheHeader />
    <div class="wrapper mt-16 md:mt-20">
      <!-- <div v-if="authStore.user">
        <div class="fixed top-20 bg-black bg-opacity-25 p-3">
          <h1>{{ authStore.user.name }}</h1>
          <p>{{ authStore.user.email }}</p>
          <p>is admin: {{ authStore.isAdmin }}</p>
          <p>is moderator: {{ authStore.isModerator }}</p>
        </div>
      </div> -->
      <slot />
    </div>
    <ScrollTop />
    <LayoutTheFooter />
    <!-- <div class="flex justify-center">
      <Message
        class="fixed bottom-0 mx-16 bg-brand-primary bg-opacity-80"
        severity="secondary"
      >
        Мы используем политику cookies
      </Message>
    </div> -->
  </div>
</template>
