<template>
  <div class="overview-container">
    <span>Today overview</span>
    <div class="card-wrapper">
      <div class="card-overview" v-for="option in weatherOptions">
        <span class="material-icons-outlined">
          {{option.icon}}
        </span>
        <div class="card-value">
          <label>
            {{option.label}}
          </label>
          <span>
          {{option.value}} {{option.unit}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardOverview",
  data() {
    return {
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
  }
}
</script>

<style lang="scss">
.overview-container {
  padding: 32px;

  .card-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 16px;
    .card-overview {
      display: flex;
      gap: 32px;
      padding: 16px 32px;
      align-items: center;
      background-color: $grey;
      border-radius: 8px;
      box-shadow: 0px 4px 24px rgba(black, 0.15);

      .card-value {
        display: flex;
        flex-direction: column;

        label {
          margin: 0;
          color: $text-secondary;
          font-weight: 500;
        }

        span {
          font-size: 32px;
          font-weight: 600;
        }
      }

      .material-icons-outlined {
        font-size: 36px;
        color: $primary-color;
      }
    }
  }
}
</style>
