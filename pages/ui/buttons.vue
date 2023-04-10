<template>
  <div class="flex flex-col gap-8">
    <div class="text-4xl pb-8">UI KIT</div>

    <div class="w-full bg-black bg-opacity-10 px-4 py-8">
      <p class="text-3xl pb-8">Buttons</p>
      <div class="flex flex-col gap-4">
        <div>
          <UIButtonDefault label="Default button" />
        </div>

        <div class="flex flex-row gap-8 items-center">
          <BaseButton label="BaseButton" />
          <p>- default BaseButton</p>
        </div>
        <div class="flex flex-row gap-8 items-center">
          <BaseButton color="info" :icon="mdiEye" small />
          <p>- icon BaseButton info</p>
        </div>
        <div class="flex flex-row gap-8 items-center">
          <BaseButton color="danger" :icon="mdiTrashCan" small />
          <p>- icon BaseButton danger</p>
        </div>
      </div>
    </div>

    <FormField label="Settings">
      <FormCheckRadioGroup
        v-model="buttonSettingsModel"
        name="buttons-switch"
        type="switch"
        :options="{
          outline: 'Outline',
          small: 'Small',
          rounded: 'Rounded',
          disabled: 'Disabled',
        }"
      />
    </FormField>

    <div class="w-full px-4 py-8">
      <p class="text-3xl pb-8">Buttons group</p>
      <div class="flex flex-row gap-4">
        <BaseButton
          color="lightDark"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
        <BaseButton
          color="contrast"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
        <BaseButton
          color="info"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
        <BaseButton
          color="success"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
        <BaseButton
          color="warning"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
        <BaseButton
          color="danger"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
      </div>
    </div>

    <div class="w-full px-4 py-8">
      <p class="text-3xl pb-8">Buttons group Icons and text</p>
      <div class="flex flex-row gap-4">
        <BaseButton
          color="lightDark"
          label="Button"
          :icon="mdiOpenInNew"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
        <BaseButton
          color="contrast"
          label="Button"
          :icon="mdiOpenInNew"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
        <BaseButton
          color="info"
          label="Button"
          :icon="mdiOpenInNew"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
        <BaseButton
          color="success"
          label="Button"
          :icon="mdiOpenInNew"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
        <BaseButton
          color="warning"
          label="Button"
          :icon="mdiOpenInNew"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
        <BaseButton
          color="danger"
          label="Button"
          :icon="mdiOpenInNew"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
      </div>
    </div>

    <div class="w-full bg-opacity-10 px-4 py-8">
      <p class="text-3xl pb-8">Buttons group Icons</p>
      <div class="flex flex-row gap-4">
        <BaseButton
          color="lightDark"
          :icon="mdiOpenInNew"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
        <BaseButton
          color="contrast"
          :icon="mdiOpenInNew"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
        <BaseButton
          color="info"
          :icon="mdiOpenInNew"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
        <BaseButton
          color="success"
          :icon="mdiOpenInNew"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
        <BaseButton
          color="warning"
          :icon="mdiOpenInNew"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
        <BaseButton
          color="danger"
          :icon="mdiOpenInNew"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
          :rounded-full="buttonsRounded"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { mdiTrashCan, mdiEye, mdiOpenInNew } from "@mdi/js";

const buttonSettingsModel = ref([]);

const buttonsOutline = computed(() =>
  buttonSettingsModel.value.includes("outline")
);

const buttonsSmall = computed(() =>
  buttonSettingsModel.value.includes("small")
);

const buttonsDisabled = computed(() =>
  buttonSettingsModel.value.includes("disabled")
);

const buttonsRounded = computed(() =>
  buttonSettingsModel.value.includes("rounded")
);
</script>
