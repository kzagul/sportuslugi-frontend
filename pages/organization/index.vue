<script lang="ts" setup>
import { mdiStar } from "@mdi/js";
import { useStatisticsStore } from "~~/stores/statistics";
definePageMeta({
  middleware: ["moderator-only"],
  layout: false,
});

const statisticsStore = useStatisticsStore();

const rating = computed(() => {
  return statisticsStore.getStatistics.rating;
});
</script>

<template>
  <NuxtLayout name="moderator">
    <div class="py-16">
      <h3 class="text-xl font-semibold dark:text-white py-4">
        Рейтинг учреждения
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <div class="flex justify-between w-full mb-3">
            <div>
              <span class="block font-medium mb-3"
                >Средняя оценка учреждения</span
              >
              <div class="font-medium text-3xl">
                {{ rating.institutionMedianRating }}
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
          <!-- <span class="text-green-500 font-medium">24 new </span>
          <span class="text-sm">since last visit</span> -->
        </div>

        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <div class="flex flex-col justify-between w-full mb-3">
            <div>
              <span class="block font-medium mb-3">Лучшая оценка</span>
              <div class="flex flex-row gap-4 font-medium text-3xl">
                {{ rating.institutionMaxRating }}
                <div class="flex justify-center">
                  <Rating
                    v-model="rating.institutionMaxRating"
                    :cancel="false"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div>
              <span class="block font-medium mb-3">Худшая оценка</span>
              <div class="flex flex-row gap-4 font-medium text-3xl">
                {{ rating.institutionMinRating }}
                <div class="flex justify-center">
                  <Rating
                    v-model="rating.institutionMinRating"
                    :cancel="false"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div>
              <span class="block font-medium mb-3"
                >Всего оценок от пользователей</span
              >
              <div class="flex flex-row gap-4 font-medium text-3xl">
                {{ rating.institutionRatingAmount }}
              </div>
            </div>
          </div>
          <!-- <span class="text-green-500 font-medium">24 new </span>
          <span class="text-sm">since last visit</span> -->
        </div>

        <StatisticsChartDoughnut />
      </div>

      <!-- Рейтинг услуг -->

      <h3 class="text-xl font-semibold dark:text-white py-4">
        Рейтинг услуг учреждения
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <div class="flex justify-between w-full mb-3">
            <div>
              <span class="block font-medium mb-3"
                >Средняя оценка учреждения</span
              >
              <div class="font-medium text-3xl">
                {{ rating.institutionMedianRating }}
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
          <!-- <span class="text-green-500 font-medium">24 new </span>
          <span class="text-sm">since last visit</span> -->
        </div>

        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <div class="flex justify-between w-full mb-3">
            <div>
              <span class="block font-medium mb-3"
                >Наиболее высокая оценка учреждения</span
              >
              <div class="flex flex-row gap-4 font-medium text-3xl">
                {{ rating.institutionMaxRating }}
                <div class="flex justify-center">
                  <Rating
                    v-model="rating.institutionMaxRating"
                    :cancel="false"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- <span class="text-green-500 font-medium">24 new </span>
          <span class="text-sm">since last visit</span> -->
        </div>

        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <div class="flex justify-between w-full mb-3">
            <div>
              <span class="block font-medium mb-3"
                >Наиболее низкая оценка учреждения</span
              >
              <div class="flex flex-row gap-4 font-medium text-3xl">
                {{ rating.institutionMinRating }}
                <div class="flex justify-center">
                  <Rating
                    v-model="rating.institutionMinRating"
                    :cancel="false"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- <span class="text-green-500 font-medium">24 new </span>
          <span class="text-sm">since last visit</span> -->
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 py-4">
        <!-- <div class="card">
          <Chart
            type="line"
            :data="chartData"
            :options="chartOptions"
            class="h-30rem"
          />
        </div> -->
        <StatisticsChartBar />
      </div>
    </div>
  </NuxtLayout>
</template>
