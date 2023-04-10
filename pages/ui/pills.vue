<template>
  <div class="flex flex-col gap-8">
    <div class="text-4xl pb-8">UI KIT</div>

    <div class="w-full bg-black bg-opacity-10 px-4 py-8">
      <p class="text-3xl">Pills</p>
    </div>

    <FormField label="Settings">
      <FormCheckRadioGroup
        v-model="pillsSettingsModel"
        name="buttons-switch"
        type="switch"
        :options="{ outline: 'Outline', small: 'Small', icon: 'Icon' }"
      />
    </FormField>

    <div class="w-full px-4 py-8">
      <p class="text-3xl pb-8">Buttons group</p>
      <div class="flex flex-row gap-4">
        <PillTag
          color="contrast"
          label="Contrast"
          :small="pillsSmall"
          :outline="pillsOutline"
          :icon="pillsIcon"
        />
        <PillTag
          color="info"
          label="Info"
          :small="pillsSmall"
          :outline="pillsOutline"
          :icon="pillsIcon"
        />
        <PillTag
          color="success"
          label="Success"
          :small="pillsSmall"
          :outline="pillsOutline"
          :icon="pillsIcon"
        />
        <PillTag
          color="warning"
          label="Warning"
          :small="pillsSmall"
          :outline="pillsOutline"
          :icon="pillsIcon"
        />
        <PillTag
          color="danger"
          label="Danger"
          :small="pillsSmall"
          :outline="pillsOutline"
          :icon="pillsIcon"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { mdiTrendingUp } from "@mdi/js";
const pillsSettingsModel = ref(["icon"]);

const pillsOutline = computed(() =>
  pillsSettingsModel.value.includes("outline")
);

const pillsSmall = computed(() => pillsSettingsModel.value.includes("small"));

const pillsIcon = computed(() =>
  pillsSettingsModel.value.includes("icon") ? mdiTrendingUp : null
);
</script>
