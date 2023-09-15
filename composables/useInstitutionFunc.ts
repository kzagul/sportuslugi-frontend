// import { useInstitutionStore } from "~~/stores/institution";
// const institutionStore = useInstitutionStore();

export const useInstitutionFunc = () => {
  function getInstitutionByName(institutions: any, institutionName: string) {
    const institution = institutions.filter(
      (elem: any) => elem?.name === institutionName
    );
    return institution;
  }

  // function getInstitutionByServiceId(services: any, serviceId: string) {
  //   const service = services.filter(
  //     (elem: any) => elem?.institutions[0].id === serviceId
  //   );
  //   // institutions

  //   return service;
  // }

  // function getInstitutionOfCurrentUser(users: any) {
  //   const currentUser = users.find(
  //     (item: any) => item.id === user.value?.id
  //   );
  //   return currentUser?.contact_user_of[0];
  // }

  return {
    getInstitutionByName,
    // getInstitutionOfCurrentUser,
  };
};
