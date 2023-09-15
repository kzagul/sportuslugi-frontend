<script setup>
const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  ratingContent: {
    type: String,
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
});
</script>

<template>
  <div class="flex flex-col items-start bg-gray-10 rounded-lg shadow p-4">
    <div class="flex justify-between w-full mb-3">
      <div>
        <span class="block font-medium mb-3">{{ props.title }}</span>
        <div class="font-medium text-3xl">
          {{ rating.institutionMedianRating }}
        </div>
      </div>
      <div
        v-if="icon"
        class="flex items-center justify-center bg-blue-100 rounded-full w-10 h-10"
      >
        <BaseIcon
          :path="icon"
          :size="iconSize"
          class="flex justify-center items-center"
        />
      </div>
    </div>

    <slot />
    <!-- <span class="text-green-500 font-medium">24 new </span>
          <span class="text-sm">since last visit</span> -->
  </div>
</template>
