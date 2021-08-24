<template>
  <div class="columns is-multiline">
    <div
      v-for="(blog, index) in listBlogs"
      :key="index"
      :class="'column post' + isFour(index + 1)"
    >
      <article class="columns is-multiline">
        <div class="column is-12">
          <BlogItemImage
            :image-url="blog.image"
          />
        </div>
        <div class="column is-12">
          <BlogItemView
            :tags="blog.tags"
            :title="blog.title"
            :description="blog.description"
            :slug="blog.slug"
          />
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import BlogItemView from '@/components/molecules/BlogItemPreview.vue'
import BlogItemImage from '@/components/molecules/BlogItemImage.vue'
import { IContent } from '~/types/content/page'

@Component({
  components: {
    BlogItemView,
    BlogItemImage
  }
})
export default class ListBlog extends Vue {
  @Prop({ type: Array as PropType<IContent[]>, required: true })
  listBlogs!: IContent[]

  isFour (position: number): string {
    if (position <= 2 && this.listBlogs.length > 5) {
      return ' is-6'
    }
    return ' is-4'
  }
}
</script>
