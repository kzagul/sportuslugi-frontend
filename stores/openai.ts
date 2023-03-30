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
      question: string,
      favoriteSports: string,
      disease: string
    ) {
      try {
        const config = useRuntimeConfig();
        const openaiUrl = config.public.openaiUrl;
        const response: any = await $fetch("/message", {
          method: "post",
          baseURL: openaiUrl,
          body: {
            question,
            favoriteSports,
            disease,
          },
        });

        const data = await response;
        this.openAIAnswer = data.choices[0].text;
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
