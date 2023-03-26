import { defineStore } from "pinia";
import { User } from "~~/types/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    currentUser: ({} as User) || null,
  }),

  getters: {},

  actions: {},
});
