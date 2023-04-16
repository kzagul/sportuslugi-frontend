<script setup lang="ts">
import { useUserStore } from "~~/stores/user";
definePageMeta({
  middleware: ["admin-only"],
});

const authStore = useUserStore();
</script>

<template>
  <div>
    <div v-if="authStore.isAdmin">Добро пожаловать в админ панель!</div>
    <div v-else>Нет доступа</div>
  </div>
</template>
