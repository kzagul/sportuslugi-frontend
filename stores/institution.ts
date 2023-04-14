import { defineStore } from "pinia";

export const useInstitutionStore = defineStore("institution", {
  state: () => ({
    institutions: null,
    currentInstitution: null,
  }),
  getters: {
    getInstitutions(): any {
      return this.institutions;
    },
    getCurrentInstitution(): any {
      return this.currentInstitution;
    },
  },
  actions: {
    async fetchInstitutions() {
      const config = useRuntimeConfig();
      const baseUrl = config.public.baseUrl;
      const data: any = await $fetch("/api/institutions", {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        baseURL: baseUrl,
        credentials: "include",
      });
      this.institutions = data.institutions;
    },
    async fetchInstitutionByName(nameRoute: string) {
      const config = useRuntimeConfig();
      const baseUrl = config.public.baseUrl;
      const data: any = await $fetch(`/api/institution/name=${nameRoute}`, {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        baseURL: baseUrl,
        credentials: "include",
      });
      this.currentInstitution = data.institution[0];
    },
  },
});
