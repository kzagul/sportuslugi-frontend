import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => ({
    serviceForms: null,
    currentUserServiceForms: null,
    currentInstitutionServiceForms: null,
  }),
  getters: {
    getServiceForms(): any {
      return this.serviceForms;
    },
    getCurrentUserServiceForms(): any {
      return this.currentUserServiceForms;
    },
    getCurrentInstitutionServiceForms(): any {
      return this.currentInstitutionServiceForms;
    },
  },
  actions: {
    async getServiceForms() {
      try {
        const { data: res } = await fetchApi(`/api/form-services`, {
          method: "GET",
        });
        const result: any = res.value;
        this.serviceForms = result.form_services;
      } catch (error) {
        console.error(error);
      }
    },

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

    async postServiceForm(
      userIdValue: any,
      serviceIdValue: any,
      titleValue: any,
      contentValue: any,
      sentAtValue: any
    ) {
      try {
        await fetchApi("/api/form-service-new", {
          method: "POST",
          body: {
            user_id: userIdValue,
            service_id: serviceIdValue,
            title: titleValue,
            content: contentValue,
            sent_at: sentAtValue,
          },
        });
        // .then(async () => {
        //   await this.fetchInstitutions();
        // });
      } catch (error) {
        console.error(error);
      }
    },
  },
});
