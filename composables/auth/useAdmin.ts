import { useUserStore } from "~~/stores/user";
const userStore = useUserStore();

export const useAdmin = async () => {
  const isAdmin = await userStore.isAdmin;

  return computed(() => {
    if (!isAdmin) return false;
    return isAdmin;
  });
};
