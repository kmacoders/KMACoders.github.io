<template>
  <div class="container">
    <MinimalBanner />
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <FeaturedBlog :first-blog="allArticles[0]" />
            <hr>
            <ListBlog :list-blogs="paginatedArticles" />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <Pagination
              :total="allArticles.length"
              :per-page="perPage"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
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
