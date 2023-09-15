<template>
  <div>
    <button
      type="button"
      class="flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
      @click="addProductDialogShow"
    >
      <BaseIcon :path="mdiPlus" :size="24" />
      Добавить учреждение
    </button>
    <!-- <button
      type="button"
      class="flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
      @click="addProductDialogShow"
    >
      <BaseIcon :path="mdiPlus" :size="24" />
      Добавить Учреждение
    </button> -->

    <Dialog
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

        <MultiSelect
          v-model="selectedSports"
          :options="sports"
          filter
          option-label="name"
          placeholder="Выбор видов спорта"
          class="w-full md:w-20rem"
        />

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
          <BaseIcon :path="mdiCheck" :size="24" />
          Добавить
        </Button>
        <!-- @click="deleteProduct" -->
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { mdiClose, mdiCheck, mdiPlus } from "@mdi/js";

// import { useServiceStore } from "~~/stores/service";

const serviceStore = useServiceStore();
const { postService } = serviceStore;

const addProductDialog = ref(false);

function addProductDialogShow(product) {
  selectedProduct.value = { ...product };
  addProductDialog.value = true;
}

const submitted = ref(false);

const selectedProduct = ref();

const request = ref({
  name: "",
  sports: "",
  institutions: "",
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

// const sports = ref([
//   { name: "New York", code: "NY" },
//   { name: "Rome", code: "RM" },
//   { name: "London", code: "LDN" },
//   { name: "Istanbul", code: "IST" },
//   { name: "Paris", code: "PRS" },
// ]);

function addProduct() {
  postService(
    request?.value.name,
    fileredSelectedSports.value,
    fileredSelectedInstitution.value
  );
  addProductDialog.value = false;
  //   toast.add({
  //     severity: "success",
  //     summary: "Успешно",
  //     detail: "Новая услуга добавлена",
  //     life: 3000,
  //   });
}
</script>
