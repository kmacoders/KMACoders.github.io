<template>
  <div class="columns">
    <div class="column is-12">
      <article class="columns">
        <div class="column is-7">
          <BlogItemImage
            :image-url="firstBlog.image"
          />
        </div>
        <div class="column is-5">
          <BlogItemPreview
            :blog-detail="firstBlog"
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
import BlogItemImage from '@/components/molecules/BlogItemImage.vue'
import { IContent } from '~/types/content/page'

@Component({
  components: {
    BlogItemPreview,
    BlogItemImage
  }
})
export default class FeaturedBlog extends Vue {
  @Prop({ type: Object as PropType<IContent>, required: true })
  firstBlog!: IContent

  mounted () {
    console.log(this.firstBlog)
  }
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
