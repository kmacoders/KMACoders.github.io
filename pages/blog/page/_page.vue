<template>
  <section class="blog-posts section">
    <div class="container">
      <section class="blog-featured">
        <h2 class="title is-2">
          <span class="has-underline is-level-5">
            Latest
          </span>
        </h2>
        <FeaturedBlog :first-blog="allArticles[0]" />
      </section>
      <section class="blog-list mt-6">
        <h2 class="title is-2">
          <span class="has-underline is-level-5">
            All
          </span>
        </h2>
        <ListBlog :list-blogs="paginatedArticles" />
      </section>
      <section class="blog-pagination">
        <Pagination
          :total="allArticles.length"
          :per-page="perPage"
        />
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import getContent from '@/utils/getContent'
import FeaturedBlog from '@/components/organisms/FeaturedBlog.vue'
import ListBlog from '@/components/organisms/ListBlog.vue'
import { IContent } from '~/types/content/page'

@Component({
  components: {
    FeaturedBlog,
    ListBlog
  },
  watchQuery: ['page'],
  async asyncData ({ $content, params, error }) {
    const blogPath = 'blog'
    const perPage = 5
    const currentPage = Number(params.page) || 1
    const content = await getContent($content, currentPage, perPage, error, blogPath)

    return {
      allArticles: content.allArticles,
      paginatedArticles: content.paginatedArticles,
      perPage,
      currentPage
    }
  }
})
export default class PageBlog extends Vue {
  currentPage!: number

  perPage!: number

  allArticles!: IContent[]

  paginatedArticles!: IContent[]

  head () {
    return {
      title: `Rio Blog - Page ${this.currentPage} of ${Math.ceil(this.allArticles.length / this.perPage)}`,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/blog/page/${this.$route.params.page}`
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.blog-pagination {
  margin-top: 10rem;
}
</style>
