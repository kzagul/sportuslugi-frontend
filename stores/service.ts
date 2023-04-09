import { defineStore } from "pinia";

export const useServiceStore = defineStore("service", {
  state: () => ({
    services: null,
  }),
  getters: {
    getServices(): any {
      return this.services;
    },
  },
  actions: {
    async fetchServices() {
      const config = useRuntimeConfig();
      const baseUrl = config.public.baseUrl;
      const data: any = await $fetch("/api/services", {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        baseURL: baseUrl,
        credentials: "include",
      });
      this.services = data.services;
    },
  },
});
