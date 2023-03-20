<script lang="ts" setup>
defineProps<{ to: string }>();
</script>

<template>
  <NuxtLink :to="to">
    <slot />
  </NuxtLink>
</template>
