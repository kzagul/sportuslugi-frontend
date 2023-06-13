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
</script>

<template>
  <NuxtLayout name="moderator">
    <div class="py-16">
      <!-- РЕЙТИНГИ И ОЦЕНКИ -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 mt-4 bg-gray-10 rounded-lg shadow text-3xl font-semibold p-4 mb-4"
      >
        Рейтинги и оценки
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <!-- 1 -->
        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-8">
          <div class="flex justify-between w-full mb-3">
            <div class="flex flex-col gap-12">
              <div>
                <span class="block font-medium mb-3 text-lg">
                  Средняя оценка учреждения
                </span>
                <div class="text-green-500 font-medium text-3xl">
                  {{ rating.institutionMedianRating }}
                </div>
              </div>

              <div>
                <span class="block font-medium mb-3 text-lg">
                  Средняя оценка всех услуг учреждения
                </span>
                <div class="text-green-500 font-medium text-3xl">
                  {{ 4.8 }}
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
          class="flex flex-col items-start gap-8 bg-gray-10 rounded-lg shadow p-8"
        >
          <span class="text-xl"> Всего оценок от пользователей </span>

          <div class="flex flex-col justify-between w-full">
            <div>
              <span class="block font-medium mb-3 text-lg"> Учреждение </span>
              <div
                class="flex flex-row gap-4 font-medium text-3xl text-red-500"
              >
                {{ rating.institutionRatingAmount }}
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
                {{ rating.institutionRatingAmount }}
              </div>
            </div>
          </div>
        </div>
        <!-- 3 - график -->
        <div class="flex flex-col gap-2 bg-gray-10 rounded-lg shadow p-4">
          <span class="flex mx-auto text-lg">Оценки учреждения</span>
          <StatisticsChartDoughnut />
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-4">
        <div
          class="flex flex-col gap-8 items-start bg-gray-10 rounded-lg shadow p-8"
        >
          <div class="flex flex-row items-center justify-between w-full px-8">
            <span class="block font-medium mb-3 text-lg">
              Количество комментариев учреждения
            </span>
            <div
              class="text-green-500 font-medium text-3xl bg-gray-10 rounded-full shadow p-4"
            >
              {{ 13 }}
            </div>
          </div>

          <div class="flex flex-row items-center justify-between w-full px-8">
            <span class="block font-medium mb-3 text-lg w-2/3">
              Суммарное количество комментариев услуг учреждения
            </span>
            <div
              class="text-green-500 font-medium text-3xl bg-gray-10 rounded-full shadow p-4"
            >
              {{ 22 }}
            </div>
          </div>
        </div>

        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <span class="flex mx-auto text-lg">Топ 5 популярных услуг</span>
          по посещениям // по оценкам // по заявкам
          <span
            v-for="(service, index) in getInstitutionOfCurrentUser?.services"
            :key="index"
          >
            {{ service.name }}
          </span>
        </div>
      </div>

      <!-- ПОСЕЩЕНИЕ УЧРЕЖДЕНИЯ -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 mt-12 bg-gray-10 rounded-lg shadow text-3xl font-semibold p-4"
      >
        Посещения
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 py-4">
        <div
          class="flex flex-col gap-4 items-start bg-gray-10 rounded-lg shadow p-4"
        >
          <div>
            <span class="block font-medium mb-3 text-lg">
              Все учреждения:
            </span>
            <div class="text-green-500 font-medium text-3xl">
              {{ totalVisitsOfInstitutionsAll }}
            </div>
          </div>

          <div>
            <span class="block font-medium mb-3 text-lg"> Это учреждение </span>
            <div class="text-green-500 font-medium text-3xl">
              {{ totalVisitsOfInstitution }}
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
                  totalVisitsOfInstitution,
                  totalVisitsOfInstitutionsAll
                )
              "
            >
            </ProgressBar>
          </div>
        </div>

        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <StatisticsChartBasic class="w-full" />
        </div>
      </div>
      <!-- ПОСЕЩЕНИЕ СТРАНИЦ УСЛУГ -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div
          class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4 w-full"
        >
          <!-- Посещение услуг учреждения
          <span> Топ самых популярных </span> -->

          <StatisticsChartLine class="w-full" />
        </div>

        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <span> 2) Рейтинг в посещаемости </span>
        </div>

        <div class="flex flex-col gap-2 bg-gray-10 rounded-lg shadow p-4">
          Количество посещений по месяцам
        </div>
      </div>

      <!-- ЗАЯВКИ НА УСЛУГИ -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 mt-12 bg-gray-10 rounded-lg shadow text-xl font-semibold p-4"
      >
        Заявки на услуги
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-8">
          <div class="flex justify-between w-full mb-3">
            <div class="flex flex-col gap-12">
              <div>
                <span class="block font-medium mb-3 text-lg">
                  Средняя оценка учреждения
                </span>
                <div class="text-green-500 font-medium text-3xl">
                  {{ rating.institutionMedianRating }}
                </div>
              </div>

              <div>
                <span class="block font-medium mb-3 text-lg">
                  Средняя оценка всех услуг учреждения
                </span>
                <div class="text-green-500 font-medium text-3xl">
                  {{ 4.8 }}
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

        <div
          class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4 w-full"
        >
          <!-- Посещение услуг учреждения
          <span> Топ самых популярных </span> -->

          <StatisticsChartLine class="w-full" />
        </div>

        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <StatisticsChartBasic class="w-full" />
        </div>

        <!-- <div class="flex flex-col gap-2 bg-gray-10 rounded-lg shadow p-4">
          Количество заявок по месяцам
        </div> -->
      </div>

      <!-- ДЕМОГРАФИЯ -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 mt-12 bg-gray-10 rounded-lg shadow text-xl font-semibold p-4"
      >
        Демографические показатели
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <div class="flex flex-col gap-2 bg-gray-10 rounded-lg shadow p-4">
          Соотношение полов пользователей, отправивших заявки
          <StatisticsChartPie1 />
        </div>

        <div class="flex flex-col gap-2 bg-gray-10 rounded-lg shadow p-4">
          Возраст и пол Среднее значение
          <StatisticsChartPie2 />
        </div>

        <div class="flex flex-col gap-2 bg-gray-10 rounded-lg shadow p-4">
          <div class="flex justify-between w-full mb-3">
            <div class="flex flex-col gap-12">
              <div>
                <span class="block font-medium mb-3 text-lg">
                  Самая популярная возрастная группа у учреждения
                </span>
                <div class="text-green-500 font-medium text-3xl">
                  {{ `Взрослые` }}
                </div>
              </div>

              <div>
                <span class="block font-medium mb-3 text-lg">
                  Средний возраст
                </span>
                <div class="text-green-500 font-medium text-3xl">
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
