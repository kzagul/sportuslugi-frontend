<template>
  <div class="flex flex-col">
    {{ modelValue }} component with props and emits
    <button @click="$emit('update:modelValue', 'Awesome')">Click!</button>
    <nuxt-link to="/institution"> Учреждение </nuxt-link>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>
