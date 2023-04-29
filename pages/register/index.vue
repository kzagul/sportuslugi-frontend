<script setup>
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="auth">
    <section
      class="flex flex-col justify-center items-center bg-white dark:bg-gray-900 h-screen"
    >
      <div class="mx-auto max-w-screen-md mb-8 lg:mb-12">
        <h2
          class="mb-4 text-5xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Создайте аккаунт
        </h2>
      </div>
      <div class="flex flex-row justify-center items-center w-full">
        <NuxtLink to="/" class="flex justify-end items-center mb-12 w-1/3">
          <img
            src="/images/sport_logo2.svg"
            class="h-10 sm:h-32"
            alt="Спорт услуги лого"
          />
        </NuxtLink>

        <div class="flex flex-col py-8 px-4 mx-auto w-2/3">
          <div class="flex flex-col sm:flex-col justify-center">
            <div
              class="flex flex-col mx-auto w-full sm:max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
              <nuxt-link
                to="/register/user"
                class="relative flex justify-center items-center rounded-t-lg delay-75 transition-all duration-75 ease-out bg-cover bg-no-repeat bg-center hover:bg-[url('https://img.freepik.com/free-photo/self-building-young-caucasian-bodybuilder-training-over-studio-background-in-neon-light-muscular-male-model-with-the-ball-concept-of-sport-bodybuilding-healthy-lifestyle-motion-and-action_155003-35391.jpg?w=2000&t=st=1682796545~exp=1682797145~hmac=83b6294b89b4def5646cd697124dd93466f5d4b69e2d190b80d72e56c1d03b2c')] h-48"
              >
                <h3
                  class="flex justify-center items-center text-3xl rounded-t-lg font-semibold w-full h-full transition-all duration-300 ease-out hover:bg-brand-primary hover:bg-opacity-40 hover:text-white"
                >
                  Посетитель
                </h3>
              </nuxt-link>

              <div class="border-b-2" />

              <nuxt-link
                to="/register/organization"
                class="relative flex justify-center items-center rounded-b-lg delay-75 transition-all duration-75 ease-out bg-cover bg-no-repeat bg-center hover:bg-[url('https://img.freepik.com/free-photo/health-club-without-people-with-exercise-equipment_637285-8446.jpg?w=2000&t=st=1682798863~exp=1682799463~hmac=30884421ba6e6e7c3f8ebcba910d11a506ae2581c43d7ac50a27b77eaa2352df')] h-48"
              >
                <h3
                  class="flex justify-center items-center text-3xl rounded-b-lg font-semibold w-full h-full transition-all duration-300 ease-out hover:bg-brand-primary hover:bg-opacity-40 hover:text-white"
                >
                  Учреждение
                </h3>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
