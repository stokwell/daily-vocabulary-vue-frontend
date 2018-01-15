<template lang="html">
  <div class="translation-wrapper">
    <TranslateForm v-on:formSubmit="translateText"/>
    <TranslateOutput v-bind:translations="translations"/>
  </div>
</template>

<script>
import TranslateForm from './TranslateForm'
import TranslateOutput from './TranslateOutput'
import axios from 'axios'

export default {
  name: 'translation',
  components: {
    TranslateForm, TranslateOutput
  },
  data(){
    return {
      translations: [],
    }
  },
  methods: {
    translateText: function (text, language) {
      axios.get('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20171227T131943Z.b0b60611e36d7e6a.296e4b9f91bce940a11dad18a08a8df28009ab0b&lang=en' + '-' + language + '&text=' + text)
      .then((response)=> {
        const res = JSON.stringify(response.data.def)
        this.translations = JSON.parse(res)
        console.log(JSON.parse(res))
      })
    }
  }
}
</script>

<style lang="css">
  .translation-wrapper {
    padding: 20px 120px 100px;
  }
</style>
