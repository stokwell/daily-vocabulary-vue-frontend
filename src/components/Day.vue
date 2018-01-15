<template lang="html">
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Word</th>
          <th>Translations</th>
        </tr>
      </thead>
      <tbody v-for="word in Object.values(day)">
        <tr>
          <th>{{ word.original }} [{{word.transcription}}]</th>
          <th>{{ word.translation}}</th>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {

  computed: {
    day () {
      return this.$store.state.day.days[this.$route.params.day]
    }
  }
}
</script>

<style lang="css">
</style>
