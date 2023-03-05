import { useAuthUser } from "~~/composables/auth";

export default defineNuxtRouteMiddleware(async (_to, _from) => {
  const user = await useAuthUser();

  if (!user.value) return navigateTo({ name: "login" });
});
