<template>
  <div :class="['card-overview', option.dark ? 'dark' : 'light']">
    <div class="card-icon-value">
      <b-img v-if="option.dark" :src="option.icon"></b-img>
      <span v-if="!option.dark" class="material-icons-outlined">
          {{ option.icon }}
        </span>
      <div class="card-value">
        <label>
          {{ option.label }}
        </label>
        <div class="card-value-unit">
          <span>{{ option.value }}</span>
          <span>{{ option.unit }}</span>
        </div>
      </div>
    </div>

    <span class="time" v-if="option.time">
          {{ option.time }}
      </span>
  </div>
</template>

<script>
export default {
  name: "DashboardCard",
  props: {
    option: {
      type: Object
    }
  },
}
</script>

<style lang="scss">
.dark {
  background-color: rgba($white, 0.2);
  backdrop-filter: blur(0.5);
  span {
    color: $white;
  }
  .card-icon-value {
    .card-value {
      label {
        margin: 0;
        color: $grey;
        font-weight: 500;
      }
    }

    .material-icons-outlined {
      font-size: $font-size-lg;
      color: rgba($white, 0.5);
    }
  }
}

.light {
  background-color: $grey;
  .card-icon-value {
    .card-value {
      label {
        margin: 0;
        color: $text-secondary;
        font-weight: 500;
        font-size: $font-size-sm;
      }
    }

    .material-icons-outlined {
      font-size: $font-size-lg;
      color: $primary-color;
    }
  }
}

.card-overview {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  padding: 16px 32px;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 4px 24px rgba(black, 0.15);


  .card-icon-value {
    display: flex;
    align-items: center;
    gap: 16px;

    .card-value {
      display: flex;
      flex-direction: column;

      span {
        font-size: $font-size-lg;
        font-weight: 600;
      }

      .card-value-unit {
        display: flex;
        flex-wrap: nowrap;
      }
    }
  }

  .time{
    font-size: $font-size-sm;
  }

}
</style>
