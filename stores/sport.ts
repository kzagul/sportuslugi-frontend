import { defineStore } from "pinia";

export const useSportStore = defineStore("sport", {
  state: () => ({
    sports: null,
  }),
  getters: {
    getSports(): any {
      return this.sports;
    },
  },
  actions: {
    async fetchSports() {
      const config = useRuntimeConfig();
      const baseUrl = config.public.baseUrl;
      const data: any = await $fetch("/api/sports", {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        baseURL: baseUrl,
        credentials: "include",
      });
      this.sports = data.sports;
    },
  },
});
