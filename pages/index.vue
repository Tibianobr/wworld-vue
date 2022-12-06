<template>
  <div class="app-container">
    <Sidebar/>
    <Dashboard/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>

<style lang="scss">
.app-container {
  display: flex;
}
</style>
