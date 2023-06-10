import { defineStore } from "pinia";

export const useMailStore = defineStore("mail", {
  //   state: () => ({
  //     openAIAnswer: null,
  //   }),
  //   getters: {
  //     getOpenAIAnswer(): any {
  //       return this.openAIAnswer;
  //     },
  //   },

  actions: {
    async sendMailDemo(
      titleValue: string,
      bodyValue: string,
      emailValue: string
    ) {
      //   console.log("Привеееееет");

      // try {
      await fetchApi("/send-mail-demo", {
        method: "GET",
        params: {
          title: titleValue,
          body: bodyValue,
          email: emailValue,
        },
        // body: {
        //   title: titleValue,
        //   body: bodyValue,
        //   email: emailValue,
        // },
      });
      // } catch (error) {
      //   console.error(error);
      // }
    },
  },
});
