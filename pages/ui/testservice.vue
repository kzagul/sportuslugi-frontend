<template>
  <div>
    <Toast />
    <button
      type="button"
      class="flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
      @click="addProductDialogShow"
    >
      <BaseIcon :path="mdiPlus" :size="24" />
      Добавить услугу
    </button>
    <!-- <form @submit="onSubmit"> -->
    <Dialog
      v-model:visible="addProductDialog"
      :style="{ width: '450px' }"
      header="Добавить новую спортивную услугу"
      :modal="true"
    >
      <div class="field flex flex-col">
        <!-- 1 -->
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

        <!-- 2 -->
        <MultiSelect
          v-model="selectedSports"
          :options="sports"
          filter
          option-label="name"
          placeholder="Выбор видов спорта"
          class="w-full md:w-20rem"
        />

        <!-- 3 -->
        <Dropdown
          v-model="selectedInstitution"
          :options="institutions"
          filter
          show-clear
          option-label="name"
          placeholder="Выбор учреждения"
          class="w-full md:w-14rem"
        >
          <template #value="slotProps">
            <div v-if="slotProps.value" class="flex align-items-center">
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
        </Dropdown>
        <small id="dd-error" class="p-error">{{
          errorMessage || "&nbsp;"
        }}</small>

        <!-- 4 is free -->
        <!-- <InputSwitch v-model="isFree" /> -->

        <!-- <div v-if="isFree">Бесплатно</div>

        <div v-else>Стоит денег</div> -->

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

        <div class="flex flex-col items-center justify-center">
          <span class="text-xl">Описание услуги</span>
          <Textarea
            v-model="request.description"
            auto-resize
            rows="5"
            cols="30"
          />
        </div>

        <div class="flex flex-col items-center justify-center">
          <span class="text-xl">Длительность (минуты)</span>

          <InputNumber v-model="request.duration" suffix=" Мин" />
        </div>

        <button @click="clickOnly">click</button>
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
          @click="addProduct()"
        >
          <!-- @click="addProduct()" -->
          <BaseIcon :path="mdiCheck" :size="24" />
          Добавить
        </Button>
      </template>
    </Dialog>
    <!-- </form> -->
  </div>
</template>

<script setup>
import { mdiClose, mdiCheck, mdiPlus } from "@mdi/js";
import { useField, useForm } from "vee-validate";

// import { useServiceStore } from "~~/stores/service";
import { useToast } from "primevue/usetoast";
const toast = useToast();

// validate
const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField("value", validateField);

function validateField(value) {
  if (!value) {
    return "Поле обязательно";
  }

  return true;
}

const serviceStore = useServiceStore();
const { postService } = serviceStore;

const addProductDialog = ref(false);

function addProductDialogShow(product) {
  selectedProduct.value = { ...product };
  addProductDialog.value = true;
}

const submitted = ref(false);

const selectedProduct = ref();

const isFree = ref(false);

function determineIsFree(value) {
  const isFreeRes = isFreeValue !== `Платная`;
  request.value.isFree = isFreeRes;
}

const isFreeValue = ref("Бесплатная");
const options = ref(["Платная", "Бесплатная"]);

const value1 = ref(1500);

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

console.log(sports.value);

const fileredSelectedSports = computed(() => {
  return selectedSports.value.map((item) => item.id);
});

function clickOnly() {
  console.log(selectedInstitution.value);
}

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
    fileredSelectedInstitution.value,

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
</script>
