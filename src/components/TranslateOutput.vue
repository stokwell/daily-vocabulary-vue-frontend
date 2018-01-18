<template>
  <ul v-if="translations.length != 0" class="box-list">
    <button @click="handleSaveTranslation(translations, translations[0])" class="button is-warning button-save">
      <i class="fa fa-floppy-o "></i>
    </button>
    <li v-for="translation in translations" ref='index'>
      <div class="box-header">
        <p>{{translation.text}} [{{translation.ts}}] {{ translation.pos }}</p>
      </div>
      <ol>
        <li v-for="tr in translation.tr">
          <p>
            {{tr.text}}
            <span v-for="(variant, index) in tr.syn">{{ variant.text }}<span v-if="index + 1 < tr.mean.length">, </span>
            </span>
          </p>
          (<span v-for="(meaning, index) in tr.mean">{{ meaning.text }}<span v-if="index + 1 < tr.mean.length">, </span></span>)
          <div v-for="example in tr.ex">
            <p>{{example.text}} - {{example.tr[0].text}}</p>
          </div>
        </li>
      </ol>

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
    margin: 30px 0;
    list-style:none;
    background: #fff;
    padding: 16px 20px;
    position: relative;
  }
  .button-save {
    position:absolute;
    right: 0;
    margin-right: 16px;
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
