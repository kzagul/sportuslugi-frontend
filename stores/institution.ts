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
      // const config = useRuntimeConfig();
      // const baseUrl = config.public.baseUrl;
      try {
        const { data: res } = await fetchApi("/api/institutions", {
          method: "GET",
        });
        const result: any = res.value;
        this.institutions = result.institutions;
      } catch (error) {
        console.error(error);
      }

      // const data: any = await $fetch("/api/institutions", {
      //   method: "GET",
      //   headers: {
      //     Accept: "application/json, text/plain, */*",
      //     "Content-Type": "application/json",
      //     "X-Requested-With": "XMLHttpRequest",
      //   },
      //   baseURL: baseUrl,
      //   credentials: "include",
      // });
      // this.institutions = data.institutions;
    },

    async fetchInstitutionByName(nameRoute: string) {
      // const config = useRuntimeConfig();
      // const baseUrl = config.public.baseUrl;
      try {
        const { data: res } = await fetchApi(
          `/api/institution/name=${nameRoute}`,
          {
            method: "GET",
          }
        );
        const result: any = res.value;
        this.currentInstitution = result.institution[0];
      } catch (error) {
        console.error(error);
      }

      // const data: any = await $fetch(`/api/institution/name=${nameRoute}`, {
      //   method: "GET",
      //   headers: {
      //     Accept: "application/json, text/plain, */*",
      //     "Content-Type": "application/json",
      //     "X-Requested-With": "XMLHttpRequest",
      //   },
      //   baseURL: baseUrl,
      //   credentials: "include",
      // });
      // this.currentInstitution = data.institution[0];
    },

    async fetchInstitutionByID(idRoute: string) {
      try {
        const { data: res } = await fetchApi(`/api/institution/id=${idRoute}`, {
          method: "GET",
        });
        const result: any = res.value;
        this.currentInstitution = result.institution[0];
      } catch (error) {
        console.error(error);
      }
    },

    async postInstitution(institutionName: string) {
      try {
        await fetchApi("/api/institution", {
          method: "POST",
          body: {
            name: institutionName,
          },
        }).then(async () => {
          await this.fetchInstitutions();
        });
      } catch (error) {
        console.error(error);
      }
    },

    async addContactUser(
      id: string,
      userValue: any
      // contactUsersValue: any
    ) {
      try {
        // const response: any = await
        await fetchApi(`/api/institution/${id}`, {
          method: "PUT",
          body: {
            contact_users: userValue,
            // contact_users: contactUsersValue,
          },
        }).then(async () => {
          await this.fetchInstitutions();
        });
        // if (response.status !== 200) {
        //   Error(`Request failed with status ${response.status}`);
        // }
      } catch (error) {
        console.error(error);
      }
    },

    async updateInstitution(
      id: string,
      institutionName: string
      // contactUsersValue: any
    ) {
      try {
        // const response: any = await
        await fetchApi(`/api/institution/${id}`, {
          method: "PUT",
          body: {
            name: institutionName,
            // contact_users: contactUsersValue,
          },
        }).then(async () => {
          await this.fetchInstitutions();
        });
        // if (response.status !== 200) {
        //   Error(`Request failed with status ${response.status}`);
        // }
      } catch (error) {
        console.error(error);
      }
    },

    async deleteInstitutionByID(idRoute: string) {
      await fetchApi(`/api/institution/${idRoute}`, {
        method: "DELETE",
      }).then(async () => {
        await this.fetchInstitutions();
      });
    },
  },
});
