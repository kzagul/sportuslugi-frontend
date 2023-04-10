<template>
  <button
    type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    <span v-if="label">{{ label }}</span>
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: [String, Number],
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
  iconSize: {
    type: [String, Number],
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  target: {
    type: String,
    default: null,
  },
  to: {
    type: [String, Object],
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    default: "white",
  },
  as: {
    type: String,
    default: null,
  },
  small: Boolean,
  outline: Boolean,
  active: Boolean,
  disabled: Boolean,
  roundedFull: Boolean,
});
</script>
