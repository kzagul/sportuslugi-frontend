import { useUserStore } from "~~/stores/user";
const userStore = useUserStore();

export const useModerator = () => {
  const isModerator = userStore.isModerator;

  return computed(() => {
    if (!isModerator) return false;
    return isModerator;
  });
};
