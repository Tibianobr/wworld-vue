<template>
  <div class="container">
    <Logo/>
    <div class="card">
      <div class="login-label">
        <h1>Welcome Back</h1>
        <span>Enter your credentials to access your account.</span>
      </div>
      <form>
        <div class="input-wrapper">
        <span class="material-icons-outlined">
          mail
        </span>
          <input v-model="email" placeholder="Enter your email" type="email">
        </div>
        <div class="input-wrapper">
        <span class="material-icons-outlined">
          lock
        </span>
          <input v-model="password" placeholder="Enter your password" type="password">
        </div>
        <button type="button" @click="helloWorld(email)">
          Sign In
        </button>
      </form>
    </div>
    <span class="register">Are you new?
      <a href="https://google.com">Sign up</a>
    </span>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email : '',
      password : ''
    }
  },
  methods: {
    helloWorld(nome) {
      console.log("Ola!", nome)
    }
  },
  created() {
    console.log('Chamar a api')
    this.email = 'teste@test.com'
  }
}
</script>

<style lang="scss">

body {
  background-color: $background-color;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  min-height: 100vh;
}

.card {
  display: flex;
  justify-content: center;
  gap: 48px;
  border-radius: 16px;
  padding: 32px;
  width: 600px;
  height: 500px;

  background-color: $white;

  .login-label {
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      color: $text-primary;
    }

    span {
      color: $text-secondary;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;

    .input-wrapper {
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

    button {
      border-radius: 8px;
      color: $white;
      background-color: $primary-color;
      font-weight: 500;
      padding: 16px;
      border: none;
    }

  }

  .register {
    color: $text-secondary;
  }
}

</style>
