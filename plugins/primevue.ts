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
import InputMask from "primevue/inputmask";
import Textarea from "primevue/textarea";
import Steps from "primevue/steps";
import Calendar from "primevue/calendar";

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
import Tooltip from "primevue/tooltip";

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
  nuxtApp.vueApp.component("InputMask", InputMask);
  nuxtApp.vueApp.component("Textarea", Textarea);
  nuxtApp.vueApp.component("Steps", Steps);
  nuxtApp.vueApp.component("Calendar", Calendar);

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
  // nuxtApp.vueApp.component("Tooltip", Tooltip);
  nuxtApp.vueApp.directive("Tooltip", Tooltip);

  nuxtApp.vueApp.use(PrimeVue, {
    locale: {
      startsWith: "Начинается с",
      contains: "Содержит",
      notContains: "Не содержит",
      endsWith: "Заканчивается",
      equals: "Равно",
      notEquals: "Не равно",
      noFilter: "Нет фильтра",
      filter: "Фильтр",
      lt: "Меньше чем",
      lte: "Меньше чем или равно",
      gt: "Более чем",
      gte: "Более чем или равно",
      dateIs: "Дата равна",
      dateIsNot: "Дата не равна",
      dateBefore: "Дата до",
      dateAfter: "Дата после",
      custom: "Пользовательский",
      clear: "Очистить",
      apply: "Принять",
      matchAll: "Сопоставить все",
      matchAny: "Совпадение с любым",
      addRule: "Добавить правило",
      removeRule: "Удалить правило",
      accept: "Да",
      reject: "Нет",
      choose: "Выбрать",
      upload: "Загрузить",
      cancel: "Отмена",
      completed: "Завершено",
      pending: "В ожидании",
      dayNames: [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
      ],
      dayNamesShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"],
      dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      monthNames: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      monthNamesShort: [
        "Янв",
        "Фев",
        "Мар",
        "Апр",
        "Май",
        "Июн",
        "Июл",
        "Авг",
        "Сен",
        "Окт",
        "Ноя",
        "Дек",
      ],
      chooseYear: "Выбрать год",
      chooseMonth: "Выбрать месяц",
      chooseDate: "Выбрать дату",
      prevDecade: "Предыдущее десятилетие",
      nextDecade: "Следующее десятилетие",
      prevYear: "Предыдущий год",
      nextYear: "Следующий год",
      prevMonth: "Предыдущий месяц",
      nextMonth: "Следующий месяц",
      prevHour: "Предыдущий час",
      nextHour: "Следующий час",
      prevMinute: "Предыдущая минута",
      nextMinute: "Следующая минута",
      prevSecond: "Предыдущая секунда",
      nextSecond: "Следующая секунда",
      am: "до полудня",
      pm: "после полудня",
      today: "Сегодня",
      weekHeader: "Нед.",
      firstDayOfWeek: 1,
      dateFormat: "dd.mm.yyyy",
      weak: "Простой",
      medium: "Нормальный",
      strong: "Хороший",
      passwordPrompt: "Введите пароль",
      emptyFilterMessage: "Результатов не найдено",
      searchMessage: "{0} результатов доступно",
      selectionMessage: "{0} элементов выбрано",
      emptySelectionMessage: "Нет выбранного элемента",
      emptySearchMessage: "Результатов не найдено",
      emptyMessage: "Нет доступных вариантов",
      aria: {
        trueLabel: "Верно",
        falseLabel: "Неверно",
        nullLabel: "Не выбран",
        star: "1 звезда",
        stars: "{star} звёзд",
        selectAll: "Выбраны все элементы",
        unselectAll: "Все элементы не выбраны",
        close: "Закрыть",
        previous: "Предыдущий",
        next: "Следующий",
        navigation: "Навигация",
        scrollTop: "Прокрутить в начало",
        moveTop: "Переместить в начало",
        moveUp: "Переместить вверх",
        moveDown: "Переместить вниз",
        moveBottom: "Переместить в конец",
        moveToTarget: "Переместить в приёмник",
        moveToSource: "Переместить в источник",
        moveAllToTarget: "Переместить всё в приёмник",
        moveAllToSource: "Переместить всё в источник",
        pageLabel: "{page}",
        firstPageLabel: "Первая страница",
        lastPageLabel: "Последняя страница",
        nextPageLabel: "Следующая страница",
        previousPageLabel: "Предыдущая страница",
        rowsPerPageLabel: "Строк на странице",
        jumpToPageDropdownLabel: "Перейти к раскрывающемуся списку страниц",
        jumpToPageInputLabel: "Перейти к вводу страницы",
        selectRow: "Выбрана строка",
        unselectRow: "Строка не выбрана",
        expandRow: "Строка развёрнута",
        collapseRow: "Строка свёрнута",
        showFilterMenu: "Показать меню фильтра",
        hideFilterMenu: "Скрыть меню фильтра",
        filterOperator: "Оператор фильтра",
        filterConstraint: "Ограничение фильтра",
        editRow: "Редактирование строки",
        saveEdit: "Сохранить правку",
        cancelEdit: "Отменить правку",
        listView: "В виде списка",
        gridView: "В виде сетки",
        slide: "Слайд",
        slideNumber: "{slideNumber}",
        zoomImage: "Увеличить изображение",
        zoomIn: "Увеличить",
        zoomOut: "Уменьшить",
        rotateRight: "Повернуть вправо",
        rotateLeft: "Повернуть влево",
      },
    },
  });
});
