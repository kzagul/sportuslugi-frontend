<script setup lang="ts">
import { FilterMatchMode } from "primevue/api";
import {
  mdiArrowUpLeft,
  mdiPlus,
  mdiClose,
  mdiCheck,
  mdiPencil,
  mdiDelete,
} from "@mdi/js";
import { useToast } from "primevue/usetoast";
import { useField, useForm } from "vee-validate";
// stores
import { useServiceStore } from "~/stores/service";
import { useUserStore } from "~~/stores/user";

definePageMeta({
  middleware: ["moderator-only"],
  layout: false,
});

// validate
const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField("value", validateField);

function validateField(value) {
  if (!value) {
    return "Поле обязательно";
  }

  return true;
}

const authStore = useUserStore();
await authStore.getUser();
const user = computed(() => {
  return authStore.user;
});
const users = computed(() => {
  return authStore.users;
});

const serviceStore = useServiceStore();
const { postService } = serviceStore;

await serviceStore.fetchServices();

const services = computed(() => {
  return serviceStore.getServices;
});

const toast = useToast();

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  "country.name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  representative: { value: null, matchMode: FilterMatchMode.IN },
  status: { value: null, matchMode: FilterMatchMode.EQUALS },
  verified: { value: null, matchMode: FilterMatchMode.EQUALS },
});

// const productDialog = ref(false);
const updateProductDialog = ref(false);
const deleteProductDialog = ref(false);

const loading = ref(true);

const router = useRouter();
function redirectToPage(name: any) {
  // router.push({ path, query });
  router.push(`/service/${name}`);
}

function updateProductDialogShow(product) {
  selectedProduct.value = { ...product };
  updateProductDialog.value = true;
}

function updateProduct() {
  serviceStore.updateService(
    selectedProduct.value.id,
    selectedProduct.value.name
  );
  updateProductDialog.value = false;
  toast.add({
    severity: "success",
    summary: "Успешно",
    detail: "Данные услуги обновлены",
    life: 3000,
  });
}

// function saveProduct() {
//   submitted.value = true;
//   if (this.product.name.trim()) {
//     if (this.product.id) {
//       this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
//       this.products[this.findIndexById(this.product.id)] = this.product;
//       this.$toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
//     } else {
//       this.product.id = this.createId();
//       this.product.code = this.createId();
//       this.product.image = 'product-placeholder.svg';
//       this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
//       this.products.push(this.product);
//       this.$toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
//     }
//     this.productDialog = false;
//     this.product = {};
//   }
// }

function confirmDeleteProduct(sport) {
  deleteProductDialog.value = true;
  selectedProduct.value = sport;
}

function deleteProduct() {
  deleteProductDialog.value = false;
  serviceStore.deleteServiceByID(selectedProduct?.value.id);
  selectedProduct.value = null;
  toast.add({
    severity: "success",
    summary: "Успешно",
    detail: "Услуга удалена",
    life: 3000,
  });
}

onMounted(() => {
  // sports.value = await sportStore.getSports;
  loading.value = false;
});

const { getServicesOfInstitution } = useServiceFunc();

const getInstitutionOfCurrentUser = computed(() => {
  const currentUser = users.value?.find(
    (item: any) => item.id === user.value?.id
  );
  return currentUser?.contact_user_of[0];
});

const institutionOfCurrentUserId = getInstitutionOfCurrentUser.value?.id;

const institutionServices = getServicesOfInstitution(
  services.value,
  getInstitutionOfCurrentUser.value?.id
);
console.log("huiiii");
console.log(getInstitutionOfCurrentUser.value);

const addProductDialog = ref(false);

function addProductDialogShow(product) {
  selectedProduct.value = { ...product };
  addProductDialog.value = true;
}

const submitted = ref(false);

const selectedProduct = ref();

function determineIsFree(value) {
  const isFreeRes = isFreeValue !== `Платная`;
  request.value.isFree = isFreeRes;
}

const isFreeValue = ref("Бесплатная");
const options = ref(["Платная", "Бесплатная"]);

const request = ref({
  name: "",
  sports: "",
  institutions: "",

  description: "",
  duration: "",
  isFree: false,
  price: "",

  // Schedule
  // Difficulty - ?????

  // Trainers
  // Objects

  // address

  // affiliates - филиалы
});

const institutionStore = useInstitutionStore();
const { fetchInstitutions, getInstitutions } = institutionStore;

await fetchInstitutions();

const selectedInstitution = ref();

const institutions = computed(() => {
  return getInstitutions;
});

const fileredSelectedInstitution = computed(() => {
  //   return selectedInstitution.value.map((item) => item.id);
  return selectedInstitution.value.id;
});

console.log(institutions);

const sportStore = useSportStore();
const { fetchSports, getSports } = sportStore;
await fetchSports();

const selectedSports = ref();

const sports = computed(() => {
  return getSports;
});

const fileredSelectedSports = computed(() => {
  return selectedSports.value.map((item: any) => item.id);
});

function addProduct() {
  postService(
    request?.value.name,
    fileredSelectedSports.value,
    fileredSelectedInstitution.value,

    request?.value.isFree,
    request?.value.price,
    request?.value.description,
    request?.value.duration
  );
  addProductDialog.value = false;
  toast.add({
    severity: "success",
    summary: "Успешно",
    detail: "Новая услуга добавлена",
    life: 3000,
  });
}

const onSubmit = handleSubmit(() => {
  postService(
    request?.value.name,
    fileredSelectedSports.value,
    // fileredSelectedInstitution.value,
    institutionOfCurrentUserId,

    request?.value.isFree,
    request?.value.price,
    request?.value.description,
    request?.value.duration
  );
  addProductDialog.value = false;
  // if (values.value && values.value.name) {
  toast.add({
    severity: "success",
    summary: "Успешно",
    detail: "Новая услуга добавлена",
    life: 3000,
  });
  resetForm();
  // }
});

function click() {
  console.log(fileredSelectedInstitution.value);
}
</script>

<template>
  <NuxtLayout name="moderator">
    <div class="py-8">
      <h2
        class="mb-4 text-xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        Спортивные услуги учреждения
      </h2>
    </div>
    <Toast />

    <div class="card">
      <DataTable
        v-model:filters="filters"
        v-model:selection="selectedProduct"
        :value="institutionServices"
        paginator
        :rows-per-page-options="[5, 10, 25]"
        :rows="10"
        data-key="id"
        :loading="loading"
        :global-filter-fields="[
          'name',
          'country.name',
          'representative.name',
          'status',
        ]"
      >
        <template #header>
          <div class="flex flex-row justify-between">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                v-model="filters['global'].value"
                placeholder="Поиск"
              />
            </span>
            <button
              type="button"
              class="flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              @click="addProductDialogShow"
            >
              <BaseIcon :path="mdiPlus" :size="24" />
              Добавить
            </button>

            <Dialog
              v-model:visible="addProductDialog"
              :style="{ width: '800px' }"
              header="Добавить новую спортивную услугу"
              :modal="true"
            >
              <div class="field flex flex-col gap-4">
                <!-- 1 -->
                <div class="flex flex-col">
                  <label for="name" class="text-lg">Название</label>
                  <InputText
                    id="name"
                    v-model="request.name"
                    required="true"
                    autofocus
                    :class="{ 'p-invalid': submitted && !selectedProduct.name }"
                  />
                  <small
                    v-if="submitted && !selectedProduct.name"
                    class="p-invalid"
                    >Поле обязательно</small
                  >
                </div>

                <!-- 2 -->
                <div class="flex flex-col">
                  <label for="name" class="text-lg">Виды спорта</label>
                  <MultiSelect
                    v-model="selectedSports"
                    :options="sports"
                    filter
                    option-label="name"
                    placeholder="Выбор видов спорта"
                    class="w-full md:w-20rem"
                  />
                </div>

                <!-- 3 -->
                <div class="flex flex-col">
                  <label class="text-lg">Учреждение</label>

                  <InputText
                    id="name"
                    required="true"
                    autofocus
                    :placeholder="getInstitutionOfCurrentUser?.name"
                    disabled
                    :class="{ 'p-invalid': submitted && !selectedProduct.name }"
                  />
                  <!-- <Dropdown
                    v-model="selectedInstitution"
                    :options="institutions"
                    filter
                    show-clear
                    option-label="name"
                    placeholder="Выбор учреждения"
                    class="w-full md:w-14rem"
                  >
                    <template #value="slotProps">
                      <div
                        v-if="slotProps.value"
                        class="flex align-items-center"
                      >
                        <div>{{ slotProps.value.name }}</div>
                      </div>
                      <span v-else>
                        {{ slotProps.placeholder }}
                      </span>
                    </template>
                    <template #option="slotProps">
                      <div class="flex align-items-center">
                        <div>{{ slotProps.option.name }}</div>
                      </div>
                    </template>
                  </Dropdown> -->
                  <small id="dd-error" class="p-error">{{
                    errorMessage || "&nbsp;"
                  }}</small>
                </div>

                <!-- 4 is free -->
                <!-- <InputSwitch v-model="isFree" /> -->

                <!-- <div v-if="isFree">Бесплатно</div>

        <div v-else>Стоит денег</div> -->

                <div class="flex flex-col">
                  <label class="text-lg">Цена</label>
                  <div class="card flex justify-content-center">
                    <SelectButton
                      v-model="isFreeValue"
                      :options="options"
                      aria-labelledby="basic"
                      @click="determineIsFree(isFreeValue)"
                    />
                  </div>

                  <div v-if="isFreeValue === `Бесплатная`">Бесплатно</div>

                  <div v-else>
                    <div class="flex-auto">
                      <InputNumber
                        v-model="request.price"
                        input-id="currency-us"
                        mode="currency"
                        currency="RUB"
                        locale="en-US"
                      />
                    </div>
                  </div>
                </div>

                <!-- 5 -->
                <div class="flex flex-col">
                  <span class="text-xl">Описание услуги</span>
                  <Textarea
                    v-model="request.description"
                    auto-resize
                    rows="5"
                    cols="30"
                  />
                </div>

                <!-- 6 -->
                <div class="flex flex-col">
                  <span class="text-xl">Длительность (минуты)</span>

                  <InputNumber v-model="request.duration" suffix=" Мин" />
                </div>
              </div>

              <!-- <div class="flex align-items-center justify-content-center">
              <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
              <span
                >Вы уверены что хотите удалить <b>{{ selectedProduct.name }}</b
                >?</span
              >
            </div> -->
              <template #footer>
                <Button
                  class="flex flex-row gap-3"
                  @click="addProductDialog = false"
                >
                  <BaseIcon :path="mdiClose" :size="24" />
                  Отменить
                </Button>
                <Button
                  severity="success"
                  class="flex flex-row gap-3"
                  @click="addProduct()"
                >
                  <!-- @click="addProduct()" -->
                  <BaseIcon :path="mdiCheck" :size="24" />
                  Добавить
                </Button>
              </template>
            </Dialog>
          </div>
        </template>
        <template #empty> Ничего не найдено </template>
        <template #loading> Загрузка данных </template>
        <Column field="name" header="Название" sortable filter>
          <template #body="{ data }">
            {{ data?.name }}
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="text"
              class="p-column-filter"
              placeholder="Искать по названию"
              @input="filterCallback()"
            />
          </template>
        </Column>
        <!-- <Column field="name" header="Длительность" sortable filter>
          <template #body="{ data }">
            {{ data?.duration }}
            <span v-if="data?.duration">мин</span>
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="text"
              class="p-column-filter"
              placeholder="Искать по длительности"
              @input="filterCallback()"
            />
          </template>
        </Column>
        <Column field="name" header="Цена" sortable filter>
          <template #body="{ data }">
            <span v-if="data?.Price">{{ data?.Price }}</span>
            <span v-else>Бесплатно</span>
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="text"
              class="p-column-filter"
              placeholder="Искать по цене"
              @input="filterCallback()"
            />
          </template>
        </Column> -->
        <!-- <Column
          header="Agent"
          filter-field="representative"
          :show-filter-menu="false"
          :filter-menu-style="{ width: '14rem' }"
          style="min-width: 14rem"
        >
          <template #body="{ data }">
            <div class="flex align-items-center gap-2">
              <span>g</span>
            </div>
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <MultiSelect
              v-model="filterModel.value"
              :options="sports"
              option-label="name"
              placeholder="Any"
              class="p-column-filter"
              style="min-width: 14rem"
              :max-selected-labels="1"
              @change="filterCallback()"
            >
              <template #option="slotProps">
                <div class="flex align-items-center gap-2">
                  <span>{{ slotProps.sports.name }}</span>
                </div>
              </template>
            </MultiSelect>
          </template>
        </Column> -->
        <Column field="redirect">
          <template #body="{ data }">
            <button
              class="flex flex-row gap-2 justify-center items-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              @click="redirectToPage(data.id)"
            >
              <BaseIcon :path="mdiArrowUpLeft" :size="20" />
              Перейти
            </button>
          </template>
        </Column>
        <Column>
          <template #body="slotProps">
            <Button
              severity="secondary"
              text
              class="border p-button-rounded"
              @click="updateProductDialogShow(slotProps.data)"
            >
              <BaseIcon :path="mdiPencil" :size="20" />
            </Button>
            <Button
              severity="danger"
              text
              class="border p-button-rounded"
              @click="confirmDeleteProduct(slotProps.data)"
            >
              <BaseIcon :path="mdiDelete" :size="20" />
            </Button>
          </template>
        </Column>
      </DataTable>

      <Dialog
        v-model:visible="updateProductDialog"
        :style="{ width: '450px' }"
        header="Изменение данных спортивной услуги"
        :modal="true"
        class="p-fluid"
      >
        <!-- <img
              v-if="product.image"
              :src="`/images/product/${product.image}`"
              :alt="product.image"
              width="150"
              class="mt-0 mx-auto mb-5 block shadow-2"
            /> -->
        <div class="field">
          <label for="name">Название</label>
          <InputText
            id="name"
            v-model.trim="selectedProduct.name"
            required="true"
            autofocus
            :class="{ 'p-invalid': submitted && !selectedProduct.name }"
          />
          <small v-if="submitted && !selectedProduct.name" class="p-invalid"
            >Поле обязательно</small
          >
        </div>
        <!-- <div class="field">
              <label for="description">Description</label>
              <Textarea
                id="description"
                v-model="product.description"
                required="true"
                rows="3"
                cols="20"
              />
            </div> -->

        <!-- <div class="field">
              <label for="inventoryStatus" class="mb-3">Inventory Status</label>
              <ClientOnly>
                <Dropdown
                  id="inventoryStatus"
                  v-model="product.inventoryStatus"
                  :options="statuses"
                  option-label="label"
                  placeholder="Select a Status"
                >
                  <template #value="slotProps">
                    <div v-if="slotProps.value && slotProps.value.value">
                      <span
                        :class="`product-badge status-${slotProps.value.value}`"
                        >{{ slotProps.value.label }}</span
                      >
                    </div>
                    <div v-else-if="slotProps.value && !slotProps.value.value">
                      <span
                        :class="`product-badge status-${slotProps.value.toLowerCase()}`"
                        >{{ slotProps.value }}</span
                      >
                    </div>
                    <span v-else>
                      {{ slotProps.placeholder }}
                    </span>
                  </template>
                </Dropdown>
              </ClientOnly>
            </div> -->

        <!-- <div class="field">
              <label class="mb-3">Category</label>
              <div class="formgrid grid">
                <div class="field-radiobutton col-6">
                  <RadioButton
                    id="category1"
                    v-model="product.category"
                    name="category"
                    value="Accessories"
                  />
                  <label for="category1">Accessories</label>
                </div>
                <div class="field-radiobutton col-6">
                  <RadioButton
                    id="category2"
                    v-model="product.category"
                    name="category"
                    value="Clothing"
                  />
                  <label for="category2">Clothing</label>
                </div>
                <div class="field-radiobutton col-6">
                  <RadioButton
                    id="category3"
                    v-model="product.category"
                    name="category"
                    value="Electronics"
                  />
                  <label for="category3">Electronics</label>
                </div>
                <div class="field-radiobutton col-6">
                  <RadioButton
                    id="category4"
                    v-model="product.category"
                    name="category"
                    value="Fitness"
                  />
                  <label for="category4">Fitness</label>
                </div>
              </div>
            </div> -->

        <!-- <div class="formgrid grid">
              <div class="field col">
                <label for="price">Price</label>
                <InputNumber
                  id="price"
                  v-model="product.price"
                  mode="currency"
                  currency="USD"
                  locale="en-US"
                />
              </div>
              <div class="field col">
                <label for="quantity">Quantity</label>
                <InputNumber id="quantity" v-model="product.quantity" integeronly />
              </div>
            </div> -->
        <template #footer>
          <Button
            class="flex flex-row gap-3"
            @click="updateProductDialog = !updateProductDialog"
          >
            <BaseIcon :path="mdiClose" :size="24" />
            Отменить
          </Button>
          <Button
            severity="success"
            class="flex flex-row gap-3"
            @click="updateProduct"
          >
            <BaseIcon :path="mdiCheck" :size="24" />
            Изменить
          </Button>
        </template>
      </Dialog>

      <!-- <Dialog
        v-model:visible="addProductDialog"
        :style="{ width: '450px' }"
        header="Добавить новую спортивную услугу"
        :modal="true"
      >
        <div class="field flex flex-col">
          <label for="name">Название</label>
          <InputText
            id="name"
            v-model="request.name"
            required="true"
            autofocus
            :class="{ 'p-invalid': submitted && !selectedProduct.name }"
          />
          <small v-if="submitted && !selectedProduct.name" class="p-invalid"
            >Поле обязательно</small
          >
        </div>

        <template #footer>
          <Button class="flex flex-row gap-3" @click="addProductDialog = false">
            <BaseIcon :path="mdiClose" :size="24" />
            Отменить
          </Button>
          <Button
            severity="success"
            class="flex flex-row gap-3"
            @click="addProduct()"
          >
            <BaseIcon :path="mdiCheck" :size="24" />
            Добавить
          </Button>
        </template>
      </Dialog> -->

      <Dialog
        v-model:visible="deleteProductDialog"
        :style="{ width: '450px' }"
        header="Удаление спортивную услугу"
        :modal="true"
      >
        <div class="flex align-items-center justify-content-center">
          <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
          <span
            >Вы уверены что хотите удалить <b>{{ selectedProduct.name }}</b
            >?</span
          >
        </div>
        <template #footer>
          <Button
            class="flex flex-row gap-3"
            @click="deleteProductDialog = false"
          >
            <BaseIcon :path="mdiClose" :size="24" />
            Отменить
          </Button>
          <Button
            severity="danger"
            class="flex flex-row gap-3"
            @click="deleteProduct"
          >
            <BaseIcon :path="mdiCheck" :size="24" />
            Удалить
          </Button>
        </template>
      </Dialog>
    </div>
  </NuxtLayout>
</template>
