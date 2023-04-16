import { useUserStore } from "~~/stores/user";
const userStore = useUserStore();

export default defineNuxtRouteMiddleware(async (to) => {
  await userStore.getUserRoles();
  // const isUser = await useUser();
  // const isModerator = await useModerator();
  // console.log("user");
  // console.log(isUser.value);
  // console.log("mod");
  // console.log(isModerator.value);
  // // if (isUser.value && !isModerator.value) return navigateTo({ name: "index" });
  // // if (!isUser.value && !isModerator.value) return navigateTo({ name: "login" });
  // if (isModerator.value === false) return navigateTo({ name: "index" });

  // const moderator = await userStore.isModerator;
  // console.log("moderator");
  // console.log(moderator);
  // if (!moderator) return navigateTo({ name: "index" });

  const moderator = await userStore.isModerator;
  console.log("moderator");
  console.log(moderator);
  if (moderator === false && to.path === "/mod")
    return navigateTo({ name: "index" });
});
