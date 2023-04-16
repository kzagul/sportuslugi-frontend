import { useUserStore } from "~~/stores/user";
const userStore = useUserStore();

export default defineNuxtRouteMiddleware(async () => {
  await userStore.getUserRoles();
  const roles = await userStore.userRoles;
  console.log("roles");
  console.log(roles);
  if (roles === null) return navigateTo({ name: "login" });
});
