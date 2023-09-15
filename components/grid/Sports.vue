<template>
  <section class="bg-white">
    <div class="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="grid gap-8 sm:grid-cols-3 lg:grid-cols-3">
        <CardSportType
          v-for="(sport, index) in sports"
          :key="index"
          :sport="sport"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  sports: {
    type: Object,
    default: null,
  },
});
</script>
