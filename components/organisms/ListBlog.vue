<template>
  <div class="columns is-multiline">
    <div
      v-for="(blog, index) in listBlogs"
      :key="index"
      :class="'column post' + isFour(index + 1)"
    >
      <article class="columns is-multiline">
        <div class="column is-12 post-img">
          <img :src="blog.image" alt="Featured Image">
        </div>
        <div class="column is-12 featured-content ">
          <h3 class="heading post-category">
            <span
              v-for="(tag, i) in blog.tags"
              :key="i"
            >
              {{ tag }}
            </span>&nbsp;
          </h3>
          <h1 class="title post-title">
            {{ blog.title }}
          </h1>
          <p class="post-excerpt">
            {{ blog.description }}
          </p>
          <br>
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: blog.slug }}"
            class="button is-primary"
          >
            Đọc thêm
          </NuxtLink>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  props: {
    listBlogs: {
      type: Array,
      require: true
    }
  }
})
export default class ListBlog extends Vue {
  isFour (position) {
    if (position <= 2 && this.listBlogs.length > 5) {
      return ' is-6'
    }
    return ' is-4'
  }
}
</script>
