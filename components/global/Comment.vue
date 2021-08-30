<template>
  <div>
    <br>
    <div id="blog-comment" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Comment extends Vue {
  mounted (): void {
    const scriptTag = document.createElement('script') as HTMLScriptElement
    scriptTag.async = true
    scriptTag.src = 'https://giscus.app/client.js'
    scriptTag.setAttribute('data-repo', 'kmacoders/kmacoders.github.io')
    scriptTag.setAttribute('data-repo-id', 'MDEwOlJlcG9zaXRvcnkzOTQ3MTY1NDA=')
    scriptTag.setAttribute('data-category', 'General')
    scriptTag.setAttribute('data-category-id', 'DIC_kwDOF4blfM4B-3jc')
    scriptTag.setAttribute('data-mapping', 'pathname')
    scriptTag.setAttribute('data-reactions-enabled', '1')
    scriptTag.setAttribute('data-emit-metadata', '0')
    scriptTag.setAttribute('data-theme', 'light')
    scriptTag.setAttribute('crossorigin', 'anonymous')

    const blogCommentEl = document.getElementById('blog-comment')

    if (blogCommentEl) {
      blogCommentEl.appendChild(scriptTag)
    }
  }
}
</script>
