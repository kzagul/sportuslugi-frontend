<script setup>
onMounted(() => {
  chartData.value = setChartData();
});

const chartData = ref();
const chartOptions = ref({
  cutout: "60%",
});

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        data: [0, 2, 5, 6, 19],
        backgroundColor: [
          documentStyle.getPropertyValue("--blue-500"),
          documentStyle.getPropertyValue("--yellow-500"),
          documentStyle.getPropertyValue("--green-500"),
          documentStyle.getPropertyValue("--surface-500"),
          documentStyle.getPropertyValue("--orange-600"),
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue("--blue-400"),
          documentStyle.getPropertyValue("--yellow-400"),
          documentStyle.getPropertyValue("--green-400"),
          documentStyle.getPropertyValue("--surface-400"),
          documentStyle.getPropertyValue("--orange-600"),
        ],
      },
    ],
  };
};
</script>

<template>
  <div class="flex justify-center">
    <Chart
      type="doughnut"
      :data="chartData"
      :options="chartOptions"
      class="flex justify-center w-full h-60"
    />
  </div>
</template>
