<template>
  <div id="">

  </div>
</template>
<script>
import router from '../router'
import store from '../store'

export default {
  name: "logout",
  data: () => ({

  }),
  mounted () {
    localStorage.removeItem('token')
    store.commit('LOGOUT_USER')
    router.push('login')
  }
}
</script>
<style lang="css" scoped>
</style>
