<script setup>
import { computed, ref } from "vue";
import { mdiEye, mdiTrashCan } from "@mdi/js";
import { useMainStore } from "@/stores/main";
import CardBoxModal from "@/components/CardBoxModal.vue";
import TableCheckboxCell from "@/components/TableCheckboxCell.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
import UserAvatar from "@/components/UserAvatar.vue";

defineProps({
  checkable: Boolean,
});

const mainStore = useMainStore();

// const items = computed(() => mainStore.clients);
const items = computed(() => [
  {
    id: 19,
    avatar: `/images/home_logo.png`,
    login: "percy64",
    name: "Howell Hand",
    company: "Kiehn-Green",
    city: "Emelyside",
    progress: 70,
    created: "Mar 3, 2021",
    created_mm_dd_yyyy: "03-03-2021",
  },
  {
    id: 11,
    avatar: "https:\/\/avatars.dicebear.com\/v2\/gridy\/Hope-Howe.svg",
    login: "dare.concepcion",
    name: "Hope Howe",
    company: "Nolan Inc",
    city: "Paristown",
    progress: 68,
    created: "Dec 1, 2021",
    created_mm_dd_yyyy: "12-01-2021",
  },
  {
    id: 32,
    avatar: "https:\/\/avatars.dicebear.com\/v2\/gridy\/Nelson-Jerde.svg",
    login: "geovanni.kessler",
    name: "Nelson Jerde",
    company: "Nitzsche LLC",
    city: "Jailynbury",
    progress: 49,
    created: "May 18, 2021",
    created_mm_dd_yyyy: "05-18-2021",
  },
  {
    id: 22,
    avatar: "https:\/\/avatars.dicebear.com\/v2\/gridy\/Kim-Weimann.svg",
    login: "macejkovic.dashawn",
    name: "Kim Weimann",
    company: "Brown-Lueilwitz",
    city: "New Emie",
    progress: 38,
    created: "May 4, 2021",
    created_mm_dd_yyyy: "05-04-2021",
  },
  {
    id: 34,
    avatar: "https:\/\/avatars.dicebear.com\/v2\/gridy\/Justice-OReilly.svg",
    login: "hilpert.leora",
    name: "Justice O'Reilly",
    company: "Lakin-Muller",
    city: "New Kacie",
    progress: 38,
    created: "Mar 27, 2021",
    created_mm_dd_yyyy: "03-27-2021",
  },
  {
    id: 48,
    avatar: "https:\/\/avatars.dicebear.com\/v2\/gridy\/Adrienne-Mayer-III.svg",
    login: "ferry.sophia",
    name: "Adrienne Mayer III",
    company: "Kozey, McLaughlin and Kuhn",
    city: "Howardbury",
    progress: 39,
    created: "Mar 29, 2021",
    created_mm_dd_yyyy: "03-29-2021",
  },
  {
    id: 20,
    avatar: "https:\/\/avatars.dicebear.com\/v2\/gridy\/Mr.-Julien-Ebert.svg",
    login: "gokuneva",
    name: "Mr. Julien Ebert",
    company: "Cormier LLC",
    city: "South Serenaburgh",
    progress: 29,
    created: "Jun 25, 2021",
    created_mm_dd_yyyy: "06-25-2021",
  },
  {
    id: 47,
    avatar: "https:\/\/avatars.dicebear.com\/v2\/gridy\/Lenna-Smitham.svg",
    login: "paolo.walter",
    name: "Lenna Smitham",
    company: "King Inc",
    city: "McCulloughfort",
    progress: 59,
    created: "Oct 8, 2021",
    created_mm_dd_yyyy: "10-08-2021",
  },
  {
    id: 24,
    avatar: "https:\/\/avatars.dicebear.com\/v2\/gridy\/Travis-Davis.svg",
    login: "lkessler",
    name: "Travis Davis",
    company: "Leannon and Sons",
    city: "West Frankton",
    progress: 52,
    created: "Oct 20, 2021",
    created_mm_dd_yyyy: "10-20-2021",
  },
  {
    id: 49,
    avatar:
      "https:\/\/avatars.dicebear.com\/v2\/gridy\/Prof.-Esteban-Steuber.svg",
    login: "shana.lang",
    name: "Prof. Esteban Steuber",
    company: "Langosh-Ernser",
    city: "East Sedrick",
    progress: 34,
    created: "May 16, 2021",
    created_mm_dd_yyyy: "05-16-2021",
  },
  {
    id: 36,
    avatar: "https:\/\/avatars.dicebear.com\/v2\/gridy\/Russell-Goodwin-V.svg",
    login: "jewel07",
    name: "Russell Goodwin V",
    company: "Nolan-Stracke",
    city: "Williamsonmouth",
    progress: 55,
    created: "Apr 22, 2021",
    created_mm_dd_yyyy: "04-22-2021",
  },
  {
    id: 33,
    avatar:
      "https:\/\/avatars.dicebear.com\/v2\/gridy\/Ms.-Cassidy-Wiegand-DVM.svg",
    login: "burnice.okuneva",
    name: "Ms. Cassidy Wiegand DVM",
    company: "Kuhlman-Hahn",
    city: "New Ruthiehaven",
    progress: 76,
    created: "Sep 16, 2021",
    created_mm_dd_yyyy: "09-16-2021",
  },
  {
    id: 44,
    avatar:
      "https:\/\/avatars.dicebear.com\/v2\/gridy\/Mr.-Watson-Brakus-PhD.svg",
    login: "oconnell.juanita",
    name: "Mr. Watson Brakus PhD",
    company: "Osinski, Bins and Kuhn",
    city: "Lake Gloria",
    progress: 58,
    created: "Jun 22, 2021",
    created_mm_dd_yyyy: "06-22-2021",
  },
  {
    id: 46,
    avatar:
      "https:\/\/avatars.dicebear.com\/v2\/gridy\/Mr.-Garrison-Friesen-V.svg",
    login: "vgutmann",
    name: "Mr. Garrison Friesen V",
    company: "VonRueden, Rippin and Pfeffer",
    city: "Port Cieloport",
    progress: 39,
    created: "Oct 19, 2021",
    created_mm_dd_yyyy: "10-19-2021",
  },
  {
    id: 14,
    avatar: "https:\/\/avatars.dicebear.com\/v2\/gridy\/Ms.-Sister-Morar.svg",
    login: "veum.lucio",
    name: "Ms. Sister Morar",
    company: "Gusikowski, Altenwerth and Abbott",
    city: "Lake Macville",
    progress: 34,
    created: "Jun 11, 2021",
    created_mm_dd_yyyy: "06-11-2021",
  },
  {
    id: 40,
    avatar: "https:\/\/avatars.dicebear.com\/v2\/gridy\/Ms.-Laisha-Reinger.svg",
    login: "edietrich",
    name: "Ms. Laisha Reinger",
    company: "Boehm PLC",
    city: "West Alexiemouth",
    progress: 73,
    created: "Nov 2, 2021",
    created_mm_dd_yyyy: "11-02-2021",
  },
  {
    id: 5,
    avatar: "https:\/\/avatars.dicebear.com\/v2\/gridy\/Cameron-Lind.svg",
    login: "mose44",
    name: "Cameron Lind",
    company: "Tremblay, Padberg and Pouros",
    city: "Naderview",
    progress: 59,
    created: "Sep 14, 2021",
    created_mm_dd_yyyy: "09-14-2021",
  },
  {
    id: 43,
    avatar: "https:\/\/avatars.dicebear.com\/v2\/gridy\/Sarai-Little.svg",
    login: "rau.abelardo",
    name: "Sarai Little",
    company: "Deckow LLC",
    city: "Jeanieborough",
    progress: 49,
    created: "Jun 13, 2021",
    created_mm_dd_yyyy: "06-13-2021",
  },
  {
    id: 2,
    avatar: "https:\/\/avatars.dicebear.com\/v2\/gridy\/Shyann-Kautzer.svg",
    login: "imurazik",
    name: "Shyann Kautzer",
    company: "Osinski, Boehm and Kihn",
    city: "New Alvera",
    progress: 41,
    created: "Feb 15, 2021",
    created_mm_dd_yyyy: "02-15-2021",
  },
  {
    id: 15,
    avatar: "https:\/\/avatars.dicebear.com\/v2\/gridy\/Lorna-Christiansen.svg",
    login: "annalise97",
    name: "Lorna Christiansen",
    company: "Altenwerth-Friesen",
    city: "Port Elbertland",
    progress: 36,
    created: "Mar 9, 2021",
    created_mm_dd_yyyy: "03-09-2021",
  },
]);

const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const perPage = ref(5);

const currentPage = ref(0);

const checkedRows = ref([]);

const itemsPaginated = computed(() =>
  items.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() => Math.ceil(items.value.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});

const remove = (arr, cb) => {
  const newArr = [];

  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item);
    }
  });

  return newArr;
};

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client);
  } else {
    checkedRows.value = remove(
      checkedRows.value,
      (row) => row.id === client.id
    );
  }
};
</script>

<template>
  <CardBoxModal v-model="isModalActive" title="Sample modal">
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalDangerActive"
    title="Please confirm"
    button="danger"
    has-cancel
  >
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <div v-if="checkedRows.length" class="p-3 bg-gray-100/50 dark:bg-slate-800">
    <span
      v-for="checkedRow in checkedRows"
      :key="checkedRow.id"
      class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"
    >
      {{ checkedRow.name }}
    </span>
  </div>

  <table class="w-full">
    <thead>
      <tr>
        <th v-if="checkable" />
        <th />
        <th>Name</th>
        <th>Company</th>
        <th>City</th>
        <!-- <th>Progress</th>
        <th>Created</th> -->
        <th />
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in itemsPaginated" :key="client.id">
        <TableCheckboxCell
          v-if="checkable"
          @checked="checked($event, client)"
        />
        <td class="border-b-0 lg:w-6 before:hidden">
          <!-- <UserAvatar
            :username="client.name"
            :avatar="avatar"
            class="w-24 h-24 mx-auto lg:w-6 lg:h-6"
          /> -->
          <img src="/images/home_logo.png" alt="" class="w-10 h-10" />
        </td>
        <td data-label="Name">
          {{ client.name }}
        </td>
        <td data-label="Company">
          {{ client.company }}
        </td>
        <td data-label="City">
          {{ client.city }}
        </td>
        <!-- <td data-label="Progress" class="lg:w-32">
          <progress
            class="flex w-2/5 self-center lg:w-full"
            max="100"
            :value="client.progress"
          >
            {{ client.progress }}
          </progress>
        </td> -->
        <!-- <td data-label="Created" class="lg:w-1 whitespace-nowrap">
          <small
            class="text-gray-500 dark:text-slate-400"
            :title="client.created"
            >{{ client.created }}</small
          >
        </td> -->
        <td class="before:hidden lg:w-1 whitespace-nowrap">
          <BaseButtons type="justify-start lg:justify-end" no-wrap>
            <BaseButton
              color="info"
              :icon="mdiEye"
              small
              @click="isModalActive = true"
            />
            <BaseButton
              color="danger"
              :icon="mdiTrashCan"
              small
              @click="isModalDangerActive = true"
            />
          </BaseButtons>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
    <BaseLevel>
      <BaseButtons>
        <BaseButton
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page + 1"
          :color="page === currentPage ? 'lightDark' : 'whiteDark'"
          small
          @click="currentPage = page"
        />
      </BaseButtons>
      <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
    </BaseLevel>
  </div>
</template>
