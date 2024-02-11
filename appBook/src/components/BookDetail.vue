<template>
   <div>
    <div class="card" style="width: 18rem;">
        <img :src="book.image" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Author : {{ book.author }}</h5>
          <h5 class="card-title">book Name : {{ book.bookName }}</h5>
          <p class="card-text">Summary : {{ book.summary }}</p>
          <router-link :to="'/'" class="btn btn-primary">Go Home</router-link>


        </div>
      </div>
   </div>
</template>

<script>
import data from '../assets/db.json'
    export default {
        data () {
            return {
                book : null
            }
        },


        created () {
            const bookID = this.$route.params.id
            this.book = data.find(book => book.id === parseInt(bookID))
        }
    }
</script>

<style lang="scss" scoped>

</style>