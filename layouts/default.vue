<template>
  <div id="app">
    <LayoutTheHeader />
    <div class="wrapper">
      <slot />
    </div>
    <!-- <LayoutTheFooter /> -->
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "~/stores/user";

const authStore = useUserStore();

await authStore.getToken();
await authStore.getUser();
await authStore.getUserRoles();
</script>
