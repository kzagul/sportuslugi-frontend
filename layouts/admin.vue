<script lang="ts" setup>
import { useUserStore } from "~/stores/user";

const authStore = useUserStore();

await authStore.getToken();
await authStore.getUser();
await authStore.getUserRoles();
</script>

<template>
  <div class="flex">
    <LayoutTheDrawbar />
    <div class="wrapper w-full sm:px-4 mt-4 md:mt-8">
      <slot />
    </div>
  </div>
</template>
