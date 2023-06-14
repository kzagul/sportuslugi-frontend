<template>
  <div class="w-full">
    <FormWizard
      :validation-schema="validationSchema"
      :steps="steps"
      @submit="onSubmit"
    >
      <FormStep>
        <h1
          class="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:mb-6 leding-tight dark:text-white"
        >
          Учреждение
        </h1>

        <TabView>
          <TabPanel header="Название учреждения">
            <p>Подключение к существующему учреждению</p>
            <div class="grid gap-5 mb-6">
              <!-- label="Название учреждения или ИНН" -->
              <BaseAutocompliteInput
                name="institution_name"
                placeholder="Введите название"
                :items="company"
              >
                <template #searchItem="result">
                  <div class="text-primary-700 py-[6px] px-4">
                    {{ result.name }}
                  </div>
                </template>
              </BaseAutocompliteInput>
            </div>
          </TabPanel>
          <TabPanel header="ИНН">
            <p>Регистрации нового учреждения</p>
            <div class="grid gap-5 mb-6">
              <!-- label="Название учреждения или ИНН" -->
              <BaseAutocompliteInput
                name="institution_name"
                placeholder="Введите ИНН"
                :items="company"
              >
                <template #searchItem="result">
                  <div class="text-primary-700 py-[6px] px-4">
                    {{ result.name }}
                  </div>
                </template>
              </BaseAutocompliteInput>
            </div>
          </TabPanel>
        </TabView>
      </FormStep>

      <FormStep>
        <h1
          class="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:mb-6 leding-tight dark:text-white"
        >
          Контактное лицо
        </h1>
        <div class="grid gap-5 my-6 sm:grid-cols-2">
          <BaseTextInput
            type="text"
            name="name"
            label="ФИО"
            placeholder="Введите ФИО"
          />
          <BaseTextInput
            type="email"
            name="email"
            label="E-mail"
            placeholder="Введите e-mail адрес"
          />
          <BaseTextInput
            type="password"
            name="password"
            label="Пароль"
            placeholder="*******"
          />
          <BaseTextInput
            type="password"
            name="password_confirmation"
            label="Повторите пароль"
            placeholder="*******"
          />
          <!-- <BaseTextInput
            type="phone"
            name="phone"
            label="Телефон"
            placeholder="+"
          /> -->
        </div>
      </FormStep>

      <FormStep>
        <h1
          class="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:mb-6 leding-tight dark:text-white"
        >
          Подтверждение
        </h1>
        <div class="grid gap-5 my-6">
          <p class="font-light text-gray-500 dark:text-gray-400">
            <span>
              Мы направим вам электронное письмо на почту, которую вы указали
              при регистрации.
            </span>
            <span>
              Далее вам необходимо будет подтвердить вашу принадлежность к
              учреждению, выполнив инструкцию предложенную в письме.
            </span>
          </p>
          <!-- <div class="flex my-4 space-x-2 sm:space-x-4 md:my-6">
            При нажатие на клавишу
          </div>
          <p
            class="p-4 mb-4 text-sm text-gray-500 rounded-lg bg-gray-10 dark:text-gray-400 md:mb-6 dark:bg-gray-800"
          >
            Make sure to keep this window open while check your inbox.
          </p> -->
        </div>
      </FormStep>
    </FormWizard>
    <div class="text-sm mt-6 font-medium text-gray-500 dark:text-gray-400">
      Уже есть аккаунт?
      <NuxtLink
        to="/login"
        class="text-primary-700 hover:underline dark:text-primary-500"
      >
        Войти
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import * as yup from "yup";
import { boolean, ref as yupRef, string } from "yup";
// import AutocompliteInput from "~/components/base/AutocompliteInput";
// import TextInput from "~/components/base/TextInput";
import { useUserStore } from "~~/stores/user";
import { useInstitutionStore } from "~~/stores/institution";

const userStore = useUserStore();
const institutionStore = useInstitutionStore();

const props = defineProps({
  company: {
    type: Object,
  },
});

const steps = [
  { step: 1, name: "Организация" },
  { step: 2, name: "Контактное лицо" },
  { step: 3, name: "Подтвердить" },
];

const confirmLenght = 6;
const divs = ref([]);

const rePhoneNumber =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validationSchema = [
  yup.object({
    institution_name: yup.string().required("Обязательно"),
  }),
  yup.object({
    name: string().required("Обязательно"),
    // phone: string().test("phone", "Не верный формат телефона", (value) =>
    //   rePhoneNumber.test(value)
    // ),
    email: string()
      .required("Обязательно")
      .email("Укажите валидный email")
      .label("Email"),
    password: string().required("Введите пароль").label("Ваш пароль"),
    password_confirmation: string()
      .required("Повторите пароль")
      .oneOf([yupRef("password")], "Пароли не совпадают"),
  }),
  // yup.object({
  //   confirm: string().required("код не введен"),
  // }),
];

const { sendModeratorVerificationWaitMail } = useSendMail();

/**
 * Only Called when the last step is submitted
 */
async function onSubmit(formData) {
  // Создать новое учреждение
  await institutionStore.postInstitution(formData.institution_name);

  console.log(JSON.stringify(formData, null, 2));
  console.log("org form submit eeeee");

  // Зарегестрировать модератора
  await userStore.handleRegisterModerator(formData);
  // institutionStore.updateInstitution(
  //   props.company[0].id,
  //   "hello",
  //   formData.email
  // );

  // Отправить EMAIL
  sendModeratorVerificationWaitMail(
    formData.email,
    formData.name,
    formData.institution_name
  );
  // sendTechMail(inputTextValue, textAreaValue, user.value.email);

  console.log("props.company");
  console.log(props.company);
  console.log("formData");
  console.log(formData);
}

function focusNextInput(el, prevId, nextId) {
  console.log(el.length);
  if (nextId >= confirmLenght) {
    document.getElementById("code-" + prevId).focus();
  } else {
    document.getElementById("code-" + nextId).focus();
  }
}
</script>

<style scoped></style>
