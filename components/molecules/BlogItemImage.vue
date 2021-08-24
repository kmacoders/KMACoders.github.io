<template>
  <div class="blog-image-wrapper">
    <div
      class="blog-image"
      :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class BlogItemImage extends Vue {
  @Prop({ type: String, required: true })
  imageUrl!: string
}
</script>

<style lang="scss" scoped>
.blog-image-wrapper {
  overflow: hidden;

  @include aspectRatio(16/9);
}

.blog-image {
  @include aspectRatio(16/9);

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.35s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
