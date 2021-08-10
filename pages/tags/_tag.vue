<template>
  <div class="container">
    <section class="section tags-page-wrapper">
      <div class="tags-page__header">
        <h2>
          Tag: {{ $route.params.tag }}
        </h2>
      </div>
      <div class="tags-page__content-wrapper">
        <ListBlog :list-blogs="blogsByTag" />
      </div>
    </section>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import ListBlog from '@/components/organisms/ListBlog.vue'

@Component({
  components: {
    ListBlog
  },
  async asyncData ({ $content, params }) {
    /*
     * Folder inside /content
     */
    const path = 'blog'
    const blog = await $content(path, { deep: true })
      .only(['title', 'description', 'image', 'slug', 'published', 'tags'])
      .sortBy('published', 'desc')
      .fetch()

    const blogsByTag = blog.filter((article) => {
      const blogTags = article.tags.map(x => x.toLowerCase())
      return blogTags.includes(params.tag)
    })

    return {
      blogsByTag
    }
  },
  head () {
    return {
      title: `Blog Tagged - ${this.captialise(this.$route.params.tag)}`,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${process.env.baseUrl}/tags/${this.$route.params.tag}`
        }
      ]
    }
  }
})
export default class TagPage extends Vue {
  captialise (text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }
}
</script>
