// import { useInstitutionStore } from "~~/stores/institution";
// const institutionStore = useInstitutionStore();

export const useServiceFunc = () => {
  function getServicesOfInstitution(services: any, institutionId: any) {
    const resultServices = services.filter(
      (service: any) => service?.institutions[0]?.id === institutionId
    );
    return resultServices;
  }

  return {
    getServicesOfInstitution,
  };
};
