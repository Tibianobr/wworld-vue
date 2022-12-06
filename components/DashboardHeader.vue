<template>
  <header class="dashboard-header">
    <div class="date-wrapper">
        <span class="date-month-year">
          December 2022
        </span>
      <span class="date-today">
          Thursday, Jan 4
        </span>
    </div>
    <div class="search-wrapper">
        <span class="material-icons-outlined">
          search
        </span>
      <input placeholder="Search location here" type="text">
    </div>
  </header>
</template>

<script>
export default {
  name: "DashboardHeader"
}
</script>

<style lang="scss">
.dashboard-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 32px;
  border-bottom: 1px solid red;

  .date-wrapper {
    display: flex;
    flex-direction: column;
    white-space: nowrap;

    .date-month-year {
      font-size: 24px;
      font-weight: 700;
    }
  }

  .search-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
    border-radius: 8px;
    padding: 16px;
    background-color: $grey;

    input {
      border: none;
      outline: none;
      width: 100%;
      background-color: transparent;
    }
  }
}
</style>
