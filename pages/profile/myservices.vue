<script setup>
import { useUserStore } from "~~/stores/user";
import { useFormStore } from "~~/stores/form";

const authStore = useUserStore();
const formStore = useFormStore();

await authStore.getUser();
const user = computed(() => {
  return authStore.user;
});

await formStore.getServiceFormsByUserId(user.value?.id);

console.log(formStore.getCurrentUserServiceForms);

console.log(user.value);
</script>

<template>
  <div>My services</div>
</template>
