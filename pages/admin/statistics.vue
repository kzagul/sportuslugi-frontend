<script setup>
definePageMeta({
  middleware: ["admin-only"],
  layout: false,
});

const chartData = ref({
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      label: "Sales",
      data: [540, 325, 702, 620],
      backgroundColor: [
        "rgba(255, 159, 64, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgb(255, 159, 64)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
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

<template>
  <NuxtLayout name="admin">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
      <div class="flex items-start bg-gray-10 rounded-lg shadow p-4 w-full">
        <Chart
          type="bar"
          :data="chartData"
          :options="chartOptions"
          class="w-full"
        />
      </div>
    </div>
  </NuxtLayout>
</template>
