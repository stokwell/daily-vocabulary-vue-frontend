<template>
  <div id="top-nav">
    <div class="container">
        <div class="navbar-menu">
          <router-link to="/dashboard" tag="a" class="title is-3">Daily Vocabulary</router-link>
          <router-link to="/quotes" tag="a" class="title is-5">Quotes</router-link>
          <div class="navbar-end">
            <button @click="handleLogout" class="button is-custom">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "topnav",
  data: () => ({
  }),
  methods: {
    handleLogout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
<style lang="css" scoped>
  #top-nav {
    background: #3c4146;
    border-bottom: 1px solid #202326;
    padding: 20px 0;
    margin-bottom: 40px;
  }

  #top-nav .title {
    color: #fff;
    margin: 0 40px 0 0;
  }

  .is-custom {
    background: #202326;
    color: #B2B2B2;
    padding: 5px 10px;
    font-family: "SegoeUI", sans-serif;
    font-size: 14px;
    border: 1px solid transparent;
  }

  .navbar-menu {
    display: flex;
    align-items: center;
  }



</style>
