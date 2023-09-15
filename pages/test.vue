<template>
  <div>
    <form @submit="uploadPhoto">
      <input ref="input" type="file" @change="onChange" />
      <button type="submit">Upload</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/user";

const authStore = useUserStore();

await authStore.getUser();

const userData = ref({
  name: authStore.user?.name as string,
  image: "" as any,
  // image: "новоефото",
});

const input = ref();

const file = ref("");

const onChange = (event: any) => {
  file.value = event.target.files[0];
};

console.log(input.value);

const uploadPhoto = (event: any) => {
  event.preventDefault();

  const formData = new FormData();

  formData.append("image", file.value);
  //   userData.value.image = formData;

  //   for (const value of formData.values()) {
  //     console.log(value);
  //   }

  //   userData.value.image = input.value.files[0];
  userData.value.image = formData;

  //   updateUserImage(authStore.user);
  authStore.putUserPhoto(
    authStore.user!.id,
    authStore.user!.name,
    // authStore.user!.verified_moderator,
    // userData?.value.image
    "hello world"
  );

  //   console.log(userData.value.image);
  console.log(input.value.files[0]);
  console.log(formData);

  //   const formData = new FormData();
  //   formData.append("photo", fileInput.value.files[0]);

  //   console.log(fileInput.value.files[0]);
  //   const response = await await fetchApi(`/api/user/${userId}`, {

  //     formData
  //   })

  //   console.log(response.data);
};
</script>
