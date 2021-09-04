<template>
  <NuxtLink
    :to="{ name: 'blog-slug', params: { slug: slug }}"
    class="blog-image-wrapper"
  >
    <div
      class="blog-image-wrapper__img"
      :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
    >
      <div class="blog-image-wrapper__overlay">
        <span class="button is-primary">Read More</span>
      </div>
    </div>
  </NuxtLink>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class BlogItemImage extends Vue {
  @Prop({ type: String, required: true })
  imageUrl!: string

  @Prop({ type: String, required: true })
  slug!: string
}
</script>

<style lang="scss" scoped>
.blog-image-wrapper {
  @include aspectRatio(16/9);
}

.blog-image-wrapper__overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  left: -100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  transition: all 0.3s ease-in-out;
}

.blog-image-wrapper__img {
  @include aspectRatio(16/9);

  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;

  &:hover {
    .blog-image-wrapper__overlay {
      left: 0;
    }
  }
}
</style>
