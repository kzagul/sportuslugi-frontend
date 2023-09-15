<script setup>
import { FilterMatchMode } from "primevue/api";
import { useSportStore } from "~~/stores/sport";
// import { ProductService } from "@/service/ProductService";

const sportStore = useSportStore();

await sportStore.fetchSports();

const sports = computed(() => {
  return sportStore.getSports;
});

// onMounted(() => {
//   ProductService.getProductsSmall().then(
//     (data) => (products.value = data.slice(0, 5))
//   );
// });

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  "country.name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  representative: { value: null, matchMode: FilterMatchMode.IN },
  status: { value: null, matchMode: FilterMatchMode.EQUALS },
  verified: { value: null, matchMode: FilterMatchMode.EQUALS },
});

const layout = ref("grid");

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
  {
    id: "1009",
    code: "cm230f032",
    name: "Gaming Set",
    description: "Product Description",
    image: "gaming-set.jpg",
    price: 299,
    category: "Electronics",
    quantity: 63,
    inventoryStatus: "INSTOCK",
    rating: 3,
  },
  {
    id: "1010",
    code: "plb34234v",
    name: "Gold Phone Case",
    description: "Product Description",
    image: "gold-phone-case.jpg",
    price: 24,
    category: "Accessories",
    quantity: 0,
    inventoryStatus: "OUTOFSTOCK",
    rating: 4,
  },
  {
    id: "1011",
    code: "4920nnc2d",
    name: "Green Earbuds",
    description: "Product Description",
    image: "green-earbuds.jpg",
    price: 89,
    category: "Electronics",
    quantity: 23,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1012",
    code: "250vm23cc",
    name: "Green T-Shirt",
    description: "Product Description",
    image: "green-t-shirt.jpg",
    price: 49,
    category: "Clothing",
    quantity: 74,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1013",
    code: "fldsmn31b",
    name: "Grey T-Shirt",
    description: "Product Description",
    image: "grey-t-shirt.jpg",
    price: 48,
    category: "Clothing",
    quantity: 0,
    inventoryStatus: "OUTOFSTOCK",
    rating: 3,
  },
]);
const sortKey = ref();
const sortOrder = ref();
const sortField = ref();
const sortOptions = ref([
  { label: "Price High to Low", value: "!price" },
  { label: "Price Low to High", value: "price" },
]);
const onSortChange = (event) => {
  const value = event.value.value;
  const sortValue = event.value;

  if (value.indexOf("!") === 0) {
    sortOrder.value = -1;
    sortField.value = value.substring(1, value.length);
    sortKey.value = sortValue;
  } else {
    sortOrder.value = 1;
    sortField.value = value;
    sortKey.value = sortValue;
  }
};
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
    <h2
      class="flex justify-center mb-4 text-3xl tracking-tight font-extrabold text-gray-900 py-16"
    >
      Виды спорта PrimeVUE
    </h2>

    <!-- <ToolbarForGrid /> -->

    <!-- <GridSports :sports="sports" /> -->
    <div class="card">
      <DataView
        :value="products"
        :sort-order="sortOrder"
        :sort-field="sortField"
        paginator
        :rows="10"
        :layout="layout"
      >
        <template #header>
          <Dropdown
            v-model="sortKey"
            :options="sortOptions"
            option-label="label"
            placeholder="Sort By Price"
            @change="onSortChange($event)"
          />
          <DataViewLayoutOptions v-model="layout" />

          <div class="flex justify-content-end">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                v-model="filters['global'].value"
                placeholder="Поиск"
              />
            </span>
          </div>
        </template>

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

        <template #grid="slotProps">
          <div class="grid grid-cols-4" style="flex: 0 0 auto; width: 100%">
            <div
              class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4"
            >
              <div
                class="flex flex-wrap align-items-center justify-content-between gap-2"
              >
                <div class="flex align-items-center gap-2">
                  <i class="pi pi-tag"></i>
                  <span class="font-semibold">{{
                    slotProps.data.category
                  }}</span>
                </div>
                <Tag
                  :value="slotProps.data.inventoryStatus"
                  :severity="getSeverity(slotProps.data)"
                ></Tag>
              </div>
              <div class="flex flex-column align-items-center gap-3 py-5">
                <img
                  class="w-9 shadow-2 border-round"
                  :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
                  :alt="slotProps.data.name"
                />
                <div class="text-2xl font-bold">{{ slotProps.data.name }}</div>
                <Rating
                  value="{product.rating}"
                  readonly
                  :cancel="false"
                ></Rating>
              </div>
              <div class="flex align-items-center justify-content-between">
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
        </template>
      </DataView>
    </div>
  </div>
</template>
