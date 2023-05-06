<script lang="ts" setup>
definePageMeta({
  middleware: ["moderator-only"],
  layout: false,
});
</script>

<template>
  <NuxtLayout name="moderator">
    <div>Личный кабинет спортивного учреждения</div>
  </NuxtLayout>
</template>
