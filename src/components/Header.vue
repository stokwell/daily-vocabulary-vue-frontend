<template>
  <div id="top-nav">
    <div class="field is-grouped">
      <div class="control is-expanded">
        <h3 class="title is-3 has-text-centered">Daily Vocabulary</h3>
      </div>
      <div>
        <button @click="handleLogout()" class="button is-info is-outlined">Logout</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "header",
  data: () => ({

  })
}
</script>
<style lang="css" scoped>
  #top-nav {
    padding: 15px 20px 0 0;
  }
</style>
