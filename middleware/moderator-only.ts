export default defineNuxtRouteMiddleware(async (_to, _from) => {
  const isModerator = await useModerator();
  if (!isModerator.value) return navigateTo({ name: "login" });
});
