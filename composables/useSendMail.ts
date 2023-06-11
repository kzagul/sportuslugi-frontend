export const useSendMail = () => {
  // + Тестовый mail
  async function sendMailDemo(
    titleValue: string,
    bodyValue: string,
    emailValue: string
  ) {
    try {
      await fetchApi("/send-mail-demo", {
        method: "GET",
        params: {
          title: titleValue,
          body: bodyValue,
          email: emailValue,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  // + Ожидание подтверждения модератора
  async function sendModeratorVerificationWaitMail(
    userEmailValue: string,
    userNameValue: string,
    institutionNameValue: string
  ) {
    try {
      await fetchApi("/send-mail-moderator-verification-wait", {
        method: "GET",
        params: {
          userEmail: userEmailValue,
          userName: userNameValue,
          institutionName: institutionNameValue,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  // + Подтверждение модератора mail
  async function sendModeratorVerificationMail(
    titleValue: string,
    bodyValue: string,
    emailValue: string
  ) {
    try {
      await fetchApi("/send-mail-moderator-verification", {
        method: "GET",
        params: {
          title: titleValue,
          body: bodyValue,
          email: emailValue,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  // + Письмо учреждению
  async function sendInstitutionMessageMail(
    topicValue: string,
    phoneValue: string,
    bodyValue: string,
    emailValue: string
  ) {
    try {
      await fetchApi("/send-mail-message-institution", {
        method: "GET",
        params: {
          topic: topicValue,
          phone: phoneValue,
          body: bodyValue,
          email: emailValue,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  // - Ответ от учреждения
  async function sendInstitutionMessageAnswerMail(
    titleValue: string,
    bodyValue: string,
    emailValue: string
  ) {
    try {
      await fetchApi("/send-mail-demo", {
        method: "GET",
        params: {
          title: titleValue,
          body: bodyValue,
          email: emailValue,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  // - Заявка на услугу учреждения

  // пользователь - имя, Пол, возраст, email
  //
  async function sendServiceRequestMail(
    nameValue: string,
    genderValue: string,
    ageValue: string,
    titleValue: string,
    phoneValue: string,
    emailUserValue: string,
    emailInstitutionValue: string,
    serviceNameValue: string,
    serviceLinkValue: string,
    bodyValue: string
  ) {
    try {
      await fetchApi("/send-mail-request-service", {
        method: "GET",
        params: {
          name: nameValue,
          gender: genderValue,
          age: ageValue,
          title: titleValue,
          phone: phoneValue,
          emailUser: emailUserValue,
          emailInstitution: emailInstitutionValue,
          serviceName: serviceNameValue,
          serviceLink: serviceLinkValue,
          body: bodyValue,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  // - Ответ на заявку на услугу учреждения
  async function sendServiceRequestAnswerMail(
    titleValue: string,
    bodyValue: string,
    emailValue: string
  ) {
    try {
      await fetchApi("/send-mail-request-service", {
        method: "GET",
        params: {
          title: titleValue,
          body: bodyValue,
          email: emailValue,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  // - Отправка технического письма
  async function sendTechMail(
    titleValue: string,
    bodyValue: string,
    emailValue: string
  ) {
    try {
      await fetchApi("/send-mail-tech", {
        method: "GET",
        params: {
          title: titleValue,
          body: bodyValue,
          email: emailValue,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  // Ответ на техническое письмо
  async function sendTechAnswerMail(
    titleValue: string,
    bodyValue: string,
    emailValue: string
  ) {
    try {
      await fetchApi("/send-mail-tech", {
        method: "GET",
        params: {
          title: titleValue,
          body: bodyValue,
          email: emailValue,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  return {
    sendMailDemo,
    sendModeratorVerificationWaitMail,
    sendModeratorVerificationMail,
    sendInstitutionMessageMail,
    sendInstitutionMessageAnswerMail,
    sendServiceRequestMail,
    sendServiceRequestAnswerMail,
    sendTechMail,
    sendTechAnswerMail,
  };
};
