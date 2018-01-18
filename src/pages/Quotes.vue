<template>
  <div id="quotes">
    <Header />
    <div class="container">
      <article>
        <section>
          <form>
            <div class="field">
              <textarea class="textarea" type="text" v-model="text" placeholder="Message" rows="3"/>
            </div>
            <div class="field">
              <input class="input" type="text" v-model="author" placeholder="Author"/>
            </div>
            <div class="field is-grouped is-grouped-right">
              <button type="submit" @click="addQuote" class="button is-warning">Save</button>
            </div>
          </form>
        </section>

        <section v-for="quote in quotes">
          <p>{{quote.text}}</p>
          <p class="author">{{quote.author}}</p>
        </section>

      </article>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: 'quotes',
  components: {
    Header
  },
  data() {
    return {
      quotes: [
        { text: 'The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.', author: 'Albert Camus' },
        { text: 'Capitalist production, therefore, develops technology, and the combining together of various processes into a social whole, only by sapping the original sources of all wealth - the soil and the labourer.', author: 'Karl Marx' },
        { text: 'Religion is the impotence of the human mind to deal with occurrences it cannot understand.', author: 'Karl Marx' },
        { text: 'The university\'s business is the conservation of useless knowledge; and what the university itself apparently fails to see is that this enterprise is not only noble but indispensable as well, that society can not exist unless it goes on.', author: 'Albert J. Nock' },
        {text: 'The greatest weapon against stress is our ability to choose one thought over another.', author: 'William James' }
      ],
      text: '',
      author: ''
    }
  },
  methods: {
    addQuote(e){
      e.preventDefault()
      this.quotes.push({
        text: this.text,
        author: this.author
      })
    }
  }
}
</script>

<style lang="css">

textarea,
.textarea {
  min-height: inherit;
  height: auto;
}

.author {
  text-align: right;
}


*, *:before, *:after {box-sizing:  border-box !important;}


article {
 -moz-column-width: 20em;
 -webkit-column-width: 20em;
 -moz-column-gap: 1em;
 -webkit-column-gap: 1em;

}

section {
 display: inline-block;
 margin:  0.5rem;
 padding:  1rem;
 width:  100%;
 background:  #fff;
}

p {
 margin:  1rem 0;
}



</style>
