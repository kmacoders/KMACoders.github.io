<template>
  <section class="blog-posts section">
    <div class="container">
      <section class="blog-featured">
        <FeaturedBlog :first-blog="allArticles[0]" />
      </section>
      <section class="blog-list">
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

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import getContent from '@/utils/getContent'
import FeaturedBlog from '@/components/organisms/FeaturedBlog'
import ListBlog from '@/components/organisms/ListBlog.vue'

@Component({
  components: {
    FeaturedBlog,
    ListBlog
  },
  watchQuery: ['page'],
  async asyncData ({ $content, route, error }) {
    const blogPath = 'blog'
    const perPage = 8
    const currentPage = Number(route.query.page) || 1
    const content = await getContent($content, currentPage, perPage, error, blogPath)

    console.log(`change page to ${currentPage}`)

    return {
      allArticles: content.allArticles,
      paginatedArticles: content.paginatedArticles,
      perPage,
      currentPage
    }
  },
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

})
export default class PageBlog extends Vue {
}
</script>
<style lang="scss" scoped>
.blog-pagination {
  margin-top: 10rem;
}
</style>
