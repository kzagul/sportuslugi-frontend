import plugin, {
  YandexMap,
  YandexMarker,
  YandexClusterer,
} from "vue-yandex-maps";
import { defineNuxtPlugin } from "nuxt/app";

const settings = {
  apiKey: "a51b58f6-94cb-44ed-a2af-b46b92b9732b",
  lang: "ru_RU",
  coordorder: "latlong",
  debug: false,
  version: "2.1",
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(plugin, settings);
  nuxtApp.vueApp.component("YandexMap", YandexMap);
  nuxtApp.vueApp.component("YandexMarker", YandexMarker);
  nuxtApp.vueApp.component("YandexClusterer", YandexClusterer);
});
