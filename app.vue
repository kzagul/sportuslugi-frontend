<template>
  <Html>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" content="Агрегатор спортивных услуг" />
    </Head>
    <Body>
      <NuxtLayout>
        <!-- <VitePwaManifest /> -->
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup>
const title = ref("Спорт-услуги");
</script>
