<template>
  <div class="blog-item-preview">
    <h3 class="heading post-category">
      <NuxtLink
        v-for="(tag, i) in tags"
        :key="i"
        :to="{ name: 'tags-tag', params: { tag: tag }}"
      >
        <span class="tag is-light is-normal mr-2">{{ tag }}</span>
      </NuxtLink>
    </h3>
    <h1 class="title post-title has-text-primary">
      {{ title }}
    </h1>
    <p class="post-excerpt">
      {{ description }}
    </p>
    <br>
    <NuxtLink
      :to="{ name: 'blog-slug', params: { slug: slug }}"
      class="button is-primary"
    >
      Đọc thêm
    </NuxtLink>
  </div>

</template>
<script>
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  props: {
    tags: {
      type: Array,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    slug: {
      type: String,
      require: true
    }
  }
})
export default class BlogItemPreiview extends Vue {}
</script>
