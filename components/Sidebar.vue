<template>
  <div class="sidebar-wrapper">
    <div>
     <Logo/>
      <nav>
        <ul>
          <li v-for="link in links" :class="link.enabled ? 'active' : '' ">
        <span class="material-icons-outlined">
          {{ link.icon }}
        </span>
            <span>{{ link.label }}</span>
          </li>
        </ul>
      </nav>
    </div>

    <nuxt-link event=""
               @click.native="logoutApi('/login')" to="/login"  class="logout">
      <span class="material-icons-outlined">
          logout
        </span>
      <span>Logout account</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      links: [{
        "icon": "home",
        "label": "Home",
        "enabled": true
      },
        {
          "icon": "logout",
          "label": "salve",
          "enabled": false
        }]
    }
  },
  methods: {
    logoutApi(path) {
      console.log('Logout!', path)
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss">

.active {
  color: $primary-color !important;
}

.sidebar-wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  padding: 32px;
  width: 350px;
  background-color: $background-color;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 32px 0;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      gap: 16px;
      text-decoration: none;
      padding: 16px;
      border-radius: 8px;
      font-weight: 500;
      color: $text-secondary;

      transition: background-color 200ms, color 200ms;

      &:hover {
        color: $white;
        cursor: pointer;
        background-color: rgba($primary-color, 50%);
      }

    }
  }

  .logout {
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    padding: 16px;
    border-radius: 8px;
    font-weight: 500;
    color: $text-secondary;

    transition: background-color 200ms, color 200ms;

    &:hover {
      color: $white;
      cursor: pointer;
      background-color: rgba($primary-color, 50%);
    }

  }
}


</style>
