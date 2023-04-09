<template>
  <div min-h-screen flex flex-col bg-slate-900>
    <!-- <LayoutTheHeader /> -->
    <!-- <main class="wrapper"> -->
    <main class="">
      <slot />
    </main>
  </div>
</template>

<script setup>
// import { useAuthUser } from "~~/composables/auth";
// const currentUser = useAuthUser();
// import { onMounted } from "vue";
// import { useUserStore } from "~~/stores/user";

// const authStore = useUserStore();

// // const { getUser } = authStore;
// // await getUser();

// // onMounted(async () => {
// await authStore.getUser();
// });
// onMounted(async () => {
//   await authStore.getUser();
// });
</script>
