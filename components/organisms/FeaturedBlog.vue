<template>
  <div class="columns featured-post is-multiline">
    <div class="column is-12 post">
      <h2 class="featured-post__title title is-2">
        <span class="has-underline is-level-5">
          {{ featuredTitle }}
        </span>
      </h2>
      <article class="columns featured">
        <div class="column is-7 post-img ">
          <img :src="firstBlog.image" :alt="firstBlog.title">
        </div>
        <div class="column is-5 featured-content va">
          <div>
            <h6 class="heading post-category">
              <NuxtLink
                v-for="(tag, index) in firstBlog.tags"
                :key="index"
                to="/"
              >
                {{ tag }}
              </NuxtLink>
            </h6>
            <h3 class="title is-3 post-title">
              {{ firstBlog.title }}
            </h3>
            <p class="post-excerpt">
              {{ firstBlog.description }}
            </p>
            <br>
            <NuxtLink
              :to="{name: 'blog-slug', params: { slug: firstBlog.slug }}"
              class="button is-primary"
            >
              Đọc thêm
            </NuxtLink>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  props: {
    firstBlog: {
      type: Object,
      required: true
    }
  }
})
export default class FeaturedBlog extends Vue {
  featuredTitle: string = 'Latest'
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
