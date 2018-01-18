<template lang="html">
  <div id="layout">
    <Header />


    <div class="container">
      <div class="columns">
        <div class="column is-3 sidebar">
          <SideBar />
        </div>

        <div class="column content">
            <router-view></router-view>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import SideBar from '../components/SideBar'
import Header from '../components/Header'
export default {
  name: 'dashboard',
  components: { SideBar, Header },
  data () {
    return {
      loading: false,
      error: null,
      days: null
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      this.$store.dispatch('request_words')
    }
  }
}
</script>

<style lang="css">
  #layout {

  }
</style>
