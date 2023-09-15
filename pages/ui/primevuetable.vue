<template>
  <div class="card">
    <DataTable
      v-model:filters="filters"
      v-model:selection="selectedProduct"
      :value="sports"
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
      <!-- <Column
        header="Country"
        filter-field="country.name"
        style="min-width: 12rem"
      >
        <template #body="{ data }">
          <div class="flex align-items-center gap-2">
            <img
              alt="flag"
              src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
              :class="`flag flag-${data.country.code}`"
              style="width: 24px"
            />
            <span>{{ data.country.name }}</span>
          </div>
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            type="text"
            class="p-column-filter"
            placeholder="Search by country"
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
            <img
              :alt="data.representative.name"
              :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`"
              style="width: 32px"
            />
            <span>{{ data.representative.name }}</span>
          </div>
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <MultiSelect
            v-model="filterModel.value"
            :options="representatives"
            option-label="name"
            placeholder="Any"
            class="p-column-filter"
            style="min-width: 14rem"
            :max-selected-labels="1"
            @change="filterCallback()"
          >
            <template #option="slotProps">
              <div class="flex align-items-center gap-2">
                <img
                  :alt="slotProps.option.name"
                  :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`"
                  style="width: 32px"
                />
                <span>{{ slotProps.option.name }}</span>
              </div>
            </template>
          </MultiSelect>
        </template>
      </Column> -->
      <!-- <Column
        field="status"
        header="Status"
        :show-filter-menu="false"
        :filter-menu-style="{ width: '14rem' }"
        style="min-width: 12rem"
      >
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" />
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <Dropdown
            v-model="filterModel.value"
            :options="statuses"
            placeholder="Select One"
            class="p-column-filter"
            style="min-width: 12rem"
            :show-clear="true"
            @change="filterCallback()"
          >
            <template #option="slotProps">
              <Tag
                :value="slotProps.option"
                :severity="getSeverity(slotProps.option)"
              />
            </template>
          </Dropdown>
        </template>
      </Column> -->
      <Column field="redirect" style="min-width: 6rem">
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
      <Column
        :row-editor="true"
        style="width: 10%; min-width: 8rem"
        body-style="text-align:center"
      ></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { FilterMatchMode } from "primevue/api";
import { mdiArrowUpLeft } from "@mdi/js";

import { useSportStore } from "~~/stores/sport";

const sportStore = useSportStore();

await sportStore.fetchSports();

const sports = computed(() => {
  return sportStore.getSports;
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
function redirectToPage(id) {
  // router.push({ path, query });
  router.push(`/sport/${id}`);
}

onMounted(() => {
  loading.value = false;
});

const getCustomers = (data) => {
  return [...(data || [])].map((d) => {
    d.date = new Date(d.date);

    return d;
  });
};
const formatDate = (value) => {
  return value.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const getSeverity = (status) => {
  switch (status) {
    case "unqualified":
      return "danger";

    case "qualified":
      return "success";

    case "new":
      return "info";

    case "negotiation":
      return "warning";

    case "renewal":
      return null;
  }
};
</script>
