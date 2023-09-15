<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import { useOpenAIStore } from "~/stores/openai";

import { useSportStore } from "~~/stores/sport";

const sportStore = useSportStore();

await sportStore.fetchSports();

const sports = computed(() => {
  return sportStore.getSports;
});

const filteredSports = computed(() => {
  return sports.value
    .map((sport: any) => (sport = sport.name))
    .join(", ")
    .toLowerCase();
});

const selectedSports = ref();

const fileredSelectedSports = computed(() => {
  const array = selectedSports.value.map((item: any) => item.name);
  return array.toString();
});

console.log(sports.value);
// console.log(filterSports());

const openAIStore = useOpenAIStore();

const { fetchOpenAIAnswer } = openAIStore;

const question = ref({
  freeTimeInput: "",
  favoriteSportsInput: "",
  wishesInput: "",
  physicalActivityInput: "",

  diseaseInput: "",

  ageInput: "",
  genderInput: "",
  accessibleSports: filteredSports.value,
});

console.log("teeeest");
console.log(question.value.accessibleSports);

// const questionInput = ref("");
// const favoriteSportsInput = ref("");
// const diseaseInput = ref("");

const openAIAnswer = computed(() => {
  return openAIStore.getOpenAIAnswer;
});

// const arrayOpenAIAnswer = computed(() => {
//   return openAIAnswer.value;
// });

const isRecommendationSubmited = ref(false);

function submitOpenAI(
  freeTimeInput: any,
  favoriteSportsInput: any,
  wishesInput: any,
  physicalActivityInput: any,
  diseaseInput: any,
  ageInput: any,
  genderInput: any,
  accessibleSports: any
) {
  fetchOpenAIAnswer(
    freeTimeInput,
    favoriteSportsInput,
    wishesInput,
    physicalActivityInput,
    diseaseInput,
    ageInput,
    genderInput,
    accessibleSports
  );
  checkAnswer();

  isRecommendationSubmited.value = true;
}

function checkAnswer() {
  setTimeout(() => {
    console.log("openAIAnswer");
    console.log(findSportsFromAnswer());
  }, 5000);
}

// function findSportsFromAnswer() {
//   return openAIAnswer.value
//     .split(" ")
//     .map((elementAnswer) => filteredSports.value.includes(elementAnswer));
// }

function findSportsFromAnswer() {
  let resAnswer = openAIAnswer.value.toLowerCase();

  resAnswer = resAnswer.endsWith(".") ? resAnswer.slice(0, -1) : resAnswer;
  resAnswer = resAnswer
    .replace(/,/g, " ")
    .split(" ")
    .filter((item1: any) => filteredSports.value.includes(item1))
    .filter((item: any) => item !== "");

  // resAnswer = resAnswer.map((str) =>
  //   str.endsWith(".") ? str.slice(0, -1) : str
  // );
  return resAnswer;
}

// return filteredSports.foreach(
//       (elementSport) => elementAnswer === elementSport
//     );

const physicalActivity = ref();
const physicalActivities = ref([
  { name: "Низкая" },
  { name: "Средняя" },
  { name: "Высокая" },
]);

const toast = useToast();

const showRecommendButtons = ref(false);

function sendRecommendationMark() {
  showRecommendButtons.value = !showRecommendButtons.value;
  toast.add({
    severity: "info",
    summary: "Ваша оценка отправлена",
    life: 3000,
  });
}
// Подбор услуг
</script>

<template>
  <div>
    <Toast />
    <div class="flex flex-col">
      <h3 class="text-3xl font-semibold py-4">Карта рекомендаций</h3>
      <p class="mb-4 text-gray-500 sm:text-xl w-1/2">
        Воспользуйтесь умным подбором услуг!
      </p>
      <p class="mb-4 text-gray-500 sm:text-xl w-1/2">
        Заполните в предложенных полях информацию о себе, поля не обязательные,
        но чем подробнее описание, тем более точный ответ!
      </p>
    </div>
    <main class="main">
      <form
        @submit.prevent="
          submitOpenAI(
            freeTimeInput,
            fileredSelectedSports,
            physicalActivity?.name,
            question.wishesInput,
            question.diseaseInput,
            '25',
            'женский',
            question.accessibleSports
          )
        "
      >
        <div class="flex flex-row justify-between gap-2 py-8">
          <div class="flex flex-col gap-4 justify-center w-8/12">
            <!-- 1 -->
            <div class="flex flex-col">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Что Вам нравится делать в свободное время?</label
              >
              <InputText v-model="question.freeTimeInput" type="text" />
            </div>

            <!-- 2 -->
            <div class="flex flex-col">
              <label
                for="first-name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Перечислите свои любимые виды спорта</label
              >

              <MultiSelect
                v-model="selectedSports"
                :options="sports"
                filter
                option-label="name"
                placeholder="Выберите виды спорта"
                class="w-full md:w-20rem"
              />
            </div>

            <!-- 3 -->
            <div class="flex flex-col">
              <label
                for="first-name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Какой уровень физической активности Вам комфортен?</label
              >

              <Dropdown
                v-model="physicalActivity"
                :options="physicalActivities"
                option-label="name"
                placeholder="Выберите вариант"
                class="w-full md:w-14rem"
              />
            </div>

            <!-- 4 -->
            <div class="flex flex-col">
              <label
                for="first-name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Что бы Вы хотели достичь благодаря спорту?</label
              >
              <!-- <input
                v-model="question.wishesInput"
                type="text"
                name="animal"
                class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder=""
              /> -->
              <InputText v-model="question.wishesInput" type="text" />
            </div>

            <!-- 5 -->
            <div class="flex flex-col">
              <label
                for="first-name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Имеются ли у Вас заболевания или ограничения к занятию спортом?
              </label>

              <InputText v-model="question.diseaseInput" type="text" />
              <!-- <input
                v-model="question.diseaseInput"
                type="text"
                name="animal"
                class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="..."
              /> -->
            </div>
          </div>

          <!-- <input type="submit" value="Generate answer" /> -->

          <div
            class="flex flex-col justify-start gap-8 bg-white border border-gray-200 rounded-lg shadow-sm p-4 mt-6"
          >
            <div class="flex flex-col">
              <button
                class="h-12 w-full px-4 py-2 text-base font-medium rounded-sm text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Подкрепить данные из профиля
              </button>
              <span> * Возраст, пол </span>
            </div>

            <button
              type="submit"
              class="h-12 w-full px-4 py-2 text-base font-medium rounded-sm text-white w-64 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              @click="showRecommendButtons = !showRecommendButtons"
            >
              Подобрать услуги
            </button>

            <!-- <div
              v-if="showRecommendButtons"
              class="flex flex-col gap-2 items-center"
            >
              <span class="text-lg">Оцените, как вам подборка?</span>
              <div class="flex flex-col flex-wrap gap-2 text-base w-full">
                <Button
                  label="Не понравилась"
                  severity="danger"
                  @click="sendRecommendationMark"
                />
                <Button
                  label="Понравилась"
                  severity="success"
                  @click="sendRecommendationMark"
                />
              </div>
            </div> -->
          </div>
        </div>
      </form>
      <div class="result">{{ openAIAnswer }}</div>

      <div v-if="isRecommendationSubmited">
        <TableService />
      </div>
    </main>
    <div class="flex justify-center">
      <Message class="fixed bottom-0" severity="warn">
        Необходима консультация со специалистом!
      </Message>
    </div>
  </div>
</template>
