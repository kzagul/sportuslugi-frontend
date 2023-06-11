<script setup>
import { useUserStore } from "~~/stores/user";
import { useFormStore } from "~~/stores/form";

const authStore = useUserStore();
const formStore = useFormStore();

await authStore.getUser();
const user = computed(() => {
  return authStore.user;
});

await formStore.getServiceFormsByUserId(user.value?.id);

const currentUserServiceForms = computed(() => {
  return formStore.getCurrentUserServiceForms;
});

console.log("currentUserServiceForms.value");
console.log(currentUserServiceForms.value);

console.log(user.value);

const products = ref([
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1001",
    code: "nvklal433",
    name: "Black Watch",
    description: "Product Description",
    image: "black-watch.jpg",
    price: 72,
    category: "Accessories",
    quantity: 61,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1002",
    code: "zz21cz3c1",
    name: "Blue Band",
    description: "Product Description",
    image: "blue-band.jpg",
    price: 79,
    category: "Fitness",
    quantity: 2,
    inventoryStatus: "LOWSTOCK",
    rating: 3,
  },
  {
    id: "1003",
    code: "244wgerg2",
    name: "Blue T-Shirt",
    description: "Product Description",
    image: "blue-t-shirt.jpg",
    price: 29,
    category: "Clothing",
    quantity: 25,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1004",
    code: "h456wer53",
    name: "Bracelet",
    description: "Product Description",
    image: "bracelet.jpg",
    price: 15,
    category: "Accessories",
    quantity: 73,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1005",
    code: "av2231fwg",
    name: "Brown Purse",
    description: "Product Description",
    image: "brown-purse.jpg",
    price: 120,
    category: "Accessories",
    quantity: 0,
    inventoryStatus: "OUTOFSTOCK",
    rating: 4,
  },
  {
    id: "1006",
    code: "bib36pfvm",
    name: "Chakra Bracelet",
    description: "Product Description",
    image: "chakra-bracelet.jpg",
    price: 32,
    category: "Accessories",
    quantity: 5,
    inventoryStatus: "LOWSTOCK",
    rating: 3,
  },
  {
    id: "1007",
    code: "mbvjkgip5",
    name: "Galaxy Earrings",
    description: "Product Description",
    image: "galaxy-earrings.jpg",
    price: 34,
    category: "Accessories",
    quantity: 23,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1008",
    code: "vbb124btr",
    name: "Game Controller",
    description: "Product Description",
    image: "game-controller.jpg",
    price: 99,
    category: "Electronics",
    quantity: 2,
    inventoryStatus: "LOWSTOCK",
    rating: 4,
  },
]);
const getSeverity = (product) => {
  switch (product.inventoryStatus) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};
</script>

<template>
  <div>
    My services

    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
      <li
        v-for="(item, index) in currentUserServiceForms"
        :key="index"
        class="py-4"
      >
        <div class="flex items-center space-x-4">
          <div class="flex shrink-0">
            {{ index + 1 }}
          </div>
          <div class="flex-1 min-w-0">
            <p
              class="text-base font-semibold text-gray-900 truncate dark:text-white"
            >
              user_id: {{ item.user_id }}
            </p>
            <p
              class="text-sm font-normal text-gray-500 truncate dark:text-gray-400"
            >
              service_id: {{ item.service_id }}
            </p>
          </div>
          <div class="flex-1 min-w-0">
            <p
              class="text-base font-semibold text-gray-900 truncate dark:text-white"
            >
              title: {{ item.title }}
            </p>
          </div>
          <div class="inline-flex items-center">
            <button
              class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <nuxt-link :to="`/service/${item.service_id}`"
                >Перейти к услуге</nuxt-link
              >
            </button>
          </div>
        </div>
      </li>
    </ul>

    <!-- <DataView :value="products" paginator :rows="5">
      <template #list="slotProps">
        <div class="col-12">
          <div
            class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"
          >
            <img
              class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
              :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
              :alt="slotProps.data.name"
            />
            <div
              class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"
            >
              <div
                class="flex flex-column align-items-center sm:align-items-start gap-3"
              >
                <div class="text-2xl font-bold text-900">
                  {{ slotProps.data.name }}
                </div>
                <Rating
                  :model-value="slotProps.data.rating"
                  readonly
                  :cancel="false"
                ></Rating>
                <div class="flex align-items-center gap-3">
                  <span class="flex align-items-center gap-2">
                    <i class="pi pi-tag"></i>
                    <span class="font-semibold">{{
                      slotProps.data.category
                    }}</span>
                  </span>
                  <Tag
                    :value="slotProps.data.inventoryStatus"
                    :severity="getSeverity(slotProps.data)"
                  ></Tag>
                </div>
              </div>
              <div
                class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"
              >
                <span class="text-2xl font-semibold"
                  >${{ slotProps.data.price }}</span
                >
                <Button
                  icon="pi pi-shopping-cart"
                  rounded
                  :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView> -->

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
</template>
