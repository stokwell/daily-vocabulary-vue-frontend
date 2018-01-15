<template lang="html">
  <div id="translate-form">
    <form v-on:submit="formSubmit">
      <div class="field is-grouped">
        <p class="control is-expanded">
          <input type="text" class="input" v-model="params.textToTranslate" placeholder="Enter a word">
        </p>
        <p class="control has-icons-left">
          <span class="select">
            <select  v-model="params.language">
              <option value="ru">Russian</option>
              <option value="de">German</option>
            </select>
            <span class="icon is-small is-left">
              <i class="fa fa-globe"></i>
            </span>
          </span>
        </p>
        <p class="control">
          <input type="submit" class="button is-info" value="Translate">
        </p>
      </div>
    </form>
  </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TranslateForm',
  data(){
    return {
      params: {
        textToTranslate: '',
        languange: ''
      }
    }
  },
  created() {
    this.params.language = 'ru'
  },
  methods: {
    ...mapActions(['getTranslation']),

    formSubmit(e){
      //this.$emit('formSubmit', this.textToTranslate, this.language);
      e.preventDefault();
      this.getTranslation(this.params)
    }
  }
}
</script>

<style lang="css">
</style>
