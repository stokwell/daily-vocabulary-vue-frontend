<template lang="html">
  <div id="sidebar">
    <router-link to="/dashboard">
      <h4 class="title is-4">Dictionary</h4>
    </router-link>
    <ul class="pure-menu-list" v-for="(link, index) in links">
      <li class="pure-menu-item">
        <router-link :to="{ name: 'day-list', params: { day: index } }">{{ index }}</router-link>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'sidebar',

  methods: {
    handleLogout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/')
      })
    }
  },
  computed: {
    links() {
      return this.$store.getters.links
    }
  }

}
</script>

<style lang="css">
#sidebar {
  background: #F2B62A;
  height: 100%;
  min-width: 240px;
  padding-top: 20px;
}

#sidebar a {
  text-decoration: none;
}

#sidebar h4 {
  color: #fff;
  margin-bottom: 20px;
  text-decoration: none;
}

#sidebar ul li {
  border: none;
}

#sidebar .title {
  color: #fff;
}

</style>
