<script lang="ts" setup>
import { useUserStore } from "~/stores/user";

const authStore = useUserStore();

await authStore.getToken();
await authStore.getUser();
await authStore.getUserRoles();

const isDrawbarOpened = ref(true);
</script>

<template>
  <div>
    <div v-if="authStore.isVerifiedModerator" class="flex gap-4">
      <LayoutTheAdminHeader
        @response="(drawbarStatus: boolean) => isDrawbarOpened = drawbarStatus"
      />

      <LayoutTheDrawbarOrg v-show="isDrawbarOpened" />
      <div
        class="w-full sm:px-4 mt-4 md:mt-20"
        :class="isDrawbarOpened ? `ml-60` : ``"
      >
        <slot />
      </div>
    </div>
    <div v-else>
      Дождитесь подтверждения, что вы относитесь к своей организации
    </div>
  </div>
</template>
