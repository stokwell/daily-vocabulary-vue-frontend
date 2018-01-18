<template lang="html">
  <div id="translate-form">
    <form v-on:submit="formSubmit">
      <div class="field is-grouped">
        <p class="control has-icons-left">
          <span class="select">
            <select v-model="params.from">
              <option value="en">English</option>
              <option value="de">German</option>
            </select>
            <span class="icon is-small is-left">
              <i class="fa fa-globe"></i>
            </span>
          </span>
        <p class="control is-expanded">
          <input type="text" class="input" v-model="params.text" placeholder="Enter a word">
        </p>
        <p class="control has-icons-left">
          <span class="select">
            <select v-model="params.to">
              <option value="ru">Russian</option>
              <option value="de">German</option>
            </select>
            <span class="icon is-small is-left">
              <i class="fa fa-globe"></i>
            </span>
          </span>
        </p>
        <p class="control">
          <input type="submit" class="button is-warning" value="Translate">
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
        text: '',
        from: '',
        to: ''
      }
    }
  },
  created() {
    this.params.to = 'ru'
    this.params.from = 'en'
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
 #translate-form {
  background: #fff;
  padding: 16px 20px;
 }
</style>
