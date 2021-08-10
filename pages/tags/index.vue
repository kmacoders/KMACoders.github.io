<template>
  <div class="container">
    <HeroSection
      title="Tags"
      sub-title="All tags in eHandy"
    />
    <ListTags :tags="tags" />
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import { Vue, Component } from 'nuxt-property-decorator'
import Hero from '@/components/templates/tags/Hero.vue'
import ListTags from '@/components/templates/tags/ListTags.vue'

@Component({
  components: {
    HeroSection: Hero,
    ListTags
  },
  async asyncData ({ $content }) {
    function onlyUnique (value: string, index: number, self: string[]) {
      return self.indexOf(value) === index
    }

    const blog: IContentDocument[] = await $content('blog', { deep: true })
      .only(['tags'])
      .fetch<IContentDocument[]>()

    /**
     * Tags của tất cả pài viết
     */
    const tags = blog
      .flatMap(blog => blog.tags)
      .filter(onlyUnique)

    return {
      tags
    }
  },
  head () {
    return {
      title: 'Article Tags - Learning Laravel and VueJS',
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${process.env.baseUrl}/tags`
        }
      ]
    }
  }
})
export default class TagListPage extends Vue {}
</script>
