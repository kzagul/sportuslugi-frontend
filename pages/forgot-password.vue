<script setup>
import { useUserStore } from "~/stores/user";
// import ForgotPasswordForm from "~/components/form/ForgotPasswordForm";

definePageMeta({
  layout: false,
});

const userStore = useUserStore();
// const email = ref("");
const form = ref({
  email: "",
});

// const user = useUserStore();
// // TODO метод для восстановления пароля
// const userLogin = async (formValues, actions) => {
//   await user.login(formValues);
//   navigateHome();
// };

// function navigateHome() {
//   return navigateTo({
//     path: "/",
//   });
// }
</script>

<template>
  <NuxtLayout name="auth">
    <form
      class="mx-auto max-w-md bg-slate-100 p-4 mt-12 rounded-lg"
      @submit.prevent="userStore.handleForgotPassword(form.email)"
    >
      <h3 class="font-bold">Forgot password</h3>
      <div
        v-if="userStore.status"
        class="m-2 p-2 text-green-900 font-semibold bg-green-300 rounded-md"
      >
        {{ userStore.status }}
      </div>
      <div class="my-6">
        <label
          for="email"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your email</label
        >
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="email@laraveller.com"
        />
        <div v-if="userStore.errors.email" class="flex">
          <span class="text-red-400 text-sm m-2 p-2">{{
            userStore.errors.email[0]
          }}</span>
        </div>
      </div>
      <button
        class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        Submit
      </button>
    </form>

    <!-- <div
    class="flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900"
  >
    <div
      class="justify-center items-center w-full bg-white rounded-lg shadow lg:flex md:mt-0 lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0 dark:bg-gray-800"
    >
      <div class="hidden w-2/3 lg:flex">
        <img
          class="rounded-l-lg"
          src="/images/authentication/login.jpg"
          alt="login image"
        />
      </div>
      <div class="p-6 space-y-8 w-full sm:p-8 lg:p-16 lg:py-0">
        <ForgotPasswordForm @submit="userLogin" />
      </div>
    </div>
  </div> -->
  </NuxtLayout>
</template>
