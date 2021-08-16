<template>
  <div class="columns">
    <div class="column is-12">
      <h2 class="title is-2">
        <span class="has-underline is-level-5">
          Latest
        </span>
      </h2>
      <article class="columns">
        <div class="column is-7">
          <img :src="firstBlog.image" :alt="firstBlog.title">
        </div>
        <div class="column is-5">
          <BlogItemPreview
            :tags="firstBlog.tags"
            :title="firstBlog.title"
            :description="firstBlog.description"
            :slug="firstBlog.slug"
          />
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import BlogItemPreview from '@/components/molecules/BlogItemPreview.vue'
import { IContent } from '~/types/content/page'

@Component({
  components: {
    BlogItemPreview
  }
})
export default class FeaturedBlog extends Vue {
  @Prop({ type: Object as PropType<IContent>, required: true })
  firstBlog!: IContent
}
</script>
<style lang="scss">
.featured-post {
  .featured-post__title {
    position: relative;
    width: fit-content;
  }
}
</style>
