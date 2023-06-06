<script setup lang="ts">
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

// Подбор услуг
</script>

<template>
  <div>
    <div class="flex flex-col">
      <h3 class="text-3xl font-semibold py-4">Карта рекомендаций</h3>
      <p class="mb-4 text-gray-500 sm:text-xl w-1/2">
        Воспользуйтесь умным подбором услуг
      </p>
      <p class="mb-4 text-gray-500 sm:text-xl w-1/2">
        Тут описание бла бла бла бла аалаллалалалала бла бла бла бла
        аалаллалалалала бла бла бла бла аалаллалалалала
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
        <div class="flex flex-row gap-4 py-8">
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

          <div class="flex flex-col justify-start gap-8">
            <div>
              <button
                class="h-10 max-w-max px-4 py-2 text-sm font-medium rounded-sm text-white w-64 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Подкрепить данные из профиля
              </button>
              <span> * Возраст, пол </span>
            </div>

            <button
              type="submit"
              class="h-10 w-full px-4 py-2 text-sm font-medium rounded-sm text-white w-64 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Поиск
            </button>

            <button
              class="h-10 w-full px-4 py-2 text-sm font-medium rounded-sm text-white w-64 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Подобрать услуги
            </button>
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
