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
    .map((sport) => (sport = sport.name))
    .join(", ")
    .toLowerCase();
});

console.log(sports.value);
// console.log(filterSports());

const openAIStore = useOpenAIStore();

const { fetchOpenAIAnswer } = openAIStore;

const question = ref({
  questionInput: "",
  favoriteSportsInput: "Воллейбол",
  diseaseInput: "Плоскостопие",
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

function submitOpenAI(
  questionInput,
  favoriteSportsInput,
  diseaseInput,
  accessibleSports
) {
  fetchOpenAIAnswer(
    questionInput,
    favoriteSportsInput,
    diseaseInput,
    accessibleSports
  );
  checkAnswer();
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
    .filter((item1) => filteredSports.value.includes(item1))
    .filter((item) => item !== "");

  // resAnswer = resAnswer.map((str) =>
  //   str.endsWith(".") ? str.slice(0, -1) : str
  // );
  return resAnswer;
}

// return filteredSports.foreach(
//       (elementSport) => elementAnswer === elementSport
//     );
</script>

<template>
  <div>
    <div>{{ filteredSports }}</div>
    <main class="main">
      <form
        @submit.prevent="
          submitOpenAI(
            question.questionInput,
            question.favoriteSportsInput,
            question.diseaseInput,
            question.accessibleSports
          )
        "
      >
        <div class="flex flex-col gap-4 py-8">
          <div class="flex flex-col gap-4 justify-center w-96">
            <div class="flex flex-col">
              <label
                for="first-name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Введите вопрос</label
              >
              <input
                v-model="question.questionInput"
                type="text"
                name="animal"
                class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter an question"
              />
            </div>

            <div class="flex flex-col">
              <label
                for="first-name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Перечисли свои любимые виды спорта</label
              >
              <input
                v-model="question.favoriteSportsInput"
                type="text"
                name="animal"
                class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="..."
              />
            </div>

            <div class="flex flex-col">
              <label
                for="first-name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Имеются ли у вас заболевания или ограничения к занятию спортом?
              </label>
              <input
                v-model="question.diseaseInput"
                type="text"
                name="animal"
                class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="..."
              />
            </div>

            <div class="flex flex-col">
              <label
                for="first-name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Что тебе нравится делать в свободное время?</label
              >
              <input
                id="first-name"
                type="text"
                name="first-name"
                class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="..."
              />
            </div>

            <div class="flex flex-col">
              <label
                for="first-name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Какой уровень физической активности тебе комфортен?</label
              >
              <input
                id="first-name"
                type="text"
                name="first-name"
                class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="..."
              />
            </div>

            <div class="flex flex-col">
              <label
                for="first-name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Что ты бы хотел достичь благодаря спорту?</label
              >
              <input
                id="first-name"
                type="text"
                name="first-name"
                class="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="..."
              />
            </div>
          </div>

          <!-- <input type="submit" value="Generate answer" /> -->

          <button
            type="submit"
            class="px-4 py-2 text-sm font-medium text-white w-64 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Поиск
          </button>
        </div>
      </form>
      <div class="result">{{ openAIAnswer }}</div>
    </main>
  </div>
</template>
