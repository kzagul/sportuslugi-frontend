<script lang="ts" setup>
definePageMeta({
  middleware: ["moderator-only"],
});
</script>

<template>
  <div>
    <PageTitle title="Moderator page" />
    <PageDescription
      description="This page should only be visible if user is connected and has moderator role"
    />
  </div>
</template>
