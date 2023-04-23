<script setup>
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="auth">
    <section
      class="flex flex-row justify-center items-center bg-white dark:bg-gray-900 h-screen"
    >
      <NuxtLink to="/" class="flex justify-center items-center mb-12 w-1/2">
        <img
          src="/images/sport_logo2.svg"
          class="h-10 sm:h-32"
          alt="Спорт услуги лого"
        />
      </NuxtLink>
      <div class="flex flex-col py-8 px-4 mx-auto w-1/2 lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2
            class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            Регистрация
          </h2>
        </div>

        <div class="flex flex-col sm:flex-col gap-8 justify-center">
          <div
            class="flex flex-col p-6 mx-auto w-full sm:max-w-sm text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
          >
            <h3 class="mb-4 text-2xl font-semibold">
              Зарегестрироваться как пользователь
            </h3>

            <nuxt-link
              to="/register/user"
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
              >Начать</nuxt-link
            >
          </div>

          <div
            class="flex flex-col p-6 mx-auto w-full sm:max-w-sm text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
          >
            <h3 class="mb-4 text-2xl font-semibold">
              Зарегестрировать учреждение
            </h3>

            <nuxt-link
              to="/register/organization"
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
              >Начать</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
