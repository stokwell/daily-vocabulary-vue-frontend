<template lang="html">
  <div id="layout" class="pure-g">
    <div class="sidebar">
      <SideBar />
    </div>
    <div class="content">
      <Header />
      <router-view></router-view>
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
   height: 100vh;
 }

 #app {
   height: 100vh;
 }

 #sidebar {
   color: #fff;
   text-align: center;
 }

 #sidebar li a {
   text-decoration: none !important;
   color: #fff;
 }

 @media (min-width: 48em) {
     .content {
      margin-left: 25%;
     }

     .header {
         margin: 80% 2em 0;
         text-align: center;
     }

     .sidebar {
         position: fixed;
         top: 0;
         bottom: 0;
         width:25%;
     }

     .footer {
         text-align: center;
     }
 }

</style>
