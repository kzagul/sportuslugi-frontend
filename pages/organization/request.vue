<script setup>
import { useUserStore } from "~~/stores/user";
import { useFormStore } from "~~/stores/form";

definePageMeta({
  middleware: ["moderator-only"],
  layout: false,
});

const formStore = useFormStore();
const authStore = useUserStore();

await authStore.getUser();
const user = computed(() => {
  return authStore.user;
});

const currentUserServiceForms = computed(() => {
  return formStore.getCurrentUserServiceForms;
});
</script>

<template>
  <NuxtLayout name="moderator">
    <div>
      <div v-if="currentUserServiceForms" class="text-3xl font-semibold p-4">
        Заявки на услуги от пользователей
      </div>

      <!-- <div class="flex flex-row gap-4">
        <span>Имя пользователя</span>
        <span>Email пользователя</span>
        <span>Название услуги</span>
        <span>Записать (отправка обратного письма)</span>
      </div> -->

      <div v-if="!currentUserServiceForms">
        <DataView :value="currentUserServiceForms" paginator :rows="5">
          <template #list="slotProps">
            <div class="col-12">
              <div
                class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"
              >
                <div
                  class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"
                >
                  <div
                    class="flex flex-column align-items-center sm:align-items-start gap-3"
                  >
                    <!-- <div class="text-2xl font-bold text-900">
                  {{ slotProps.data.user_id }}
                </div> -->
                    <!-- <Rating
                  :model-value="slotProps.data.rating"
                  readonly
                  :cancel="false"
                ></Rating> -->
                    <div class="flex align-items-center gap-3">
                      <span class="flex align-items-center gap-2">
                        Название услуги:
                        <span class="font-semibold">{{
                          slotProps.data.service_id
                        }}</span>
                      </span>
                      <!-- <Tag
                    :value="slotProps.data.inventoryStatus"
                    :severity="getSeverity(slotProps.data)"
                  ></Tag> -->
                    </div>
                  </div>

                  <div
                    class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"
                  >
                    <!-- <span class="text-2xl font-semibold"
                  >${{ slotProps.data.price }}</span
                > -->

                    <nuxt-link
                      class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      :to="`/service/${slotProps.data.service_id}`"
                      >Перейти к услуге</nuxt-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </template>
        </DataView>
      </div>

      <div v-else class="flex justify-center items-center h-80 text-3xl">
        Заявок на услуги на данный момент нет
      </div>
    </div>
  </NuxtLayout>
</template>
