import { defineStore } from "pinia";
import { IInstitution, IGeo, IService, ISport } from "~/types";

export const useTestStore = defineStore("test", {
  state: () => ({
    sports: null,

    institutions: [
      {
        id: 1,
        name: "Геолог",
        literal: "geolog",
        inn: "7743013902",
        email: "geolog@gmail.com",
        phone: "89994445501",
        coordinates: {
          id: 1,
          name: "first",
          latitude: "57.1351831",
          longitude: "65.5165347",
        } as IGeo,
        services: [
          {
            id: 1,
            name: "занятие футболом",
          },
          {
            id: 1,
            name: "Занятие йогой",
          },
        ] as IService[],
        sports: [
          {
            id: 1,
            name: "футбол",
          },
          {
            id: 2,
            name: "Йога",
          },
        ] as ISport[],
      },
      {
        id: 2,
        name: "Прибой",
        coordinates: {
          id: 2,
          name: "first",
          latitude: "57.1324513",
          longitude: "65.5465347",
        } as IGeo,
        services: [
          {
            id: 1,
            name: "занятие футболом",
          },
          {
            id: 1,
            name: "Занятие йогой",
          },
        ] as IService[],
        sports: [
          {
            id: 1,
            name: "футбол",
          },
          {
            id: 2,
            name: "Йога",
          },
        ] as ISport[],
      },
      {
        id: 3,
        name: "Строймаш",
        coordinates: {
          id: 2,
          name: "first",
          latitude: "57.1392911",
          longitude: "65.5265347",
        } as IGeo,
        services: [
          {
            id: 1,
            name: "занятие футболом",
          },
          {
            id: 1,
            name: "Занятие йогой",
          },
        ] as IService[],
        sports: [
          {
            id: 1,
            name: "футбол",
          },
          {
            id: 2,
            name: "Йога",
          },
        ] as ISport[],
      },
    ] as IInstitution[],

    services: [
      {
        id: 1,
        name: "занятие футболом",
        institutions: [
          {
            id: 1,
            name: "Геолог",
            coordinates: {
              id: 1,
              name: "first",
              latitude: "57.1151831",
              longitude: "65.5965347",
            } as IGeo,
          },
        ] as IInstitution[],

        sports: [
          {
            id: 1,
            name: "футбол",
          },
          {
            id: 3,
            name: "Бег",
          },
        ] as ISport[],
      },
    ] as IService[],
  }),
  getters: {
    getSports(): any {
      return this.sports;
    },
    getInstitutions(): any {
      return this.institutions;
    },
    getServices(): any {
      return this.services;
    },
  },
  actions: {},
});
