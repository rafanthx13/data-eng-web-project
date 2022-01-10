<template>
  <div class="bg-gradient font-dm-sans">
    <h1 class="pt-4">Listagem de Livros sobre Engenharia de Dados</h1>
    <!-- Card -->
    <div class="layout">
      <div class="row gutter--md justify--space-around">
        <va-card
          class="sm5 gutter--md"
          v-for="book in books"
          :key="book.title"
          style="
            margin: 20px;
            max-width: 400px;
            min-width: 400px;
            display: flex;
            flex-direction: column;
          "
        >
          <va-image :contain="true" :src="getImgUrl(book.image)" style="height: 300px" />
          <va-card-title style="font-size: 16px; text-align: center">{{
            book.title
          }}</va-card-title>
          <va-card-content style="text-align: left">
            <b>Subtitle:</b> {{ book.subtitle }}
            <br />
            <b>Autors: </b>
            <span v-for="(author, index) in book.autors" :key="index"> {{ author }} &nbsp; </span>
            <br />
            <b>Year</b> {{ book.year }} | <b>Pages</b> {{ book.pages }} <br />
            <br />
            <b>Short Comment:</b> {{ book.short_comment }}
            <br />
            <b>Comment:</b> {{ book.comment }}
            <!-- 
              <template>
                <va-rating v-model="value" />
              </template>
             -->
          </va-card-content>
          <va-card-actions align="start">
            <va-button>Buy</va-button>
            <va-button>Download</va-button>
          </va-card-actions>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import bookListing from '@/assets/books.yaml';

export default {
  name: 'BookListing',

  data() {
    return {
      books: bookListing.books,
    };
  },

  methods: {
    getImgUrl(pic) {
      var images = require.context('./../assets/book-images/', false, /\.jpg$/);
      return images('./' + pic);
    },
  },
};
</script>

<!-- nao use scoped -->
<style>
.va-image img {
  object-fit: contain !important ;
  height: 300px !important ;
}

img {
  object-fit: contain !important ;
  height: 300px !important ;
}

div.va-image__img img {
  object-fit: contain !important ;
  height: 300px !important ;
}

.font-dm-sans {
  font-family: 'DM Sans', Helvetica, Arial, sans-serif;
}

.bg-gradient {
  background-image: linear-gradient(
    to right,
    #2d82e0,
    #00a2e5,
    #00bad2,
    #3ecdb7,
    #98dba3,
    #a9e3af,
    #baeabb,
    #caf2c8,
    #bdf5e2,
    #c0f5f6,
    #cff2ff,
    #e2f0ff
  );
}
</style>
