<template lang="html">
  <div class="">
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
  }
}
</script>

<style lang="css">
  .translations {
    min-height: 300px;
  }
</style>
