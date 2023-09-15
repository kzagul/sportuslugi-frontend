<template>
  <div class="w-full">
    <ol
      class="flex items-center mb-6 text-sm font-medium text-center text-gray-500 dark:text-gray-400 lg:mb-12 sm:text-base"
    >
      <li
        v-for="(item, index) in steps"
        :key="index"
        class="flex items-center cursor-pointer after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
      >
        <div
          class="flex items-center transition delay-200 sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
          :class="
            item.step <= currentStep
              ? 'text-primary-600 dark:text-primary-500'
              : ''
          "
        >
          <svg
            v-if="item.step <= currentStep"
            class="w-4 h-4 mr-2 sm:mb-2 sm:w-6 sm:h-6 sm:mx-auto"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <div v-else class="mr-2 sm:mb-2 sm:mx-auto">
            {{ item.step }}
          </div>
          {{ item.name }}
        </div>
      </li>
    </ol>
    <VForm
      v-slot="{ meta: formMeta, errors: formErrors, values: formValues }"
      :validation-schema="schema"
      :initial-values="initialValues"
      @submit="$emit('submit', formValues)"
      @submit.prevent
    >
      {{ formValues }}
      <Transition name="slide-up" mode="out-in" tag="div">
        <div v-if="currentStep === 1">
          <h1
            class="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:mb-6 leding-tight dark:text-white"
          >
            Организация
          </h1>
          <div class="grid gap-5 my-6">
            <BaseAutocompliteInput
              name="inn"
              label="Название организации или ИНН"
              placeholder="Введите название или ИНН"
              :items="company"
            >
              <template #searchItem="result">
                <div class="text-primary-700 py-[6px] px-4">
                  {{ result.company.toUpperCase() }}
                </div>
                <div class="py-[6px] px-4">
                  {{ result.adress }}
                </div>
              </template>
            </BaseAutocompliteInput>
          </div>
        </div>

        <div v-else-if="currentStep === 2">
          <h1
            class="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:mb-6 leding-tight dark:text-white"
          >
            Контактное лицо
          </h1>
          <div class="grid gap-5 my-6 sm:grid-cols-2">
            <BaseTextInput
              type="text"
              name="fio"
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
              name="repeat"
              label="Повторите пароль"
              placeholder="*******"
            />
            <BaseTextInput
              type="phone"
              name="phone"
              label="Телефон"
              placeholder="+"
            />
          </div>
        </div>

        <div v-else-if="currentStep === 3">
          <h1
            class="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:mb-6 leding-tight dark:text-white"
          >
            Подтверждение
          </h1>
          <div class="grid gap-5 my-6">
            <p class="font-light text-gray-500 dark:text-gray-400">
              We emailed you a six-digit code to
              <span class="font-medium text-gray-900 dark:text-white"
                >name@company.com</span
              >. Enter the code below to confirm your email address.
            </p>
            <div class="flex my-4 space-x-2 sm:space-x-4 md:my-6">
              <div>
                <label for="code-1" class="sr-only">First code</label>
                <input
                  id="code-1"
                  type="text"
                  maxlength="1"
                  onkeyup="focusNextInput(this, 'code-1', 'code-2')"
                  class="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label for="code-2" class="sr-only">Second code</label>
                <input
                  id="code-2"
                  type="text"
                  maxlength="1"
                  onkeyup="focusNextInput(this, 'code-1', 'code-3')"
                  class="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label for="code-3" class="sr-only">Third code</label>
                <input
                  id="code-3"
                  type="text"
                  maxlength="1"
                  onkeyup="focusNextInput(this, 'code-2', 'code-4')"
                  class="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label for="code-4" class="sr-only">Fourth code</label>
                <input
                  id="code-4"
                  type="text"
                  maxlength="1"
                  onkeyup="focusNextInput(this, 'code-3', 'code-5')"
                  class="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label for="code-5" class="sr-only">Fivth code</label>
                <input
                  id="code-5"
                  type="text"
                  maxlength="1"
                  onkeyup="focusNextInput(this, 'code-4', 'code-6')"
                  class="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label for="code-6" class="sr-only">Sixth code</label>
                <input
                  id="code-6"
                  type="text"
                  maxlength="1"
                  onkeyup="focusNextInput(this, 'code-5', 'code-6')"
                  class="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
            </div>
            <p
              class="p-4 mb-4 text-sm text-gray-500 rounded-lg bg-gray-50 dark:text-gray-400 md:mb-6 dark:bg-gray-800"
            >
              Make sure to keep this window open while check your inbox.
            </p>
          </div>
        </div>
      </Transition>

      <div class="flex space-x-3">
        <button
          class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          @click="nextStep"
        >
          {{
            currentStep < steps.length
              ? "Следующее: " + steps[currentStep].name
              : "Подтвердить"
          }}
        </button>
      </div>
    </VForm>
    <div class="text-sm mt-6 font-medium text-gray-500 dark:text-gray-400">
      Уже есть аккаунт?
      <NuxtLink
        to="/auth"
        class="text-primary-700 hover:underline dark:text-primary-500"
      >
        Войти
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useForm, configure } from "vee-validate";
import { object, string, ref as yupRef, boolean } from "yup";
import { ref } from "vue";

const props = defineProps({
  company: {
    type: Object,
  },
});

const steps = [
  { step: 1, name: "Организация" },
  { step: 2, name: "Контактное лицо" },
  { step: 3, name: "Подтверждение" },
];
const currentStep = ref(1);

configure({
  validateOnBlur: false, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});

const initialValues = { phone: "+" };

const rePhoneNumber =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const schema = object({
  inn: string().required("Выберите организацию"),
  fio: string().required("Обязательно"),
  phone: string().test("phone", "Не верный формат телефона", (value) =>
    rePhoneNumber.test(value)
  ),
  email: string()
    .required("Обязательно")
    .email("Укажите валидный email")
    .label("Email"),
  password: string().required("Введите пароль").label("Ваш пароль"),
  repeat: string()
    .required("Повторите пароль")
    .oneOf([yupRef("password")], "Пароли не совпадают"),
  confirm: boolean().required("Обязательно"),
});

const { values, handleSubmit } = useForm({
  // vee-validate will be aware of computed schema changes
  validationSchema: schema,
  // turn this on so each step values won't get removed when you move back or to the next step
  keepValuesOnUnmount: true,
});

function nextStep() {
  if (currentStep.value >= steps.length) return;
  console.log(values);
  currentStep.value++;
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s linear;
}

.slide-up-enter-from {
  transform: translateX(500px);
  transition-delay: 0.3s;
}

.slide-up-leave-to {
  transform: translateX(-500px);
  opacity: 0;
}
</style>
