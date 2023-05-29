<template>
  <NuxtLayout name="admin">
    <div class="py-16 md:py-8">
      <h2
        class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        Пользователи
      </h2>
    </div>
    <Toast />

    <div class="card">
      <DataTable
        v-model:filters="filters"
        v-model:selection="selectedProduct"
        :value="users"
        paginator
        :rows-per-page-options="[5, 10, 25]"
        :rows="10"
        data-key="id"
        filter-display="row"
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
          </div>
        </template>
        <template #empty> No customers found. </template>
        <template #loading> Loading customers data. Please wait. </template>
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
        header="Изменение вида спорта"
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

      <Dialog
        v-model:visible="addProductDialog"
        :style="{ width: '450px' }"
        header="Добавить нового пользователя"
        :modal="true"
      >
        <div class="field flex flex-col">
          <label for="name">Имя</label>
          <InputText
            id="name"
            v-model="form.name"
            required="true"
            autofocus
            :class="{ 'p-invalid': submitted && !selectedProduct.name }"
          />
          <small v-if="submitted && !selectedProduct.name" class="p-invalid"
            >Поле обязательно</small
          >
          <label for="name">Почта</label>
          <InputText
            id="name"
            v-model="form.email"
            type="email"
            required="true"
            autofocus
            :class="{ 'p-invalid': submitted && !selectedProduct.name }"
          />
          <small v-if="submitted && !selectedProduct.name" class="p-invalid"
            >Поле обязательно</small
          >
          <label for="name">Пароль</label>
          <InputText
            id="name"
            v-model="form.password"
            type="password"
            required="true"
            autofocus
            :class="{ 'p-invalid': submitted && !selectedProduct.name }"
          />
          <small v-if="submitted && !selectedProduct.name" class="p-invalid"
            >Поле обязательно</small
          >
          <label for="name">Подтверждение пароля</label>
          <InputText
            id="name"
            v-model="form.password_confirmation"
            type="password"
            required="true"
            autofocus
            :class="{ 'p-invalid': submitted && !selectedProduct.name }"
          />
          <small v-if="submitted && !selectedProduct.name" class="p-invalid"
            >Поле обязательно</small
          >
        </div>

        <!-- <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span
              >Вы уверены что хотите удалить <b>{{ selectedProduct.name }}</b
              >?</span
            >
          </div> -->
        <template #footer>
          <Button class="flex flex-row gap-3" @click="addProductDialog = false">
            <BaseIcon :path="mdiClose" :size="24" />
            Отменить
          </Button>
          <Button
            severity="success"
            class="flex flex-row gap-3"
            @click="addProduct(form)"
          >
            <BaseIcon :path="mdiCheck" :size="24" />
            Добавить
          </Button>
          <!-- @click="deleteProduct" -->
        </template>
      </Dialog>

      <Dialog
        v-model:visible="deleteProductDialog"
        :style="{ width: '450px' }"
        header="Confirm"
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

<script setup>
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

// import { useUserStore } from "~~/stores/user";
import { useUserStore } from "~~/stores/user";
definePageMeta({
  middleware: ["admin-only"],
  layout: false,
});

// const authStore = useUserStore();

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const toast = useToast();

const userStore = useUserStore();

await userStore.getAllUsers();

// const sports = ref();
const users = computed(() => {
  return userStore.users;
});

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
const addProductDialog = ref(false);
const deleteProductDialog = ref(false);

const loading = ref(true);
const submitted = ref(false);

const selectedProduct = ref();

const router = useRouter();
function redirectToPage(id) {
  // router.push({ path, query });
  router.push(`/sport/${id}`);
}

function addProductDialogShow(product) {
  selectedProduct.value = { ...product };
  addProductDialog.value = true;
}

const request = ref({
  name: "",
});

function addProduct(form) {
  userStore.addNewUser(form);
  // sportStore.postSport(request?.value.name);
  addProductDialog.value = false;
  toast.add({
    severity: "success",
    summary: "Успешно",
    detail: "Пользователь добавлен",
    life: 3000,
  });
}

function updateProductDialogShow(product) {
  selectedProduct.value = { ...product };
  updateProductDialog.value = true;
}

function updateProduct() {
  sportStore.updateSport(selectedProduct.value.id, selectedProduct.value.name);
  updateProductDialog.value = false;
  toast.add({
    severity: "success",
    summary: "Успешно",
    detail: "Пользователь обновлен",
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
  sportStore.deleteSportByID(selectedProduct?.value.id);
  selectedProduct.value = null;
  toast.add({
    severity: "success",
    summary: "Успешно",
    detail: "Пользователь удален",
    life: 3000,
  });
}

function lala(param) {
  console.log(param.id);
}
onMounted(() => {
  // sports.value = await sportStore.getSports;
  loading.value = false;
});
</script>
