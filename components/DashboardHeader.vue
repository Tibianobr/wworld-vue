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
    <div class="search-dropdown-parent">
      <div class="search-wrapper">
        <span class="material-icons-outlined">
          search
        </span>
        <input v-model="search" placeholder="Search location here" type="text">
      </div>
      <div v-if="search" class="dropdown-search">
        <ul>
          <li @click="searchCity(city)" v-for="city in displayCities">
            {{ city }}
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "DashboardHeader",
  data() {
    return {
      search: '',
      cities: []
    }
  },
  watch: {
    search(newValue) {
      console.log(newValue)
      this.cities = this.api()
    }
  },
  computed: {
    displayCities() {
      return this.cities.filter((city) => {
        return city.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    api() {
      return ['Curitiba', 'Curitianos', 'Cuiaba', 'Corinthias', 'Culinária']
    },
    searchCity(city) {
      console.log(city)
      this.cities = []
      this.search = ''
    }
  },
  created() {
    this.cities = this.api()
  }
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
      font-size: $font-size-md;
      font-weight: 700;
    }
  }



  .search-dropdown-parent {
    position: relative;
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

    .dropdown-search {
      position: absolute;
      background-color: $grey;
      width: 100%;

      ul {
        list-style-type: none;
        padding: 0;

        li {
          padding: 8px 16px;

          &:hover {
            background-color: $primary-color;
            color: $white;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
