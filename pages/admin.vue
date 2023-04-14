<script lang="ts" setup>
// import { useAuthUser } from "~~/composables/auth";
// import { useUserStore } from "~~/stores/user";

// const authStore = useUserStore();
definePageMeta({
  middleware: ["admin-only"],
});

// onMounted(async () => {
//   await authStore.getUser();
//   await authStore.getUserRoles();
// });

// const { data: users } = await useAsyncData("users", () =>
//   $fetch("/api/users", {
//     headers: useRequestHeaders(["cookie"]) as HeadersInit,
//   })
// );

// const currentUser = useAuthUser();
</script>

<template>
  <div>
    <PageTitle title="Admin page" />
    <PageDescription
      description="This page should only be visible if user is connected and has admin role"
    />
    <!-- <PageUser :user="currentUser" />
    <div mb-3 text-light-100>
      <div table w-full>
        <div table-header-group font-bold>
          <div table-row>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Roles</TableHeaderCell>
          </div>
        </div>
        <div table-row-group>
          <div v-for="user in users" :key="user.id" table-row>
            <TableBodyCell>{{ user.id }}</TableBodyCell>
            <TableBodyCell>{{ user.email }}</TableBodyCell>
            <TableBodyCell>{{ user.roles.join(", ") }}</TableBodyCell>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
