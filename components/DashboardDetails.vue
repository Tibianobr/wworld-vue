<template>
  <div class="details-wrapper">
    <header class="details-header">
    <div class="local-wrapper">
      <span class="city"> Curitiba </span>
      <span class="state-country"> Paraná, Brazil </span>
    </div>
    <span class="time">09:00 AM</span>
    </header>

    <div class="weather-info">
      <div class="current-weather">
        <span class="material-icons-outlined">
          cloudy
        </span>
        <div class="weather-values">
          <span class="weather-temperature">20° C</span>
          <span class="weather-situation">Dramatic Cloudy</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "DashboardDetails"
}
</script>

<style lang="scss">
.details-wrapper {
  display: flex;
  flex-direction: column;
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
        font-size: 24px;
        font-weight: 500;
        color: $white;

      }

      .state-country {
        color: $text-secondary;
      }
    }

    .time {
      font-size: 24px;
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

      .weather-values {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 32px;
        .weather-temperature {
          font-size: 48px;
          white-space: nowrap;
          color: $white;
        }
        .weather-situation {
          text-align: right;
          color: $text-secondary;
          font-size: 24px;
        }
      }


      .material-icons-outlined {
        font-size: 48px;
        color: $white;

      }
    }
  }

}
</style>
