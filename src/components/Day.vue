<template lang="html">
  <div id="words-list">
    <button class="button is-warning button-save">
      <i class="fa fa-print"></i>
    </button>
    <h3 class="title is-5 has-text-centered">{{frontEndDateFormat(this.$route.params.day)}}</h3>
      <ul>
        <li v-for="word in Object.values(day)" class="list-item">
            <div class="word">{{ word.original }}</div>
            <div class="trans">{{ word.translation}}</div>
        </li>
      </ul>
  </div>
</template>


<script>

export default {
  methods:{
    frontEndDateFormat (date) {
      return this.$moment(date, 'YYYY-MM-DD').format('LL');
    }
  },

  computed: {
    day () {
      return this.$store.state.word.days[this.$route.params.day]
    }
  }
}
</script>

<style lang="css">
#words-list {
  background: #fff;
  border-radius: 4px;
  border: 1px solid #f1f1f1;
  position: relative;
}

#words-list h3 {
  margin: 0;
  padding: 16px 20px;
  color: #555;
}

#words-list ul  {
  margin: 0;
}

.button-save {
  position: absolute;
  right: 0;
  margin: 16px 16px 0 0;
}

.list-item {
  padding: 16px 30px;
  display: flex;
}

.list-item:hover {
  cursor: pointer;
  background: #fafafa;
}

.word {
  flex: 1
}

.trans {
  flex: 1
}

</style>
