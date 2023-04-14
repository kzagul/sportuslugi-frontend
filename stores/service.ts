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
    async postService(serviceName: string) {
      try {
        const config = useRuntimeConfig();
        const baseUrl = config.public.baseUrl;
        const response: any = await $fetch("/api/service", {
          method: "post",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: {
            name: serviceName,
          },
          baseURL: baseUrl,
          credentials: "include",
        });
        if (response.status !== 200) {
          Error(`Request failed with status ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
