<template>
  <div class="details-wrapper">
    <div>
      <header class="details-header">
        <div class="local-wrapper">
          <span class="city"> Curitiba </span>
          <span class="state-country"> Paraná, Brazil </span>
        </div>
        <span class="time">09:00 AM</span>
      </header>

      <div class="weather-info">
        <div class="current-weather">
          <b-img class="image" src="http://openweathermap.org/img/wn/10d@2x.png" fluid></b-img>
          <div class="weather-values">
            <span class="weather-temperature">20° C</span>
            <span class="weather-situation">Dramatic Cloudy</span>
          </div>
        </div>
      </div>
      <div class="chances-rain">
        <span>Chance of rain</span>
        <div class="bars">
          <div class="bar" v-for="bar in bars">
            <span class="header-chance-label">{{bar.label}}</span>
            <b-progress class="bar-progress" :value="bar.value" :max="max" ></b-progress>
            <span class="chances-label">{{bar.value}}</span>
          </div>
        </div>
      </div>
    </div>



    <div class="sunset-sunrise-wrapper">
      <span>Sunset & Sunrise</span>
      <div class="sunset-sunrise">
        <div class="sunset">
          <DashboardCard :option="sunset"></DashboardCard>
        </div>
        <div class="sunrise">
          <DashboardCard :option="sunrise"></DashboardCard>
        </div>
      </div>



    </div>

  </div>
</template>

<script>
export default {
  name: "DashboardDetails",
  data() {
    return {
      max: 100,
      bars: [{
        label: "Daily",
        value: "50%"
      }],
      sunset: {
        icon: "http://openweathermap.org/img/wn/10d@2x.png",
        label: "Humidity",
        value: 100,
        unit: "%",
        time: "4 hours ago",
        dark: true
      },
      sunrise: {
        icon: "http://openweathermap.org/img/wn/10d@2x.png",
        label: "Humidity",
        value: 100,
        unit: "%",
        dark: true
      }
    }
  }
}
</script>

<style lang="scss">
.details-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  background: linear-gradient(180deg, #43556F -15%, #112C4E 27%, #183A7E 90%);
  padding: 32px;
  gap: 48px;


  .details-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    .local-wrapper {
      display: flex;
      flex-direction: column;
      white-space: nowrap;

      .city {
        font-size: $font-size-lg;
        font-weight: 500;
        color: $white;

      }

      .state-country {
        color: $text-secondary;
      }
    }

    .time {
      font-size: $font-size-md;
      font-weight: 500;
      color: $white;
      text-align: right;


    }
  }

  .weather-info {
    display: flex;
    gap: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid $text-secondary;
    .current-weather {
      display: flex;
      flex-direction: column;
      width: 100%;

      .image {
        max-width: 100px;
      }

      .weather-values {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 32px;
        .weather-temperature {
          font-size: $font-size-xl;
          white-space: nowrap;
          color: $white;
        }
        .weather-situation {
          text-align: right;
          color: $text-secondary;
          font-size: $font-size-md;
        }
      }


      .material-icons-outlined {
        font-size: 48px;
        color: $white;

      }
    }
  }

  .chances-rain {
    font-size: $font-size-md;
    font-weight: 500;
    color: $white;
    margin-top: 32px;

    .bars {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 8px 0;

      .bar {
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: $font-size-sm;

        .header-chance-label{
          flex: 1;
        }

        .bar-progress{
          flex: 2;

          .progress-bar{
            background-color: $background-light;
          }
        }

        .chances-label{
          flex: 1;
        }

      }
    }
  }

  .sunset-sunrise-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-size: $font-size-md;
    font-weight: 500;
    color: $white;
    .sunset-sunrise {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }

}
</style>
