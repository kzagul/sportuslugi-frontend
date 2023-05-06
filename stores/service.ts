import { defineStore } from "pinia";

export const useServiceStore = defineStore("service", {
  state: () => ({
    services: null,
    currentService: null,
  }),
  getters: {
    getServices(): any {
      return this.services;
    },
    getCurrentService(): any {
      return this.currentService;
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

    async fetchServiceByID(idRoute: string) {
      try {
        const { data: res } = await fetchApi(`/api/service/id=${idRoute}`, {
          method: "GET",
        });
        const result: any = res.value;
        this.currentService = result.service;
      } catch (error) {
        console.error(error);
      }

      // try {
      //   const config = useRuntimeConfig();
      //   const baseUrl = config.public.baseUrl;
      //   const data: any = await $fetch(`/api/service/id=${idRoute}`, {
      //     method: "GET",
      //     headers: {
      //       Accept: "application/json, text/plain, */*",
      //       "Content-Type": "application/json",
      //       "X-Requested-With": "XMLHttpRequest",
      //     },
      //     baseURL: baseUrl,
      //     credentials: "include",
      //   });
      //   this.currentSport = data?.sport;
      // } catch (error) {
      //   console.error(error);
      // }
    },

    async postService(
      serviceName: string,
      sportsNames: any,
      institutionsNames: any
    ) {
      try {
        await fetchApi("/api/service", {
          method: "POST",
          body: {
            name: serviceName,
            sports: sportsNames,
            institutions: institutionsNames,
          },
        }).then(async () => {
          await this.fetchServices();
        });
      } catch (error) {
        console.error(error);
      }

      // try {
      //   const config = useRuntimeConfig();
      //   const baseUrl = config.public.baseUrl;
      //   const response: any = await $fetch("/api/service", {
      //     method: "post",
      //     headers: {
      //       Accept: "application/json, text/plain, */*",
      //       "Content-Type": "application/json",
      //       "X-Requested-With": "XMLHttpRequest",
      //     },
      //     body: {
      //       name: serviceName,
      //     },
      //     baseURL: baseUrl,
      //     credentials: "include",
      //   });
      //   if (response.status !== 200) {
      //     Error(`Request failed with status ${response.status}`);
      //   }
      // } catch (error) {
      //   console.error(error);
      // }
    },

    async updateService(id: string, serviceName: string) {
      try {
        // const response: any = await
        await fetchApi(`/api/service/${id}`, {
          method: "PUT",
          body: {
            name: serviceName,
          },
        }).then(async () => {
          await this.fetchServices();
        });
        // if (response.status !== 200) {
        //   Error(`Request failed with status ${response.status}`);
        // }
      } catch (error) {
        console.error(error);
      }
    },

    async deleteServiceByID(idRoute: string) {
      await fetchApi(`/api/service/${idRoute}`, {
        method: "DELETE",
      }).then(async () => {
        await this.fetchServices();
      });
    },
  },
});
