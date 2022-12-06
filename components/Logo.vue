<template>
  <header class="logo-header">
        <span class="material-icons-outlined">
        wb_cloudy
        </span>
    WWeather
  </header>
</template>

<script>
export default {
  name: "Logo"
}
</script>

<style lang="scss">
.logo-header {
  display: flex;
  align-items: center;
  gap: 8px;
  color: $text-primary;
  font-size: 32px;
  font-weight: 900;

  span {
    font-size: 32px !important;
  }
}
</style>
