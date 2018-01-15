<template>
  <ul v-if="translations.length != 0" class="box-list">
    <li v-for="translation in translations" ref='index' class="box">
      <div class="box-header">
        <p>{{translation.text}} [{{translation.ts}}] {{ translation.pos }}</p>
        <button @click="handleSaveTranslation(translations, translation)" class="button is-info">
          <i class="fa fa-floppy-o "></i>
        </button>
      </div>
      <ul>
        <li v-for="tr in translation.tr">
          {{tr.text}}
          (<span v-for="(meaning, index) in tr.mean">{{meaning.text}}<span v-if="index + 1 < tr.mean.length">, </span></span>)
          <div v-for="example in tr.ex">
            <p>{{example.text}} - {{example.tr[0].text}}</p>
          </div>
        </li>
      </ul>

    </li>
  </ul>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: "translate-output",
  computed: mapState({
    translations: state => state.word.currentTranslation
  }),
  methods: {
    handleSaveTranslation(article, translation){
      this.$store.dispatch('saveTranslation', { article, translation })
    }
  }
}
</script>
<style lang="css" scoped>
  .box-list {
    padding: 0;
    margin: 30px 0;

  }
  .box-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .box-header p {
    margin-bottom: 0;
  }

  .card {
    padding: 10px;
    list-style: none
  }
</style>
