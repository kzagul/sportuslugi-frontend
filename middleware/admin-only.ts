import { useUserStore } from "~~/stores/user";
const userStore = useUserStore();

export default defineNuxtRouteMiddleware(async (to) => {
  await userStore.getUserRoles();
  // const isUser = await useUser();
  // const isAdmin = await useAdmin();
  // console.log("user");
  // console.log(isUser.value);
  // if (!isUser.value) return navigateTo({ name: "index" });
  // console.log("admin");
  // console.log(isAdmin.value);

  // if (isAdmin.value === false) return navigateTo({ name: "index" });

  // if (isUser.value && !isAdmin.value) return navigateTo({ name: "index" });
  // if (!isUser.value && !isAdmin.value) return navigateTo({ name: "login" });

  // const isAdmin = await useAdmin();
  // const isUser = await useUser();
  // console.log("user");
  // console.log(isUser.value);
  // console.log("admin");
  // console.log(isAdmin.value);
  // if (isUser.value && !isAdmin.value) return navigateTo({ name: "index" });
  // if (!isUser.value && !isAdmin.value) return navigateTo({ name: "login" });
  // if (!isAdmin.value) return navigateTo({ name: "index" });

  // 2
  // if (process.server) return;

  // const admin = await userStore.isAdmin;
  // console.log("admin");
  // console.log(admin);
  // if (!admin) return navigateTo({ name: "index" });

  // 3
  // const isAdmin = await useAdmin();
  // console.log("admin");
  // console.log(isAdmin.value);
  // if (!isAdmin.value) return navigateTo({ name: "index" });

  // 4
  const admin = await userStore.isAdmin;
  console.log("admin");
  console.log(admin);
  if (admin === false && to.path === "/admin")
    return navigateTo({ name: "index" });
});
