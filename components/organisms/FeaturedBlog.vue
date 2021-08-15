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
          <div>
            <div class="feature-content__time">
              {{ firstBlog.published }}
            </div>
            <h3 class="title is-3 post-title">
              {{ firstBlog.title }}
            </h3>
            <h6 class="heading post-category">
              <NuxtLink
                v-for="(tag, index) in firstBlog.tags"
                :key="index"
                to="/"
              >
                {{ tag }}
              </NuxtLink>
            </h6>
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
export default class FeaturedBlog extends Vue {}
</script>
<style lang="scss">
.featured-post {
  .featured-post__title {
    position: relative;
    width: fit-content;
  }
}
</style>
