<template>
  <div>
    <VField v-slot="{ field, meta, errors }" :name="name">
      <label
        :for="name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        :class="{
          'font-medium text-green-700 dark:text-green-500':
            meta.valid && meta.touched,
          'font-medium text-red-700 dark:text-red-500':
            !meta.valid && meta.touched,
        }"
        >{{ label }}</label
      >
      <input
        v-bind="field"
        class="bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        :class="{
          'bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500':
            meta.valid && meta.touched,
          'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500':
            !meta.valid && meta.touched,
        }"
        :placeholder="placeholder"
        :type="type"
      />
      <VErrorMessage
        :name="name"
        as="div"
        class="mt-2 text-sm text-red-600 dark:text-red-500"
      />
    </VField>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  leftIcon: {
    type: String,
    default: "",
  },
});
</script>

<style></style>
