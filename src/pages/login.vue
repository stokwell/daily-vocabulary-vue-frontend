<template>
  <form class="pure-form pure-form-aligned login-form" @submit.prevent="login">
    <fieldset>
     <h2 class="main-title">Daily Vocabulary</h2>

      <div class="pure-control-group">
        <label for="email">Email Address</label>
        <input id="email" type="email" placeholder="Email Address" v-model.lazy="credential.email">
      </div>

      <div class="pure-control-group">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Password" v-model.lazy="credential.password">
      </div>

      <div class="button-wrapper">
        <button type="submit" class="pure-button pure-button-primary">Submit</button>
      </div>

    </fieldset>
</form>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      credential: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    login(){
      this.$store.dispatch('login', this.credential).then(() => {
        this.$router.push('/dashboard')
      });;
    }
  }
}
</script>

<style>
  .login-form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .main-title {
    text-align: center;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

</style>
