import { useAdmin } from "~/composables/auth/useAdmin";

export default defineNuxtRouteMiddleware(async (_to, _from) => {
  const isAdmin = await useAdmin();

  if (!isAdmin.value) return navigateTo({ name: "login" });
});
