export const useSEO = () => {
  const SEO = ref([
    {
      title: "Спорт-услуги",
      description: "Спорт услуги главная страница официальный сайт",
      path: "/",
    },
    {
      title: "Спорт-услуги | Админ",
      description: "Админ панель",
      path: "/admin",
    },
    {
      title: "Спорт-услуги | Вход",
      description: "Авторизация пользователя или учреждения",
      path: "/login",
    },
  ]);
  const defaultSEO = ref({
    title: "Спорт-услуги",
    description: "Агрегатор спортивных услуг Спорт-услуги",
  });

  const getSeoForPage = (path: string) => {
    return SEO.value.some((item) => item.path === path)
      ? SEO.value.find((item) => item.path === path)
      : defaultSEO.value;
  };

  return {
    getSeoForPage,
  };
};
