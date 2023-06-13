<template>
  <div class="card flex justify-content-center">
    <Chart
      type="pie"
      :data="chartData"
      :options="chartOptions"
      class="w-full md:w-30rem"
    />
  </div>
</template>

<script setup>
onMounted(() => {
  chartData.value = setChartData();
});

const chartData = ref();
const chartOptions = ref({
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
      },
    },
  },
});

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ["Дети", "Взрослые", "Пожилые"],
    datasets: [
      {
        data: [12, 20, 4],
        backgroundColor: [
          documentStyle.getPropertyValue("--blue-500"),
          documentStyle.getPropertyValue("--yellow-500"),
          documentStyle.getPropertyValue("--green-500"),
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue("--blue-400"),
          documentStyle.getPropertyValue("--yellow-400"),
          documentStyle.getPropertyValue("--green-400"),
        ],
      },
    ],
  };
};
</script>
