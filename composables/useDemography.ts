const { getAge, formatDate } = useFormatDate();

export const useDemography = () => {
  const getAgeGroup = (age: any) => {
    if (age < "19") {
      return "Дети";
    } else if (age >= "19" && age <= "60") {
      return "Взрослые";
    } else {
      return "Пожилые";
    }
    return 1;
  };

  const getUsersAges = (users: any) => {
    const agesArray = users?.map((user: any) =>
      getAgeGroup(getAge(formatDate(user.birth_date)))
    );
    // const agesArray = users?.map((user: any) => user?.birth_date);
    return agesArray;
  };

  return {
    getAgeGroup,
    getUsersAges,
  };
};
