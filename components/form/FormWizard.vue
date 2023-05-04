<template>
  <form @submit="onSubmit">
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
            item.step <= currentStepIdx + 1
              ? 'text-primary-600 dark:text-primary-500'
              : ''
          "
        >
          <svg
            v-if="item.step <= currentStepIdx + 1"
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
    <div v-if="!successSubmit">
      <slot />

      <div class="flex space-x-3">
        <a
          v-if="hasPrevious"
          type="button"
          href="#"
          class="text-center items-center w-full py-2.5 sm:py-3.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          @click="goToPrev"
          >Назад: {{ steps[currentStepIdx - 1].name }}</a
        >
        <button
          v-if="!isLastStep"
          type="submit"
          class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          {{ isLastStep ? "Подтвердить" : "Следующее:" }}
          {{ !isLastStep ? steps[currentStepIdx + 1].name : "" }}
        </button>
        <button
          v-if="isLastStep"
          type="submit"
          class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          {{ isLastStep ? "Подтвердить" : "Следующее:" }}
          {{ !isLastStep ? steps[currentStepIdx + 1].name : "" }}
        </button>
      </div>
    </div>

    <div v-else>
      <svg
        class="w-12 h-12 mb-4 text-green-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
      <h1
        class="mb-2 text-2xl font-extrabold tracking-tight text-gray-900 leding-tight dark:text-white"
      >
        Подтверждено
      </h1>
      <p class="mb-4 font-light text-gray-500 dark:text-gray-400 md:mb-6">
        You have successfully verified your account.
      </p>
      <nuxt-link
        to="/auth"
        href="#"
        class="block w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Войти в аккаунт
      </nuxt-link>
    </div>
  </form>
</template>

<script setup>
import { useForm } from "vee-validate";
import { useUserStore } from "~~/stores/user";

const authStore = useUserStore();

const successSubmit = ref(false);

const props = defineProps({
  validationSchema: {
    type: Array,
    required: true,
  },
  steps: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["submit"]);
const currentStepIdx = ref(0);

// Injects the starting step, child <form-steps> will use this to generate their ids
const stepCounter = ref(0);
provide("STEP_COUNTER", stepCounter);

// Inject the live ref of the current index to child components
// will be used to toggle each form-step visibility
provide("CURRENT_STEP_INDEX", currentStepIdx);

// if this is the last step
const isLastStep = computed(() => {
  return currentStepIdx.value === stepCounter.value - 1;
});

// If the `previous` button should appear
const hasPrevious = computed(() => {
  return currentStepIdx.value > 0;
});

// extracts the indivdual step schema
const currentSchema = computed(() => {
  return props.validationSchema[currentStepIdx.value];
});

const { values, handleSubmit } = useForm({
  // vee-validate will be aware of computed schema changes
  validationSchema: currentSchema,
  // turn this on so each step values won't get removed when you move back or to the next step
  keepValuesOnUnmount: true,
});

// We are using the "submit" handler to progress to next steps
// and to submit the form if its the last step
const onSubmit = handleSubmit((values) => {
  // console.log("org form submit");
  if (currentStepIdx.value === 1) {
    console.log("запрос на сервер за кодом");
    currentStepIdx.value++;
  } else if (!isLastStep.value) {
    currentStepIdx.value++;
  } else {
    // Let the parent know the form was filled across all steps
    successSubmit.value = true;
    emit("submit", values);
    // console.log("org form submit last step");
  }
});

function goToPrev() {
  if (currentStepIdx.value === 0) {
    return;
  }
  currentStepIdx.value--;
}
</script>
