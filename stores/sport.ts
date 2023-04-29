import { defineStore } from "pinia";
import { ISport } from "~/types/sport";

export const useSportStore = defineStore("sport", {
  state: () => ({
    sports: null,
    currentSport: {} as ISport,
  }),
  getters: {
    getSports(): any {
      return this.sports;
    },
    getCurrentSport(): any {
      // return this.currentSport[0];
      return this.currentSport !== null ? (this.currentSport as ISport) : null;
    },
  },
  actions: {
    async fetchSports() {
      try {
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
      } catch (error) {
        console.error(error);
      }
    },

    async fetchSportByID(idRoute: string) {
      try {
        const config = useRuntimeConfig();
        const baseUrl = config.public.baseUrl;
        const data: any = await $fetch(`/api/sport/id=${idRoute}`, {
          method: "GET",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          baseURL: baseUrl,
          credentials: "include",
        });
        this.currentSport = data?.sport;
      } catch (error) {
        console.error(error);
      }
    },

    async postSport(sportName: string) {
      try {
        const config = useRuntimeConfig();
        const baseUrl = config.public.baseUrl;
        await $fetch("/api/sport", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: {
            name: sportName,
          },
          baseURL: baseUrl,
          credentials: "include",
        }).then(async () => {
          await this.fetchSports();
        });
      } catch (error) {
        console.error(error);
      }
    },

    async updateSport(id: string, sportName: string) {
      try {
        const config = useRuntimeConfig();
        const baseUrl = config.public.baseUrl;
        const response: any = await $fetch(`/api/sport/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: {
            name: sportName,
          },
          baseURL: baseUrl,
          credentials: "include",
        }).then(async () => {
          await this.fetchSports();
        });
        if (response.status !== 200) {
          Error(`Request failed with status ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    },

    async deleteSportByID(idRoute: string) {
      const config = useRuntimeConfig();
      const baseUrl = config.public.baseUrl;
      await $fetch(`/api/sport/${idRoute}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        baseURL: baseUrl,
        credentials: "include",
      }).then(async () => {
        await this.fetchSports();
      });
    },
  },
});
