import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Dropdown from "primevue/dropdown";
import Rating from "primevue/rating";
import Tag from "primevue/tag";
import Tree from "primevue/tree";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";

import Chart from "primevue/chart";
import Image from "primevue/image";

import DataView from "primevue/dataview";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";

import ScrollTop from "primevue/scrolltop";
import Dialog from "primevue/dialog";
import Message from "primevue/message";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("Toast", Toast);
  nuxtApp.vueApp.component("Dropdown", Dropdown);
  nuxtApp.vueApp.component("Rating", Rating);
  nuxtApp.vueApp.component("Tag", Tag);
  nuxtApp.vueApp.component("Tree", Tree);

  nuxtApp.vueApp.component("DataTable", DataTable);
  nuxtApp.vueApp.component("Column", Column);
  nuxtApp.vueApp.component("ColumnGroup", ColumnGroup);
  nuxtApp.vueApp.component("Row", Row);

  nuxtApp.vueApp.component("Chart", Chart);
  nuxtApp.vueApp.component("Image", Image);

  nuxtApp.vueApp.component("DataView", DataView);
  nuxtApp.vueApp.component("DataViewLayoutOptions", DataViewLayoutOptions);

  nuxtApp.vueApp.component("ScrollTop", ScrollTop);
  nuxtApp.vueApp.component("Dialog", Dialog);
  nuxtApp.vueApp.component("Message", Message);
});
