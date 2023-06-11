import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => ({
    serviceForms: null,
    currentUserServiceForms: null,
  }),
  getters: {
    getServiceForms(): any {
      return this.serviceForms;
    },
    getCurrentUserServiceForms(): any {
      return this.currentUserServiceForms;
    },
  },
  actions: {
    async getServiceFormsByUserId(id: string) {
      try {
        const { data: res } = await fetchApi(`/api/form-services/${id}`, {
          method: "GET",
        });
        const result: any = res.value;
        this.currentUserServiceForms = result.form_services;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
