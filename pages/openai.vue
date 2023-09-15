<script setup>
import { useOpenAIStore } from "~/stores/openai";

const openAIStore = useOpenAIStore();

const { fetchOpenAIAnswer } = openAIStore;

const question = ref({
  questionInput: "",
  favoriteSportsInput: "football",
  diseaseInput: "flat feet",
});
// const questionInput = ref("");
// const favoriteSportsInput = ref("");
// const diseaseInput = ref("");

const openAIAnswer = computed(() => {
  return openAIStore.getOpenAIAnswer;
});
</script>

<template>
  <div>
    <main class="main">
      <form
        @submit.prevent="
          fetchOpenAIAnswer(
            question.questionInput,
            question.favoriteSportsInput,
            question.diseaseInput
          )
        "
      >
        <!-- <div> -->
        <input
          v-model="question.questionInput"
          type="text"
          name="animal"
          placeholder="Enter an question"
        />
        <input
          v-model="question.favoriteSportsInput"
          type="text"
          name="animal"
          placeholder="Enter favorite Sports"
        />
        <input
          v-model="question.diseaseInput"
          type="text"
          name="animal"
          placeholder="Enter an desease"
        />
        <input type="submit" value="Generate answer" />
      </form>
      <div class="result">{{ openAIAnswer }}</div>
    </main>

    <CardRecommendation />
  </div>
</template>
