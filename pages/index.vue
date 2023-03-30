<script setup>
// import { useAuthUser } from "~~/composables/auth";
// const currentUser = useAuthUser();
// import { onMounted } from "vue";
import { useUserStore } from "~~/stores/user";

const authStore = useUserStore();

// const { getUser } = authStore;
// await getUser();

onMounted(async () => {
  await authStore.getUser();
});
</script>

<template>
  <div>
    <!-- <PageTitle title="Home" />
    <PageDescription
      description="Simple authentification example using Nuxt3"
    />
    <PageUser :user="currentUser" /> -->
    <div class="max-w-7xl mx-auto">
      <div v-if="authStore.user">
        <h1>{{ authStore.user.name }}</h1>
        <p>{{ authStore.user.email }}</p>
      </div>
      <div v-else>
        <h1>Go and login</h1>
      </div>
    </div>
  </div>
</template>
