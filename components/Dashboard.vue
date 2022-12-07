<template>
  <div class="dashboard-wrapper">
    <div class="dashboard-central">
      <DashboardHeader/>
      <DashboardOverview/>
    </div>
    <DashboardDetails/>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
}
</script>

<style lang="scss">

.dashboard-wrapper {
  display: flex;
  width: 100%;

  .dashboard-central {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}

</style>
