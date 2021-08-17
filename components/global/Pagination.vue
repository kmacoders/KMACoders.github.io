<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <NuxtLink
      :to="{ query: { page: prevPage } }"
      :class="'pagination-previous' + (isFirstPage ? ' is-disabled' : '')"
    >
      Previous
    </NuxtLink>
    <NuxtLink
      :to="{ query: { page: nextPage } }"
      :class="'pagination-next' + (isLastPage ? ' is-disabled' : '')"
    >
      Next page
    </NuxtLink>
    <ul class="pagination-list">
      <li v-for="(page, index) in totalPage" :key="index">
        <NuxtLink
          :to="{ query: { page: index + 1 }}"
          :class="'pagination-link ' + (currentPage === (index + 1) ? 'is-current' : '')"
        >
          {{ index + 1 }}
        </NuxtLink>
      </li>
    </ul>
    <button @click="onChangePage(nextPage)">
      next
    </button>
    <button @click="onChangePage(prevPage)">
      prev
    </button>
  </nav>

</template>
<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class Pagination extends Vue {
  @Prop({ type: Number }) total

  @Prop({ type: Number }) perPage

  get totalPage () {
    return Math.ceil(this.total / this.perPage)
  }

  get currentPage () {
    return Number(this.$route.query.page) || 1
  }

  get nextPage () {
    return (this.currentPage <= this.totalPage) ? this.currentPage + 1 : this.currentPage
  }

  get prevPage () {
    return (this.currentPage >= 1) ? this.currentPage - 1 : this.currentPage
  }

  get isFirstPage () {
    return this.currentPage === 1
  }

  get isLastPage () {
    return this.currentPage === this.totalPage
  }

  onChangePage (pageNumber) {
    this.$router.push({ path: this.$route.path, query: { page: pageNumber } })
  }
}
</script>
