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
      // questionValue: string,
      freeTimeValue: string,
      favoriteSportsValue: string,
      physicalActivityValue: string,
      wishesValue: string,
      diseaseValue: string,
      ageValue: string,
      genderValue: string,
      accessibleSportsValue: string
    ) {
      try {
        const config = useRuntimeConfig();
        const openaiUrl = config.public.openaiUrl;
        const response: any = await $fetch("/message", {
          method: "post",
          baseURL: openaiUrl,
          body: {
            // question: questionValue,
            freeTime: freeTimeValue,
            favoriteSports: favoriteSportsValue,
            wishes: wishesValue,
            physicalActivity: physicalActivityValue,
            disease: diseaseValue,
            age: ageValue,
            gender: genderValue,
            accessibleSports: accessibleSportsValue,
          },
        });

        const data = await response;
        this.openAIAnswer = data?.choices[0]?.text;
        // this.openAIAnswer = data;
        console.log("11111");
        console.log(data);
        console.log("22222");
        console.log(data?.choices[0]?.text);

        if (response.status !== 200) {
          Error(`Request failed with status ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
