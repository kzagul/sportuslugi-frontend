<template>
  <div class="card">
    <Chart type="bar" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
const chartData = ref({
  labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь"],
  datasets: [
    {
      label: "Посещения",
      data: [0, 0, 0, 0, 11, 32],
      backgroundColor: [
        "rgba(255, 159, 64, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(103, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgb(255, 159, 64)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgba(103, 102, 255)",
      ],
      borderWidth: 1,
    },
  ],
});
const chartOptions = ref({
  scales: {
    y: {
      beginAtZero: true,
    },
  },
});
</script>
