<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <NuxtLink
      :to="{ name: 'blog-page-page', params: { page: prevPage } }"
      :class="'pagination-previous' + (isFirstPage ? ' is-disabled' : '')"
    >
      Previous
    </NuxtLink>
    <NuxtLink
      :to="{ name: 'blog-page-page', params: { page: nextPage } }"
      :class="'pagination-next' + (isLastPage ? ' is-disabled' : '')"
    >
      Next page
    </NuxtLink>
    <ul class="pagination-list">
      <li v-for="(page, index) in totalPage" :key="index">
        <NuxtLink
          :to="{ name: 'blog-page-page', params: { page: index + 1 }}"
          :class="'pagination-link ' + (currentPage === (index + 1) ? 'is-current' : '')"
        >
          {{ index + 1 }}
        </NuxtLink>
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
    return Number(this.$route.params.page) || 1
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
}
</script>
