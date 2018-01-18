<template>
  <form class="login-form" @submit.prevent="login">
     <p class="title is-3">Daily Vocabulary</p>

      <div class="field">
        <label class="label" for="email">Email Address</label>
        <input class="input" id="email" type="email" placeholder="Email Address" v-model.lazy="credential.email" >
      </div>

      <div class="field">
        <label class="label" for="password">Password</label>
        <input class="input" id="password" type="password" placeholder="Password" v-model.lazy="credential.password" >
      </div>

      <div class="button-wrapper">
        <button class="button is-warning" type="submit" >Submit</button>
      </div>
  </form>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      credential: {
        email: 'example@mail.com',
        password: 'password',
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
    background: #fff;
    padding: 30px 40px;
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
