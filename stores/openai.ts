import { defineStore } from "pinia";

export const useOpenAIStore = defineStore("openai", {
  state: () => ({
    openAIAnswer: null,
  }),
  getters: {
    getOpenAIAnswer(): any {
      return this.openAIAnswer;
    },
  },
  actions: {
    async fetchOpenAIAnswer(
      questionValue: string,
      favoriteSportsValue: string,
      diseaseValue: string
    ) {
      try {
        const config = useRuntimeConfig();
        const openaiUrl = config.public.openaiUrl;
        const response: any = await $fetch("/message", {
          method: "post",
          baseURL: openaiUrl,
          body: {
            question: questionValue,
            favoriteSports: favoriteSportsValue,
            disease: diseaseValue,
          },
        });

        const data = await response;
        this.openAIAnswer = data?.choices[0].text;
        console.log(data);

        if (response.status !== 200) {
          Error(`Request failed with status ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
