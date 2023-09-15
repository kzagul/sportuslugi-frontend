export const useStatistics = () => {
  // POST METHODS
  async function visitedInstitution(
    userIdValue: any,
    institutionIdValue: any,
    visitedAtValue: any
  ) {
    try {
      await fetchApi("/api/institution/new-visit", {
        method: "POST",
        body: {
          user_id: userIdValue,
          institution_id: institutionIdValue,
          visited_at: visitedAtValue,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function visitedService(
    userIdValue: any,
    serviceIdValue: any,
    institutionIdValue: any,
    visitedAtValue: any
  ) {
    try {
      await fetchApi("/api/service/new-visit", {
        method: "POST",
        body: {
          user_id: userIdValue,
          service_id: serviceIdValue,
          institution_id: institutionIdValue,
          visited_at: visitedAtValue,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  // GET METHODS
  async function getVisitsOfInstitution(institutionId: any) {
    try {
      const { data: res } = await fetchApi(
        //   const res: any = await fetchApi(
        `/api/institution/visits/${institutionId}`,
        {
          method: "get",
        }
      );

      const result: any = res.value;
      return result.visits;
    } catch (error) {
      console.error(error);
    }
  }

  async function getTotalVisitsOfInstitution(institutionId: any) {
    try {
      const { data: res } = await fetchApi(
        `/api/institution/visits-count/${institutionId}`,
        {
          method: "get",
        }
      );

      const result: any = res.value;
      return result.visit_count;
    } catch (error) {
      console.error(error);
    }
  }

  async function getTotalVisitsOfInstitutionsAll() {
    try {
      const { data: res } = await fetchApi(
        `/api/institutions-all/visits-count`,
        {
          method: "get",
        }
      );

      const result: any = res.value;
      return result.visit_count;
    } catch (error) {
      console.error(error);
    }
  }

  async function getVisitsOfService(serviceId: any) {
    try {
      const { data: res } = await fetchApi(`/api/service/visits/${serviceId}`, {
        method: "get",
      });

      const result: any = res.value;
      return result.visits;
    } catch (error) {
      console.error(error);
    }
  }

  async function getTotalVisitsOfService(institutionId: any) {
    try {
      const { data: res } = await fetchApi(
        `/api/institution/visits-count/${institutionId}`,
        {
          method: "get",
        }
      );

      const result: any = res.value;
      return result.visit_count;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    visitedInstitution,
    visitedService,
    getVisitsOfInstitution,
    getTotalVisitsOfInstitution,
    getTotalVisitsOfInstitutionsAll,
    getVisitsOfService,
    getTotalVisitsOfService,
  };
};
