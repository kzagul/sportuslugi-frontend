<template>
  <VField v-slot="{ field, meta, errors }" :name="name">
    <div
      v-for="(item, index) in confirmLenght"
      :key="index"
      :ref="
        (el) => {
          if (el) divs[index] = el;
        }
      "
    >
      <label :for="'code-' + index" class="sr-only">{{ index }} code</label>
      <input
        :id="'code-' + index"
        v-model="codeValue[index]"
        type="text"
        maxlength="1"
        class="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        required
        @input="setCodeValue"
        @keyup="focusNextInput(divs[index], index, index + 1)"
      />
    </div>
    <VErrorMessage
      :name="name"
      as="div"
      class="mt-2 text-sm text-red-600 dark:text-red-500"
    />
  </VField>
</template>

<script setup>
import { useField } from "vee-validate";
import { reactive, watch } from "vue";

const codeValue = ref([]);
const { value: fieldValue } = reactive(useField(props.name));
const divs = ref([]);

function setCodeValue() {
  fieldValue.value = codeValue.value.join("");
}

const props = defineProps({
  confirmLenght: {
    type: Number,
    default: 1,
  },
  name: {
    type: String,
    required: true,
  },
});

function focusNextInput(el, prevId, nextId) {
  if (nextId >= props.confirmLenght) {
    document.getElementById("code-" + prevId).focus();
  } else {
    document.getElementById("code-" + nextId).focus();
  }
}
</script>

<style></style>
