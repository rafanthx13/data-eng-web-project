<template>
	<div>

		<!-- Card -->
		<div class="layout">
			<div class="row gutter--md justify--space-around">
				<va-card class="sm5 gutter--md" v-for="book in books" :key="book.title" style="margin: 20px; max-width: 450px; min-width: 450px; display: flex; flex-direction: column;">
					<va-image
						:src="getImgUrl(book.image)"
						style="height: 300px;"
					/>
					<va-card-title style="font-size: 16px; text-align: center;">{{book.title}}</va-card-title>
					<va-card-content style="text-align: left;">
						<b>Subtitle:</b> {{book.subtitle}}
						<br>
						<b>Autors:</b> {{book.autors}}
						<br>
						<b>Year</b> {{book.year}} | <b>Pages</b> {{book.pages}}	<br>
						<b>Short Comment:</b> {{book.short_comment}}
						<br>
						<b>Comment:</b> {{book.comment}}
					</va-card-content>
					<va-card-actions align="start">
			          <va-button>Action 1</va-button>
			          <va-button>Action 2</va-button>
			        </va-card-actions>
				</va-card>
			</div>
		</div>
		
	</div>
</template>

<script>

import bookListing from "@/assets/books.yaml";

export default {
  name: "DataEngineeringListing",

  data() {
    return { 
    	books: bookListing.books,
    }
  },

  methods: {
    getImgUrl(pic) {
      var images = require.context('./../assets/book-images/', false, /\.jpg$/)
      return images('./' + pic)
    },
    
  }

};
</script>


<style scoped>

</style>
