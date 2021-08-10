<template>
  <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
    <a class="pagination-previous">Previous</a>
    <a class="pagination-next">Next page</a>
    <ul class="pagination-list">
      <li>
        Page {{ currentPage }} / {{ totalPage }}
      </li>
    </ul>
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

  mounted () {
    console.log('Total page: ' + this.totalPage)
    console.log('Current page: ' + this.currentPage)
  }
}
</script>
