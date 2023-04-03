<script setup>
import { ref } from "vue";
import { useUserStore } from "~~/stores/user";

definePageMeta({
  layout: false,
});

const authStore = useUserStore();

const form = ref({
  email: "",
  password: "",
});
</script>
<template>
  <NuxtLayout name="auth">
    <section
      class="bg-[url('/images/bg-1.jpeg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply bg-opacity-60"
    >
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen pt:mt-0"
      >
        <nuxt-link
          to="/"
          class="flex items-center mb-6 text-2xl font-semibold text-white"
        >
          <img
            class="w-auto h-[64px] mr-2"
            src="/images/logo-white.svg"
            alt="logo"
          />
          <!-- src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" -->
        </nuxt-link>
        <div
          class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800"
        >
          <div class="p-6 space-y-4 md:space-y-6 lg:space-y-8 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white"
            >
              Войдите в Ваш аккаунт
            </h1>
            <form
              class="space-y-4 md:space-y-6"
              action="#"
              @submit.prevent="authStore.handleLogin(form)"
            >
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Email</label
                >
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="Email"
                  class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Пароль</label
                >
                <!-- <input
                  id="confirm-password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                /> -->
                <input
                  v-model="form.password"
                  type="password"
                  placeholder="Пароль"
                  class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
                <div v-if="authStore.errors.password" class="flex">
                  <span class="text-red-400 text-sm m-2 p-2">{{
                    authStore.errors.password[0]
                  }}</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="remember"
                      class="text-gray-500 dark:text-gray-300"
                      >Запомнить меня</label
                    >
                  </div>
                </div>
                <nuxt-link
                  to="/forgot-password"
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Забыли пароль?
                </nuxt-link>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Вход
              </button>
              <p
                class="text-sm font-light text-center text-gray-500 dark:text-gray-300"
              >
                <nuxt-link
                  to="/register"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Регистрация
                </nuxt-link>
              </p>
              <nuxt-link
                to="/"
                class="flex justify-center font-medium text-black hover:underline dark:text-primary-500"
              >
                Вернуться на главную
              </nuxt-link>
            </form>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
