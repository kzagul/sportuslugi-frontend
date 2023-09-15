import { defineStore } from "pinia";

export const useVisitStore = defineStore("visit", {
  state: () => ({
    visitsCurrentInstitution: null,
    visitsCurrentInstitutionServices: null,

    visitsAllInstitutionsCount: null,
    visitsCurrentInstitutionCount: null,
    visitsCurrentInstitutionServicesCount: null,
  }),
  //   getters: {
  //     getServices(): any {
  //       return this.services;
  //     },
  //     getCurrentService(): any {
  //       return this.currentService;
  //     },
  //   },
  actions: {
    // Всего посещений данного учреждения
    async getTotalVisitsOfInstitution(institutionId: any) {
      try {
        const { data: res } = await fetchApi(
          `/api/institution/visits-count/${institutionId}`,
          {
            method: "get",
          }
        );

        const result: any = res.value;
        this.visitsCurrentInstitutionCount = result.visit_count;
      } catch (error) {
        console.error(error);
      }
    },

    // Всего посещений всех учреждения;
    async getTotalVisitsOfInstitutionsAll() {
      try {
        const { data: res } = await fetchApi(
          `/api/institutions-all/visits-count`,
          {
            method: "get",
          }
        );

        const result: any = res.value;
        this.visitsAllInstitutionsCount = result.visit_count;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
