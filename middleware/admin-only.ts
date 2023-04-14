// import { useAdmin } from "~/composables/auth/useAdmin";
// import { useUserStore } from "~~/stores/user";
// const userStore = useUserStore();
export default defineNuxtRouteMiddleware(async (_to, _from) => {
  // const isAdmin = await userStore.isAdmin;
  const isAdmin = await useAdmin();

  // if (!isAdmin.value) return navigateTo({ name: "login" });
  if (!isAdmin.value) return navigateTo({ name: "login" });

  // if (!isAdmin.value) {
  //   return navigateTo({ name: "index" });
  // } else {
  //   return navigateTo({ name: "about" });
  // }
  // process.client
});
