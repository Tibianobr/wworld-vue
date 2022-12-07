<template>
  <div class="overview-container">
    <div>
    <span class="label-header">Today overview</span>
    <div class="card-wrapper">
      <DashboardCard v-for="option in weatherOptions" :option="option"></DashboardCard>
    </div>
    </div>
    <div class="chart">
      <span class="label-header">Average Hourly Temperature</span>
      <LineChart v-if="chartConfig.data"
          :chartData="chartConfig.data"
          :chartOptions="chartConfig.options"
        />
    </div>
  </div>
</template>

<script>
import * as chartConfig from '../config/chartConfig'
export default {
  name: "DashboardOverview",
  data() {
    return {
      chartConfig: chartConfig,
      weatherOptions: [
        {
          icon: "light_mode",
          label: "Wind speed",
          value: 12,
          unit: "km/h"
        },
        {
          icon: "light_mode",
          label: "Humidity",
          value: 100,
          unit: "%"
        },
        {
          icon: "light_mode",
          label: "Rain chance",
          value: 100,
          unit: "%"
        }
      ]
    }
  },
  created() {
    console.log(chartConfig.data)
  }
}
</script>

<style lang="scss">
.overview-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: 32px;

  .label-header {
    font-size: $font-size-md;
    font-weight: 600;
  }

  .card-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 16px;
  }

  .chart {
    height: 500px;

    & > div {
      height: 80%;
      width: 100%;


      @media (max-width: 1280px) {
        width: 550px;
      }
    }
  }
}
</style>
