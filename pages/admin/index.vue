<script setup lang="ts">
import { useUserStore } from "~~/stores/user";
definePageMeta({
  middleware: ["admin-only"],
  layout: false,
});

const authStore = useUserStore();
</script>

<template>
  <NuxtLayout name="admin">
    <div>
      <div v-if="authStore.isAdmin" class="text-2xl py-12">Админ панель</div>
      <div v-else>Нет доступа</div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <div class="flex justify-between w-full mb-3">
            <div>
              <span class="block font-medium mb-3">Orders</span>
              <div class="font-medium text-xl">152</div>
            </div>
            <div
              class="flex items-center justify-center bg-blue-100 rounded-full"
              style="width: 2.5rem; height: 2.5rem"
            >
              <i class="pi pi-shopping-cart text-blue-500 text-xl" />
            </div>
          </div>
          <span class="text-green-500 font-medium">24 new </span>
          <span class="text-sm">since last visit</span>
        </div>

        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <div class="flex justify-between w-full mb-3">
            <div>
              <span class="block font-medium mb-3">Revenue</span>
              <div class="font-medium text-xl">$2.100</div>
            </div>
            <div
              class="flex items-center justify-center bg-blue-100 rounded-full"
              style="width: 2.5rem; height: 2.5rem"
            >
              <i class="pi pi-map-marker text-orange-500 text-xl" />
            </div>
          </div>
          <span class="text-green-500 font-medium">%52+ </span>
          <span class="text-sm">since last week</span>
        </div>

        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <div class="flex justify-between w-full mb-3">
            <div>
              <span class="block font-medium mb-3">Customers</span>
              <div class="font-medium text-xl">28441</div>
            </div>
            <div
              class="flex items-center justify-center bg-blue-100 rounded-full"
              style="width: 2.5rem; height: 2.5rem"
            >
              <i class="pi pi-inbox text-cyan-500 text-xl" />
            </div>
          </div>
          <span class="text-green-500 font-medium">520 </span>
          <span class="text-sm">newly registered</span>
        </div>

        <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
          <div class="flex justify-between w-full mb-3">
            <div>
              <span class="block font-medium mb-3">Comments</span>
              <div class="font-medium text-xl">152 Unread</div>
            </div>
            <div
              class="flex items-center justify-center bg-blue-100 rounded-full"
              style="width: 2.5rem; height: 2.5rem"
            >
              <i class="pi pi-comment text-purple-500 text-xl" />
            </div>
          </div>
          <span class="text-green-500 font-medium">85 </span>
          <span class="text-sm">responded</span>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
