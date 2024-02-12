<template>
    <div class="mt-5">

        <div class="container">
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="seacrhText">
              </form>
        </div>

        <div class="d-flex flex-wrap justify-content-around align-items-center mt-5 container">
            <sectionArea class="col-3 mb-4" v-for="book in filtered" :key="book.id" :book="book" @delete-book ="deleteBookHandler"></sectionArea>
        </div>
        
        
        
        
        
    </div>
    
</template>

<script>

import dataBase from '../assets/db.json'
import sectionArea from './SecitonArea.vue'

    export default {

        components : {
            sectionArea :sectionArea
        },

        data() {
            return {
                books : dataBase,
                seacrhText : ""
            }
        },

        computed : {
            filtered() {
          return this.books.filter((element)=> {
            const jsonString = JSON.stringify(element);
            
              return jsonString.toLowerCase().match(this.seacrhText.toLowerCase())
              
                })
            }
        },

        methods: {
            deleteBookHandler (bookId) {
                this.books = this.books.filter(book => book.id !== bookId)
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>