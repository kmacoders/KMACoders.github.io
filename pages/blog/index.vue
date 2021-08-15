<template>
  <section class="blog-posts section">
    <div class="container">
      <FeaturedBlog :first-blog="allArticles[0]" />
      <ListBlog :list-blogs="paginatedArticles" />
      <div class="columns">
        <Pagination
          :total="allArticles.length"
          :per-page="perPage"
        />
      </div>
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
  async asyncData ({ $content, params, error }) {
    const perPage = 8
    const content = await getContent($content, params, error, 'blog')

    return {
      allArticles: content.allArticles,
      paginatedArticles: content.paginatedArticles,
      perPage
    }
  },
  head () {
    return {
      title: `Blog page ${this.$route.params.page} - eHanndy`,
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
