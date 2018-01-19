<template lang="html">
  <div>
    <TranslateForm />
    <TranslateOutput />
  </div>
</template>

<script>
import TranslateForm from './TranslateForm';
import TranslateOutput from './TranslateOutput';

export default {
  name: 'translation',
  components: {
    TranslateForm, TranslateOutput
  }
}
</script>

<style>
</style>
