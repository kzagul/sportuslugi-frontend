<template>
  <div class="flex flex-col gap-8">
    <div class="text-4xl pb-8">UI KIT</div>

    <div class="w-full bg-black bg-opacity-10 px-4 py-8">
      <p class="text-3xl">PrimeVue</p>
    </div>

    <div class="flex flex-column align-items-center mt-1">
      <Toast />

      <div class="mt-4">
        <form @submit.prevent="greet">
          <InputText v-model="text" type="text" />
          <Button type="submit" label="Submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
const text = ref();
const toast = useToast();
const greet = () => {
  toast.add({ severity: "info", summary: "Hello " + text.value });
};
</script>
