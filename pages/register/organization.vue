<script setup>
import { ref } from "vue";
import { useUserStore } from "~~/stores/user";
import { useInstitutionStore } from "~~/stores/institution";

const institutionStore = useInstitutionStore();
const { getInstitutions, fetchInstitutions } = institutionStore;

// import RegistrationStep from "~/components/form/RegistrationStep";
// import RegistrationStep2 from "../../components/form/RegistrationStep2";

definePageMeta({
  layout: false,
});

await fetchInstitutions();

const authStore = useUserStore();

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const user = useUserStore();
// TODO метод для восстановления пароля
const userLogin = async (formValues, actions) => {
  await user.login(formValues);
  navigateHome();
};

function navigateHome() {
  return navigateTo({
    path: "/",
  });
}

const companys = computed(() => {
  return getInstitutions;
});

console.log(companys.value);
</script>

<template>
  <NuxtLayout name="auth">
    <section class="py-8 bg-white dark:bg-gray-900 lg:py-0 h-screen">
      <div class="flex flex-row items-center justify-center h-full">
        <NuxtLink to="/" class="flex justify-center items-center w-1/3 mb-12">
          <img
            src="/images/sport_logo2.svg"
            class="h-10 sm:h-32"
            alt="Спорт услуги лого"
          />
        </NuxtLink>
        <div
          class="flex items-center mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0 w-2/3"
        >
          <!-- <FormRegistrationStep :company="companys" /> -->
          <FormRegistrationStep2 :company="companys" />
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
