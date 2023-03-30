<script setup>
import { useOpenAIStore } from "~/stores/openai";

const openAIStore = useOpenAIStore();

const { fetchOpenAIAnswer } = openAIStore;

const questionInput = ref("");
const favoriteSportsInput = ref("");
const diseaseInput = ref("");

const openAIAnswer = computed(() => {
  return openAIStore.getOpenAIAnswer;
})
</script>

<template>
  <div>
    <main class="main">
      <form
        @submit.prevent="
          fetchOpenAIAnswer(questionInput, favoriteSportsInput, diseaseInput)
        "
      >
        <!-- <div> -->
        <input
          type="text"
          name="animal"
          placeholder="Enter an question"
          :v-model="questionInput"
        />
        <input
          type="text"
          name="animal"
          placeholder="Enter favorite Sports"
          :v-model="favoriteSportsInput"
        />
        <input
          type="text"
          name="animal"
          placeholder="Enter an desease"
          :v-model="diseaseInput"
        />
        <input type="submit" value="Generate answer" />
      </form>
      <div class="result">{{ openAIAnswer }}</div>
    </main>
  </div>
</template>
