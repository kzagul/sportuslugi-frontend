<template>
  <div class="card">
    <DataTable
      v-model:filters="filters"
      v-model:selection="selectedProduct"
      :value="services"
      paginator
      selection-mode="single"
      :rows="8"
      data-key="id"
      filter-display="row"
      :loading="loading"
      :global-filter-fields="[
        'name',
        'country.name',
        'representative.name',
        'status',
      ]"
      edit-mode="row"
      @row-select="redirectToPage(selectedProduct.id)"
    >
      <template #header>
        <div class="flex justify-content-end">
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="filters['global'].value" placeholder="Поиск" />
          </span>
        </div>
      </template>
      <template #empty> No customers found. </template>
      <template #loading> Loading customers data. Please wait. </template>
      <Column
        field="name"
        header="Название"
        style="min-width: 12rem"
        sortable
        filter
      >
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
      <Column field="redirect" style="min-width: 2rem">
        <template #body="{ data }">
          <button
            class="flex flex-row gap-2 justify-center items-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            @click="redirectToPage(data.name)"
          >
            <BaseIcon :path="mdiArrowUpLeft" :size="20" />
            Перейти
          </button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { FilterMatchMode } from "primevue/api";
import { mdiArrowUpLeft } from "@mdi/js";

import { useServiceStore } from "~/stores/service";

const serviceStore = useServiceStore();

await serviceStore.fetchServices();

const services = computed(() => {
  return serviceStore.getServices;
});

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  "country.name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  representative: { value: null, matchMode: FilterMatchMode.IN },
  status: { value: null, matchMode: FilterMatchMode.EQUALS },
  verified: { value: null, matchMode: FilterMatchMode.EQUALS },
});

const loading = ref(true);

const selectedProduct = ref();

const router = useRouter();
function redirectToPage(name) {
  // router.push({ path, query });
  router.push(`/institution/${name}`);
}

onMounted(() => {
  loading.value = false;
});
</script>
