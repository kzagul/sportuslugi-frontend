import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Dropdown from "primevue/dropdown";
import Rating from "primevue/rating";
import Tag from "primevue/tag";
import Tree from "primevue/tree";
import MultiSelect from "primevue/multiselect";
import AutoComplete from "primevue/autocomplete";
import Checkbox from "primevue/checkbox";
import InputSwitch from "primevue/inputswitch";
import SelectButton from "primevue/selectbutton";
import InputNumber from "primevue/inputnumber";
import Textarea from "primevue/textarea";
import Steps from "primevue/steps";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";

import Chart from "primevue/chart";
import Image from "primevue/image";
import FileUpload from "primevue/fileupload";

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
  nuxtApp.vueApp.component("MultiSelect", MultiSelect);
  nuxtApp.vueApp.component("AutoComplete", AutoComplete);
  nuxtApp.vueApp.component("Checkbox", Checkbox);
  nuxtApp.vueApp.component("InputSwitch", InputSwitch);
  nuxtApp.vueApp.component("SelectButton", SelectButton);
  nuxtApp.vueApp.component("InputNumber", InputNumber);
  nuxtApp.vueApp.component("Textarea", Textarea);
  nuxtApp.vueApp.component("Steps", Steps);

  nuxtApp.vueApp.component("DataTable", DataTable);
  nuxtApp.vueApp.component("Column", Column);
  nuxtApp.vueApp.component("ColumnGroup", ColumnGroup);
  nuxtApp.vueApp.component("Row", Row);

  nuxtApp.vueApp.component("Chart", Chart);
  nuxtApp.vueApp.component("Image", Image);
  nuxtApp.vueApp.component("FileUpload", FileUpload);

  nuxtApp.vueApp.component("DataView", DataView);
  nuxtApp.vueApp.component("DataViewLayoutOptions", DataViewLayoutOptions);

  nuxtApp.vueApp.component("ScrollTop", ScrollTop);
  nuxtApp.vueApp.component("Dialog", Dialog);
  nuxtApp.vueApp.component("Message", Message);
});
