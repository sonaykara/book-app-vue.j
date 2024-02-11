<template>
    <div>
        <div>
            <div class="card" style="width: 18rem;">
                <img :src=" book.image" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title"> Book Name : {{ book.bookName }}</h5>
                  <p class="card-title">Author : {{ book.author }}</p>

                  <p class="card-text"> Description : {{ book.description }}</p>
                </div>
                <div class="card-body">
                  <router-link :to="'/book/' + book.id + '/detail'" >Detail</router-link>
                </div>
              </div>
        </div>
    </div>
</template>

<script>
    export default {
          props : {
                book : {
                      type : Object,
                      default : () => ({})
                }
          },

          methods : {
            goDetail () {
                this.$router.push(`/${book.id}/detail`)
            }
          }
    }
  
  
</script>

<style lang="scss" scoped>

</style>