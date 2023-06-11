// import { useInstitutionStore } from "~~/stores/institution";
// const institutionStore = useInstitutionStore();

export const useInstitutionFunc = () => {
  function getInstitutionByName(institutions: any, institutionName: string) {
    const institution = institutions.filter(
      (elem: any) => elem?.name === institutionName
    );
    return institution;
  }

  return {
    getInstitutionByName,
  };
};
