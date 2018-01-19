<template>
  <ul v-if="translations.length != 0" class="box-list">

    <li  class="translation" v-for="translation in translations" ref='index'>

      <button @click="handleSaveTranslation(translations, translation)" class="button is-warning button-save">
        <i class="fa fa-floppy-o "></i>
      </button>

      <div class="box-header">
        <p>{{translation.text}} [{{translation.ts}}] <strong>{{ translation.pos }}</strong></p>
      </div>

      <ol class="translation-variants">
        <li v-for="tr in translation.tr">

          <p class="translation-text">{{tr.text}}
            <span v-if="tr.mean">
              (<span v-for="(meaning, index) in tr.mean">{{ meaning.text }}<span v-if="index + 1 < tr.mean.length">, </span>
              </span>)
            </span>
          </p>
        </div>

          <ul class="example-list">
            <li class="example-item" v-for="example in tr.ex">
              <p>{{example.text}} - {{example.tr[0].text}}</p>
            </li>
          </ul>

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
    position: relative;
  }

  .button-save {
    position:absolute;
    right: 0;
    margin-right: 20px;
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

  .translation {
    padding: 16px 30px 8px;
  }

  .translation:hover {
    cursor: pointer;
    background: #fafafa;
  }

  .translation-text {

  }

  .translation-text span {
    color: grey;
  }


  .translation-variants{
    margin: 1em;
  }

  .example-list {
    list-style: none;
    margin: 0 10px 20px;
  }

  .example-item {
    margin:5px;
  }
</style>
