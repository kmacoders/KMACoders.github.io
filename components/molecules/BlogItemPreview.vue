<template>
  <div class="blog-item-preview">
    <div class="blog-item-preview__info">
      <span class="blog-item-preview__icon">
        <IconDate />
      </span>
      &nbsp;
      <span class="blog-item-preview__published">
        <LocaleDateString :date="blogDetail.published" />
      </span>
      &nbsp; &middot; &nbsp;
      <span class="blog-item-preview__readingtime">
        <ReadingTime :content="blogDetail.contentBeforeJson" />
      </span>
    </div>
    <NuxtLink
      :to="{ name: 'blog-slug', params: { slug: blogDetail.slug }}"
    >
      <h1 class="blog-item-preview__title title has-text-primary">
        {{ blogDetail.title }}
      </h1>
    </NuxtLink>
    <p class="blog-item-preview__description">
      {{ blogDetail.description }}
    </p>
    <br>
    <h3 class="blog-item-preview__heading heading">
      <NuxtLink
        v-for="(tag, i) in blogDetail.tags"
        :key="i"
        :to="{ name: 'tags-tag', params: { tag: tag }}"
      >
        <span class="tag is-light is-normal mr-2">{{ tag }}</span>
      </NuxtLink>
    </h3>
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue'
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import IconDate from '@/components/atoms/icon/IconDate.vue'
import { IContent } from '~/types/content/page'

@Component({
  components: {
    IconDate
  }
})
export default class BlogItemPreiview extends Vue {
  @Prop({ type: Object as PropType<IContent> })
  blogDetail!: IContent
}
</script>
<style lang="scss">
.blog-item-preview__description {
  @include limitLine(3);
}

.blog-item-preview__title {
  height: 4.5rem;
  margin-bottom: 1rem;

  @include limitLine(2);
}

.blog-item-preview__info {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: 300;

  .blog-item-preview__icon {
    margin-right: 0.5rem;

    svg {
      @include box(15px, 15px);
    }
  }
}
</style>
