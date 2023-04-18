<script setup lang="ts">
import { useUserStore } from "~~/stores/user";
definePageMeta({
  middleware: ["admin-only"],
  layout: false,
});

const authStore = useUserStore();
</script>

<template>
  <NuxtLayout name="auth">
    <div>
      <div v-if="authStore.isAdmin">Добро пожаловать в админ панель!</div>
      <div v-else>Нет доступа</div>
    </div>
  </NuxtLayout>
</template>
