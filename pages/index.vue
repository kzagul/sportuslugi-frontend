<script lang="ts" setup>
import { useAuthUser } from "~~/composables/auth";
const currentUser = useAuthUser();
</script>

<template>
  <div>
    <PageTitle title="Home" />
    <PageDescription
      description="Simple authentification example using Nuxt3"
    />
    <PageUser :user="currentUser" />
  </div>
</template>
