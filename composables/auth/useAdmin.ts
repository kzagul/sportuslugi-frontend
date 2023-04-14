// import { useAuthUser } from "./useAuthUser";

// export const useAdmin = () => {
//   const authUser = useAuthUser();

//   return computed(() => {
//     if (!authUser.value) return false;

//     return authUser.value.roles.includes("ADMIN");
//   });
// };

import { useUserStore } from "~~/stores/user";
import { Role } from "~~/types/user";

const userStore = useUserStore();

export const useAdmin = () => {
  // const authUser = userStore.user;
  const userRoles = userStore.userRoles;

  return computed(() => {
    if (!userRoles) return false;

    // return !!authUser?.roles.some((role: any) => role.name === "admin");
    return !!userRoles.some((role: Role) => role.name === "admin");

    // return authUser?.roles.includes("ADMIN");
  });
};
