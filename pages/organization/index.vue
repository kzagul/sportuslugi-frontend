<script lang="ts" setup>
import { mdiStar } from "@mdi/js";
import { useStatisticsStore } from "~~/stores/statistics";
import { useVisitStore } from "~~/stores/visit";
import { useServiceStore } from "~~/stores/service";

definePageMeta({
  middleware: ["moderator-only"],
  layout: false,
});

const statisticsStore = useStatisticsStore();
const visitStore = useVisitStore();

const rating = computed(() => {
  return statisticsStore.getStatistics.rating;
});

const authStore = useUserStore();

await authStore.getUser();

const user = computed(() => {
  return authStore.user;
});
const users = computed(() => {
  return authStore.users;
});

// тест
const { getUsersAges } = useDemography();

const resAges = getUsersAges(users.value);

console.log(resAges);
console.log("Все пользователи");
console.log(users.value);

const getInstitutionOfCurrentUser = computed(() => {
  const currentUser = users.value?.find(
    (item: any) => item.id === user.value?.id
  );
  return currentUser?.contact_user_of[0];
});

console.log(users.value);
console.log(getInstitutionOfCurrentUser.value?.id);

const institutionId = getInstitutionOfCurrentUser.value?.id;

// SERVICES
const serviceStore = useServiceStore();

await serviceStore.fetchServices();

const services = computed(() => {
  return serviceStore.getServices;
});
console.log("getInstitutionOfCurrentUser.value?.services");
console.log(getInstitutionOfCurrentUser.value);

// const {
//   getVisitsOfInstitution,
//   getTotalVisitsOfInstitution,
//   getTotalVisitsOfInstitutionsAll,
//   getVisitsOfService,
//   getTotalVisitsOfService,
// } = useStatistics();

// VISITS
await visitStore.getTotalVisitsOfInstitutionsAll();
await visitStore.getTotalVisitsOfInstitution(1);
// 1)Всего посещений всех учреждения;
const totalVisitsOfInstitutionsAll = computed(() => {
  return visitStore.visitsAllInstitutionsCount;
});
// 2)Всего посещений данного учреждения;
const totalVisitsOfInstitution = computed(() => {
  return visitStore.visitsCurrentInstitutionCount;
});
console.log("texttext");
console.log(getInstitutionOfCurrentUser.value?.id);
console.log(visitStore.visitsCurrentInstitutionCount);

// VISITS FROM COMPOSITION
// console.log("1)посещений всех учреждений");
// const totalVisitsOfInstitutionAll = await getTotalVisitsOfInstitutionsAll();
// console.log(totalVisitsOfInstitutionAll);

// console.log("2)Всего посещений данного учреждения");
// const totalVisitsOfInstitution = await getTotalVisitsOfInstitution(
//   institutionId
// );
// console.log(totalVisitsOfInstitution);

// console.log("3)посещений услуги");
// console.log(getVisitsOfService(1));

// console.log("4)Всего посещений услуги");
// console.log(getTotalVisitsOfService(institutionId));

// console.log("5)Всего посещений всех услуг учреждения");

// console.log("6)Всего посещений всех услуг");

function visitsRelation(a: any, b: any) {
  return ((a / b) * 100).toFixed(1);
}

console.log("Соотношение");
console.log(
  visitsRelation(
    totalVisitsOfInstitution.value,
    totalVisitsOfInstitutionsAll.value
  )
);

// totalVisitsOfInstitutionsAll
// totalVisitsOfInstitution

const selectedTypeOfRating = ref();
const typesOfRating = ref([
  { name: "Посещаемость" },
  { name: "Оценки" },
  { name: "Заявки" },
]);
</script>

<template>
  <NuxtLayout name="moderator">
    <div class="py-16">
      <!-- РЕЙТИНГИ И ОЦЕНКИ -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 mt-4 bg-gray-10 rounded-lg card-shadow text-3xl font-semibold p-4 mb-4 hover:text-primary-500"
      >
        <span> Рейтинги и оценки </span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <!-- 1 -->
        <div
          class="flex flex-col items-start bg-gray-10 rounded-lg card-shadow p-8"
        >
          <div class="flex justify-between w-full mb-3">
            <div class="flex flex-col gap-12">
              <div>
                <span class="block font-medium mb-3 text-lg">
                  Средняя оценка учреждения
                </span>
                <div class="text-green-500 font-medium text-3xl">
                  <!-- {{ 4.8 }} -->
                  {{ 4.6 }}
                </div>
              </div>

              <div>
                <span class="block font-medium mb-3 text-lg">
                  Средняя оценка всех услуг учреждения
                </span>
                <div class="text-green-500 font-medium text-3xl">
                  {{ 4.5 }}
                </div>
              </div>
            </div>
            <div
              class="flex items-center justify-center bg-blue-100 rounded-full w-10 h-10"
            >
              <BaseIcon
                :path="mdiStar"
                :size="32"
                class="flex justify-center items-center"
              />
            </div>
          </div>
        </div>

        <!-- 2 -->
        <div
          class="flex flex-col items-start gap-8 bg-gray-10 rounded-lg card-shadow p-8"
        >
          <span class="text-xl"> Всего оценок от пользователей </span>

          <div class="flex flex-col justify-between w-full">
            <div>
              <span class="block font-medium mb-3 text-lg"> Учреждение </span>
              <div
                class="flex flex-row gap-4 font-medium text-3xl text-red-500"
              >
                <!-- {{ rating.institutionRatingAmount }} -->
                {{ 30 }}
              </div>
            </div>
          </div>

          <div class="flex flex-col justify-between w-full">
            <div>
              <span class="block font-medium mb-3 text-lg">
                Все услуги учреждения
              </span>
              <div
                class="flex flex-row gap-4 font-medium text-3xl text-red-500"
              >
                {{ 45 }}
              </div>
            </div>
          </div>
        </div>

        <!-- 3 - график -->
        <div class="flex flex-col gap-2 bg-gray-10 rounded-lg card-shadow p-4">
          <TabView>
            <TabPanel header="Оценки учреждения">
              <StatisticsChartDoughnut />
            </TabPanel>
            <TabPanel header="Оценки услуг">
              <StatisticsChartDoughnut />
            </TabPanel>
          </TabView>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-4">
        <!-- <div
          class="flex flex-col gap-8 items-center justify-center bg-gray-10 rounded-lg card-shadow p-8"
        >
          <div class="flex flex-row items-center justify-between w-full px-8">
            <span class="block font-medium mb-3 text-lg">
              Количество комментариев учреждения
            </span>
            <div
              class="text-green-500 font-medium text-3xl bg-gray-10 rounded-full shadow p-4"
            >
              {{ 12 }}
            </div>
          </div>

          <div class="flex flex-row items-center justify-between w-full px-8">
            <span class="block font-medium mb-3 text-lg w-2/3">
              Суммарное количество комментариев услуг учреждения
            </span>
            <div
              class="text-green-500 font-medium text-3xl bg-gray-10 rounded-full shadow p-4"
            >
              {{ 18 }}
            </div>
          </div>
        </div> -->

        <div
          class="col-span-2 flex flex-col items-center justify-center bg-gray-10 rounded-lg card-shadow p-4 gap-4"
        >
          <div class="flex flex-row items-center gap-4">
            <span class="flex mx-auto text-primary-700 font-semibold text-xl">
              Топ 5 услуг
            </span>
            <!-- по посещениям // по оценкам // по заявкам -->
            <!-- <div class="flex flex-col gap-1"> -->
            <Dropdown
              v-model="selectedTypeOfRating"
              :options="typesOfRating"
              option-label="name"
              :placeholder="typesOfRating[0].name"
              class=""
            />
          </div>
          <div class="grid grid-cols-5 gap-8 py-8">
            <div v-for="(service, index) in services" :key="index">
              <div class="flex flex-row items-center gap-4">
                <div
                  class="flex items-center justify-center text-gray-800 font-medium text-xl bg-gray-10 rounded-full shadow p-2 w-8 h-8"
                >
                  {{ index + 1 }}
                </div>
                <nuxt-link
                  :to="`/service/${service?.id}`"
                  class="hover:text-primary-600 hover:underline underline-offset-1"
                >
                  {{ service.name }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ПОСЕЩЕНИЕ УЧРЕЖДЕНИЯ -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 mt-12 bg-gray-10 rounded-lg card-shadow text-3xl font-semibold p-4 hover:text-primary-500"
      >
        Посещения
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 py-4">
        <div
          class="flex flex-col gap-4 items-start bg-gray-10 rounded-lg card-shadow p-4"
        >
          <div>
            <span class="block font-medium mb-3 text-lg">
              Все учреждения:
            </span>
            <div class="text-green-500 font-medium text-3xl">
              <!-- {{ totalVisitsOfInstitutionsAll }} -->
              {{ 112 }}
            </div>
          </div>

          <div>
            <span class="block font-medium mb-3 text-lg"> Это учреждение </span>
            <div class="text-green-500 font-medium text-3xl">
              <!-- {{ totalVisitsOfInstitution }} -->
              {{ 43 }}
            </div>
          </div>

          <div class="flex flex-col gap-2 bg-gray-10 rounded-lg">
            <span>
              Количества посещений данного учреждения от общего числа посещений
              всех учреждений в процентах (%)
            </span>
            <ProgressBar
              :value="
                visitsRelation(
                  43, //totalVisitsOfInstitution,
                  112 //totalVisitsOfInstitutionsAll
                )
              "
            >
            </ProgressBar>
          </div>
        </div>

        <div
          class="flex flex-col items-start bg-gray-10 rounded-lg card-shadow p-4"
        >
          <span class="mx-auto"> Посещения за последние 6 месяцев </span>
          <StatisticsChartBasic2 class="w-full" />
        </div>
      </div>
      <!-- ПОСЕЩЕНИЕ СТРАНИЦ УСЛУГ -->
      <!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div
          class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4 w-full"
        >
          Посещение услуг учреждения
          <span> Топ самых популярных </span>

          <StatisticsChartLine class="w-full" />
        </div>

        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <span> 2) Рейтинг в посещаемости </span>
        </div>

        <div class="flex flex-col gap-2 bg-gray-10 rounded-lg shadow p-4">
          Количество посещений по месяцам
        </div>
      </div> -->

      <!-- ЗАЯВКИ НА УСЛУГИ -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 mt-4 bg-gray-10 rounded-lg card-shadow text-3xl font-semibold p-4 mb-4 hover:text-primary-500"
      >
        Заявки на услуги
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <div
          class="flex flex-col items-start bg-gray-10 rounded-lg card-shadow p-8"
        >
          <div class="flex justify-between w-full mb-3">
            <div class="flex flex-col gap-12">
              <div>
                <span class="block font-medium mb-3 text-lg">
                  Всего заявок на "Спортуслуги"
                </span>
                <div class="text-green-500 font-medium text-3xl">{{ 24 }}</div>
              </div>

              <div>
                <span class="block font-medium mb-3 text-lg">
                  Количество заявок у вас:
                </span>
                <div class="text-green-500 font-medium text-3xl">
                  {{ 15 }}
                </div>
              </div>

              <div>
                <span class="block font-medium mb-3 text-lg">
                  Соотношение количества заявок к посещениям вашего учреждения в
                  процентах:
                </span>

                <ProgressBar :value="visitsRelation(15, 43)"> </ProgressBar>
              </div>
            </div>
          </div>
        </div>

        <!-- <div
          class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4 w-full"
        >
          <StatisticsChartLine class="w-full" />
        </div> -->

        <div
          class="col-span-2 flex flex-col items-start bg-gray-10 rounded-lg card-shadow p-8"
        >
          <span class="font-medium text-lg"> Топ 5 услуг по заявкам </span>
          <StatisticsChartBasic class="w-full" />
        </div>

        <!-- <div class="flex flex-col gap-2 bg-gray-10 rounded-lg shadow p-4">
          Количество заявок по месяцам
        </div> -->
      </div>

      <!-- ДЕМОГРАФИЯ -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 mt-4 bg-gray-10 rounded-lg card-shadow text-3xl font-semibold p-4 mb-4 hover:text-primary-500"
      >
        Демографические показатели
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <div
          class="flex flex-col justify-between gap-2 bg-gray-10 rounded-lg card-shadow p-4"
        >
          <span class="text-lg">
            Соотношение полов пользователей, отправивших заявки
          </span>

          <div class="flex flex-row">
            <StatisticsChartPie1 />
            <div class="flex flex-col gap-4 text-sm justify-center">
              <span>Мужчин: {{ 22 }} </span>
              <span>Женщин: {{ 14 }}</span>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col justify-between gap-2 bg-gray-10 rounded-lg card-shadow p-4"
        >
          <span class="text-lg"> Возраст и пол Среднее значение</span>

          <div class="flex flex-row">
            <StatisticsChartPie2 />
            <div class="flex flex-col gap-4 text-sm justify-center">
              <span>Дети: {{ 12 }} </span>
              <span>Взрослые: {{ 20 }}</span>
              <span>Пожилые: {{ 4 }}</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2 bg-gray-10 rounded-lg card-shadow p-8">
          <div class="flex justify-between w-full mb-3">
            <div class="flex flex-col gap-12">
              <div>
                <span class="block font-medium mb-3 text-lg">
                  Самая популярная возрастная группа учреждения:
                </span>
                <div
                  class="flex justify-center text-green-500 font-medium text-3xl"
                >
                  {{ `Взрослые` }}
                </div>
              </div>

              <div>
                <span class="block font-medium mb-3 text-lg">
                  Средний возраст:
                </span>
                <div
                  class="flex justify-center text-green-500 font-medium text-3xl"
                >
                  {{ 24 }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
