import { defineStore } from "pinia";

export const useStatisticsStore = defineStore("statistics", {
  state: () => ({
    stat: {
      rating: {
        institutionMedianRating: 4.5,
        institutionRatingAmount: 30,
        institutionMaxRating: 5,
        institutionMinRating: 2,
        servicesCommonRating: 4.5,
        servicesBest: [
          { id: 1, name: "Услуга 1", rating: 5 },
          { id: 2, name: "Услуга 2", rating: 4.7 },
          { id: 3, name: "Услуга 3", rating: 4.6 },
          { id: 4, name: "Услуга 4", rating: 4.6 },
          { id: 5, name: "Услуга 5", rating: 4.0 },
        ],
      },
      visits: {
        institutionVisits: 53,
        servicesVisits: 91,
      },
      forms: {
        amountOfSends: 22,
        amountOfRecords: 11,
      },
    },
  }),
  getters: {
    getStatistics(): any {
      return this.stat;
    },
  },
  actions: {},
});
