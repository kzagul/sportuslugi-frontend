<template>
  <Html>
    <Head>
      <Title>{{ getSeoForPage(useRoute().path).title }}</Title>
      <Meta
        name="description"
        :content="getSeoForPage(useRoute().path).description"
      />
    </Head>
    <Body>
      <NuxtLayout>
        <!-- <VitePwaManifest /> -->
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup>
const { getSeoForPage } = useSEO();
</script>
