<script setup>
// import { mdiCheckDecagram } from "@mdi/js";
// import { useMainStore } from "@/stores/main";
// import BaseLevel from "@/components/BaseLevel.vue";
// import UserAvatarCurrentUser from "@/components/UserAvatarCurrentUser.vue";
// import CardBox from "@/components/CardBox.vue";
// import PillTag from "@/components/PillTag.vue";

// const mainStore = useMainStore();

// const userName = computed(() => mainStore.userName);
const userName = ref("Mike");
</script>

<template>
  <CardBox>
    <div type="justify-around lg:justify-center">
      <!-- <UserAvatarCurrentUser class="lg:mx-12" /> -->
      <div class="space-y-3 text-center md:text-left lg:mx-12">
        <div class="flex justify-center md:block">
          <h1 class="text-2xl">
            Howdy, <b>{{ userName }}</b
            >!
          </h1>
          <p>Last login <b>12 mins ago</b> from <b>127.0.0.1</b></p>
          <div class="flex justify-center md:block">
            <PillTag label="Verified" color="info" :icon="mdiCheckDecagram" />
          </div>
        </div>
      </div>
    </div>
  </CardBox>
</template>
