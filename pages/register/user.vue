<script setup>
import { ref } from "vue";
import { useUserStore } from "~~/stores/user";

definePageMeta({
  layout: false,
});

const authStore = useUserStore();

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
</script>
<template>
  <NuxtLayout name="auth">
    <section
      class="bg-no-repeat bg-cover bg-center bg-blend-multiply bg-opacity-60"
    >
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen pt:mt-0"
      >
        <NuxtLink to="/" class="flex items-center">
          <img
            src="/images/sport_logo2.svg"
            class="mr-3 h-10 sm:h-14"
            alt="Спорт услуги лого"
          />
        </NuxtLink>
        <div
          class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800"
        >
          <div class="p-6 space-y-4 md:space-y-6 lg:space-y-8 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white"
            >
              Создайте аккаунт
            </h1>
            <form
              class="space-y-4 md:space-y-6"
              @submit.prevent="authStore.handleRegister(form)"
            >
              <div class="mb-6">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Имя</label
                >
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Имя"
                  class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
                <div v-if="authStore.errors.name" class="flex">
                  <span class="text-red-400 text-sm m-2 p-2">{{
                    authStore.errors.name[0]
                  }}</span>
                </div>
              </div>

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
                <div v-if="authStore.errors.email" class="flex">
                  <span class="text-red-400 text-sm m-2 p-2">{{
                    authStore.errors.email[0]
                  }}</span>
                </div>
              </div>

              <div class="mb-6">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Пароль</label
                >
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
              <div class="mb-6">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Подтверждение пароля</label
                >
                <input
                  v-model="form.password_confirmation"
                  type="password"
                  placeholder="Пароль"
                  class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div class="mb-10">
                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Зарегестрироваться
                </button>
              </div>
              <p
                class="text-sm font-light text-center text-gray-500 dark:text-gray-300"
              >
                Уже есть аккаунт?
                <nuxt-link
                  to="/login"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Войти
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
