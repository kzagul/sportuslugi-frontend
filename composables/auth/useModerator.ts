import { useUserStore } from "~~/stores/user";
import { Role } from "~~/types/user";

const userStore = useUserStore();

export const useModerator = () => {
  const userRoles = userStore.userRoles;

  return computed(() => {
    if (!userRoles) return false;
    return !!userRoles.some((role: Role) => role.name === "moderator");
  });
};
