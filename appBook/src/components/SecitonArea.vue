<template>
  <div>
    <div>
      <div class="card" style="width: 18rem">
        <img :src="book.image" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Book Name : {{ book.bookName }}</h5>
          <p class="card-title">Author : {{ book.author }}</p>

          <p class="card-text">Description : {{ book.description }}</p>
        </div>
        <div class="card-body" style="display: flex">
          <div class="btn-group" style="gap: 1.3rem">
            <router-link :to="'/book/' + book.id + '/detail'"
              >Detail</router-link
            >
            <div class="delete-button" @click="deleteBook">Delete</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      books: this.book,
      bookArr: [this.book],
    };
  },

  methods: {
    goDetail() {
      this.$router.push(`/${book.id}/detail`);
    },

    deleteBook(e) {
      this.bookArr = this.bookArr.filter((book) => book.id !== this.book.id);

      this.$emit("delete-book", this.book.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
