<template lang="html">
  <div id="sidebar">
    <h3 class="title is-5">Daily Words</h3>
    <ul class="pure-menu-list" v-for="(link, index) in links">
      <li class="pure-menu-item">
        <router-link :to="{ name: 'day-list', params: { day: index } }">{{ frontEndDateFormat(index) }}
          <span class="count">{{ link.length}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'sidebar',
  computed: {
    links() {
      return this.$store.getters.links
    }
  },
  methods:{
    frontEndDateFormat (date) {
      return moment(date, 'YYYY-MM-DD').format('LL');
    },

  }
}
</script>

<style lang="css">
#sidebar {
  background: #fff;
  border-radius: 4px;
  border: 1px solid #f1f1f1;
}

#sidebar a {
  text-decoration: none;
  color: #555;
  display: block;
  padding: 12px 20px;
  border-top: 1px solid #e5e5e5;
}

#sidebar h3 {
  margin: 0;
  padding: 16px 20px;
  color: #555;
}

#sidebar ul li:hover {
  cursor: pointer;
  background: #fafafa;
}

.count {
  float: right;
}

</style>
