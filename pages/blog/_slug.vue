<template>
  <section class="section blog-detail">
    <div class="container is-max-desktop content">
      <section class="blog-detail__intro">
        <div class="blog-detail__createby">
          <span class="blog-detail__author">{{ blogDetail.author }}</span>
          &nbsp;on&nbsp;
          <span class="blog-detail__published">{{ blogDetail.published }}</span>
        </div>
        <h1 class="blog-detail__title title is-2">
          {{ blogDetail.title }}
        </h1>
        <div class="blog-detail__description">
          {{ blogDetail.description }}
        </div>
      </section>
      <section class="blog-detail__featured-img">
        <img :src="blogDetail.image">
      </section>
      <section class="blog-detail__content">
        <nuxt-content :document="blogDetail" />
      </section>
    </div>
    <script
      src="https://utteranc.es/client.js"
      repo="kmacoders/kmacoders.github.io"
      issue-term="pathname"
      label="Your comments"
      theme="github-light"
      crossorigin="anonymous"
      async
    />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import global from '@/utils/global'
import getSiteMeta from '@/utils/getSiteMeta'
import Prism from '~/plugins/prism'
import { IContent } from '~/types/content/page'

@Component({
  name: 'BlogPage',
  async asyncData ({ $content, params }) {
    const findedBlog = await $content('blog', { deep: true })
      .where({ slug: params.slug })
      .fetch<IContent[]>()
    const [blogDetail] = findedBlog

    const [prev, next] = await $content('blog', { deep: true })
      .only(['title', 'slug', 'published'])
      .sortBy('published', 'desc')
      .surround(params.slug)
      .fetch<IContent[]>()

    const allBlogs = await $content('blog', { deep: true })
      .only(['title', 'description', 'image', 'slug', 'published', 'tags'])
      .sortBy('published', 'desc')
      .fetch()

    const blogsByTag = allBlogs.filter((blog: IContent) => {
      const blogTags = blog.tags.map(x => x.toLowerCase())
      return blogTags.includes(blog.tags[0].toLowerCase())
    })

    return {
      blogDetail,
      blogsByTag,
      prev,
      next
    }
  }
})
export default class BlogDetail extends Vue {
  blogDetail!: IContent

  blogsByTag!: IContent[]

  prev!: IContent

  next!: IContent

  head () {
    const metaData = {
      type: 'website',
      title: this.blogDetail.title,
      description: this.blogDetail.description,
      url: `${this.$config.baseUrl}/blog/${this.$route.params.slug}`,
      mainImage: this.blogDetail.image
    }

    return {
      title: this.blogDetail.title,
      meta: [
        ...getSiteMeta(metaData),
        {
          property: 'blog:published_time',
          content: this.blogDetail.createdAt
        },
        {
          property: 'blog:modified_time',
          content: this.blogDetail.updatedAt
        },
        {
          property: 'blog:tag',
          content: this.blogDetail.tags ? this.blogDetail.tags.toString() : ''
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: global.author || '' },
        { name: 'twitter:label2', content: 'Filed under' },
        {
          name: 'twitter:data2',
          content: this.blogDetail.tags ? this.blogDetail.tags.toString() : ''
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/blog/${this.$route.params.slug}`
        }
      ]
    }
  }

  mounted () {
    Prism.highlightAll()
  }
}
</script>
<style lang="scss">
section.blog-detail__intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .blog-detail__createby {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 200;
  }

  h1.blog-detail__title {
    margin-top: 0.5rem;
    text-align: center;
    color: $rio-primary-color;
  }

  .blog-detail__description {
    text-align: center;
  }
}

section.blog-detail__featured-img {
  margin: 2rem 0;

  @include responsive(MD) {
    margin: 3rem 0;
  }
}

section.blog-detail__content {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a[aria-hidden="true"] {
      display: none;
    }
  }

  .nuxt-content {
    h2 {
      position: relative;
      padding-left: 2rem;

      &::before {
        content: '#';
        position: absolute;
        left: 0;
        color: $rio-primary-color;
      }
    }

    img {
      display: block;
      margin: 0 auto;
    }
  }

  // Overide bulma css for prims hightlight
  .nuxt-content-highlight {
    .token.tag:not(body) {
      display: inherit;
      background-color: inherit;
      border-radius: inherit;
      font-size: inherit;
      padding-left: inherit;
      padding-right: inherit;
    }
  }
}

</style>
